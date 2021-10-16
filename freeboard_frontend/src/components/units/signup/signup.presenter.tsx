import {
  CloseSquareOutlined,
  MinusSquareOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import {
  Wrapper,
  BoxWrapper,
  Top,
  TopText,
  Body,
  Signup,
  Title,
  SideImg,
  Contents,
  Error2,
  InputWrapper,
  ModalBox,
  ModalImage,
  ModalContents,
  ModalButton,
  LoginTitle,
  LoginBox,
  CoinIcon,
  LoginInput,
  Logintext,
} from "./signup.styles";
import Input01 from "../../commons/inputs/01/Input";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//modal style
const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignupUI(props: any) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <BoxWrapper>
        <Top>
          <SmileOutlined />
          <TopText>Welcome to the Market!</TopText>
          <div>
            <MinusSquareOutlined />
            <CloseSquareOutlined />
          </div>
        </Top>
        {/* 로그인 화면 */}
        {props.isEdit && (
          <Body>
            <LoginBox>
              <CoinIcon src="/coin.gif" />
              <LoginTitle>
                Welcome to the market!
                <br />
                Login in to your account
              </LoginTitle>
              <LoginInput
                onChange={props.onChangeEmail}
                placeholder="ID"
              ></LoginInput>
              <LoginInput
                type="password"
                onChange={props.onChangePassword}
                placeholder="password"
              ></LoginInput>
            </LoginBox>
          </Body>
        )}
        {/* 회원가입 화면 */}
        {!props.isEdit && (
          <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <Body>
              <SideImg></SideImg>
              <Contents>
                <Title>User Information</Title>
                <InputWrapper>
                  <Input01
                    name="email :"
                    type="text"
                    register={props.register("email")}
                  />
                  <Error2>{props.formState.errors.email?.message}</Error2>
                </InputWrapper>
                <InputWrapper>
                  <Input01
                    name="name:"
                    type="text"
                    register={props.register("name")}
                  />
                  <Error2>{props.formState.errors.name?.message}</Error2>
                </InputWrapper>
                <InputWrapper>
                  <Input01
                    name="password:"
                    type="password"
                    register={props.register("password")}
                  />
                  <Error2>{props.formState.errors.password?.message}</Error2>
                </InputWrapper>
                <InputWrapper>
                  <Input01
                    name="password:"
                    type="password"
                    register={props.register("password2")}
                  />
                  <Error2>{props.formState.errors.password2?.message}</Error2>
                </InputWrapper>
              </Contents>
            </Body>
          </form>
        )}
        {props.isEdit ? (
          <div>
            <Signup onClick={props.onClickLogin}>Login</Signup>
            <Signup onClick={props.MoveSignUpPage}>SignUp</Signup>
          </div>
        ) : (
          <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <Signup type="submit" isValid={props.formState.isValid}>
              SignUp
            </Signup>
          </form>
        )}
        {/* Modal */}
        {props.IsOpen && (
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <ModalBox>
                  <ModalImage src="/giphy.gif" />
                  <ModalContents>
                    회원가입이 완료되었습니다. <br />
                    로그인 후 이용해주세요.
                  </ModalContents>
                  <ModalButton
                    onClick={props.MoveLoginPage}
                    style={{ fontFamily: "myfontko" }}
                  >
                    Login
                  </ModalButton>
                </ModalBox>
              </Box>
            </Modal>
        )}
      </BoxWrapper>
    </Wrapper>
  );
}
