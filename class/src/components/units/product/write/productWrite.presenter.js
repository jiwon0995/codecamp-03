export default function ProductNewUI(props) { 

  return (
    <>
      <h1>{props.isEdit ? "상품 수정페이지" : "상품 등록페이지"}</h1>
      판매자 : <input type="text" onChange={props.onChangeSeller} /><br /><br />
      상품명 : <input type="text" onChange={props.onChangeName} /><br /><br />
      설명 : <input type="text" onChange={props.onChangeDetail} /><br /><br />
      가격 : <input type="text" onChange={props.onChangePrice} /><br /><br />
      {!props.isEdit && <button onClick={props.onClickCreate}>상품 등록하기</button>}
      {props.isEdit && <button onClick={props.onClickEdit}>상품 수정하기</button>}
      
    </>
  )
}