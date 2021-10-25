import {
  Logo,
  Nav,
  Wrapper,
  Font,
  FontWrapper,
  Font2,
  LogoWrapper,
  LogoText,
  ProfileImg,
  ProfileName,
  Login,
  PointDiv,
} from "./LayoutHeader.styles";
import Head from "next/head";
import { useState } from "react";
import { Modal } from 'antd'
import { POINT } from "./LayoutHeader.queries";
import { useMutation } from "@apollo/client";

declare const window: typeof globalThis & {
  IMP: any;
};
export default function LayoutHeaderUI(props: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState("")
  const [createPointTransactionOfLoading] = useMutation(POINT);
  
  const onClickIsOpen = () => {
    setIsOpen(true)
  }
  const onClickCancel = () => {
    setIsOpen(false)
  }
  const onChangeAmount = (e) => { 
    setAmount(e.target.value)
  }
  const onClickPayment = () => {
    setIsOpen(false)
    var IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        amount: Number(amount),
        name: "포인트",
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          console.log(rsp);

          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          alert("포인트 충전 완료!")
          // mutation()=> createPointTragactionOfLoading
          // ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          alert("결제 실패!")
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  };
  return (
    <Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        />
      </Head>
      <Nav>
        <div style={{ width: "600px", display: "flex" }}>
          <LogoWrapper>
            <Logo src="/windowslogo.png" id="/boards.main" />
            <LogoText>Start</LogoText>
          </LogoWrapper>
          <FontWrapper>
            <Font id="/boards" onClick={props.onClickMove}>
              자유게시판
            </Font>
            <Font id="/market/list" onClick={props.onClickMove}>
              중고마켓
            </Font>
            <Font>마이페이지</Font>
            <Font id="/boards/publicAPI" onClick={props.onClickMove}>
              API
            </Font>
          </FontWrapper>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {props.data?.fetchUserLoggedIn.picture ? (
            <ProfileImg>{props.data?.fetchUserLoggedIn.picture}</ProfileImg>
          ) : (
            <ProfileImg src="/msagent.png"></ProfileImg>
          )}

          {props.data?.fetchUserLoggedIn.name ? (
            <ProfileName>{props.data?.fetchUserLoggedIn.name} 님</ProfileName>
          ) : (
            <ProfileName>알수없음 님</ProfileName>
          )}
          {props.accessToken ? (
            <Login onClick={props.onClickLogout}>로그아웃</Login>
          ) : (
            <Login onClick={props.onClickLogin}>로그인</Login>
          )}
          {props.data?.fetchUserLoggedIn.userPoint?.amount ? (
            <ProfileName>
              {props.data?.fetchUserLoggedIn.userPoint.amount} point{" "}
            </ProfileName>
          ) : (
            <ProfileName>0 point </ProfileName>
          )}
          <PointDiv onClick={onClickIsOpen}>Point 충전하기</PointDiv>
          <Modal
            visible={isOpen}
            onOk={onClickPayment}
            onCancel={onClickCancel}
          >
            충전금액 : <input onChange={onChangeAmount}></input>
          </Modal>
        </div>
      </Nav>
    </Wrapper>
  );
}
