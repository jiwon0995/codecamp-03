import { useEffect } from "react";
import styled from '@emotion/styled'
import {
  CloseSquareOutlined,
  MinusSquareOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

const MapWrapper = styled.div`
  width: 350px;
  height: 250px;
  margin-top: 150px;
  margin-left: 50px;
  background-color: #c6c6c6;
  border: 2px solid lightgray;
  box-shadow: 0px 10px 20px #333;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
  `

const MapDiv = styled.div`
  width: 344px;
  height: 215px;
`
export const TopBar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d3f705;
`;
export const Name = styled.span`
  margin-left: 15px;
  font-family: "myfontko";
  font-size: 15px;
`;
export const IconX = styled(CloseSquareOutlined)`
  font-size: 23px;
  color: black;
  background-color: lightgray;
`
export const IconY = styled(MinusSquareOutlined)`
  font-size: 23px;
  color: black;
  background-color: lightgray;
  `

declare const window: typeof globalThis & { kakao: any };
// window 를 globalThis라고 표현하기도 함

export default function KakaoMapDetail(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0c35afa408f9ae186dace66aa85d84c";
    document.head.appendChild(script);
    // 스크립트 만들고 document 헤드에 추가하는 부분

    script.onload = () => {
      // 스크립트가 로드될때까지 기다리는 부분
      window.kakao.maps.load(function () {
        // 카카오 맵이 로드 될때까지 기다리는 부분
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.data?.fetchUseditem.useditemAddress?.lat ||
              37.497973081282595,
            props.data?.fetchUseditem.useditemAddress?.lng || 127.02763975481963
          ), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        console.log(options);
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log("지도 :", map);
        // 기존에 있던 맵을 그리는 부분

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          props.data?.fetchUseditem.useditemAddress?.lat || 37.497973081282595,
          props.data?.fetchUseditem.useditemAddress?.lng || 127.02763975481963
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [props.data]);


  return (
    <>
      <MapWrapper>
        <Tooltip
          title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
        >
          <TopBar>
            <Name>Location</Name>
            <div>
              <IconY />
              <IconX />
            </div>
          </TopBar>
        </Tooltip>
        <MapDiv id="map"></MapDiv>
      </MapWrapper>
    </>
  );
}