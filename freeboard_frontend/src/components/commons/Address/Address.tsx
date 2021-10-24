import styled from "@emotion/styled";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  width: 996px;

  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin: 10px 0px;
`;
const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: "myfont";
`;
const Map = styled.div`
  width: 384px;
  height: 252px;
  background-color: #6c6c6c;
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

const GPSInput = styled.input`
  width: 108px;
  height: 52px;
  margin-right: 15px;
`;
const GPSBox = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;
export default function Address(props: any) {
  
  const onChangeAddress = (e) => {
    props.setAddress(e.target.value)
  }
  const onChangeAddressDetail = (e) => {
    props.setAddressDetail(e.target.value)
  }
  
  const [LatLng, setLatLng] = useState({});
  
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8dc314c391c1ad5fbb51d3d1c894435e";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.LAT || 33.450701,
            props.LNG || 126.570667
          ), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(map);

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            setLatLng(latlng);
            // 마커 위치를 클릭한 위치로 옮깁니다

            marker.setPosition(latlng);

            props.onChangeLat(latlng.Ma);
            props.onChangeLng(latlng.La);

            console.log("좌표", latlng);
            console.log("좌표1", latlng.Ma);
            console.log("whk", props.LAT);
            // var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            // message += '경도는 ' + latlng.getLng() + ' 입니다';

            // var resultDiv = document.getElementById('clickLatlng');
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);
  return (
    <Wrapper>
      <ContentsBox>
        <Label>Location</Label>
        <Map id="map"></Map>
      </ContentsBox>
      <ContentsBox>
        <Label>GPS</Label>
        <GPSBox>
          <GPSInput type="text" placeholder="위도(LAT)" value={props.LAT} />
          <GPSInput type="text" placeholder="경도(LNG)" value={props.LNG} />
        </GPSBox>
        <ContentsBox>
          <Label>Address</Label>
          <AddressInput onChange={onChangeAddress} />
          <AddressInput type="text" onChange={onChangeAddressDetail} />
        </ContentsBox>
      </ContentsBox>
    </Wrapper>
  );
}
