import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao : any
}

export default function KakaoMapPage() {
  // 3.div에 지도 넣기
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    console.log(map)
  }, []);

  return (
    <>
      {/* 1.다운로드 후 브라우저에 저장 */}
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1308ac4226e0e0b5a9ba8595a2ec99dd"
        ></script>
      </Head>
      {/* 2. 빈 div태그 생성 */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
