import Head from "next/head";

declare const window: typeof globalThis & {
  IMP:any
}
export default function PaymentPage() {
  
  const onClickPayment = () => {
    var IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          console.log(rsp)
          
          // mutation()=> createPointTragactionOfLoading
          // ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  };

  return (
    <>
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
      결제금액: <input type="text"></input>

      
      <br />
      <button onClick={onClickPayment}>결제하기!</button>
    </>
  );
}
