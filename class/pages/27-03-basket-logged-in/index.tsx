import { useState } from "react";
import { useEffect } from "react";


export default function BasketLoggedinPage() {
  const [basketItems,setBasketItems] = useState([])
  useEffect(() => {
    const Itmes = JSON.parse(localStorage.getItem('baskets')) || []
    setBasketItems(Itmes)
  },[])
  
  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{index}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}
    </>
  );
}