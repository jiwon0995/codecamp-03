import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProductInput
  ($seller:String, $createProductInput:CreateProductInput!){
    createProduct(
      seller: $seller, 
      createProductInput: $createProductInput
      ){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutiationProduct() { 
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const [mySeller, setMySeller] = useState('')
  const [productName, setProductName] = useState('')
  const [producDetail, setProductDetail] = useState('')
  const [productPrice, setProductPrice] = useState('')

  function onChangeSeller(event) { 
    setMySeller(event.target.value)
  }
  function onChangeProductName(event) {
    setProductName(event.target.value)
  }
  function onChangeproducDetail(event) {
    setProductDetail(event.target.value)
  }
  function onChangeproductPrice(event) {
    setProductPrice(event.target.value)
  }

  async function onClickSubmit() { 
    const result = await createProduct({
      variables: {
        seller: mySeller,
        createProductInput: {
          name: productName,
          detail: producDetail,
          price: Number(productPrice)
        }
      }
    })
    console.log(result.data.createProduct._id)
  }
  return (
    <>
      판매자 : <input onChange={onChangeSeller} type="text" />
      상품명 : <input onChange={onChangeProductName} type="text" />
      상품상세 : <input onChange={onChangeproducDetail} type="text" />
      상품가격 : <input onChange={onChangeproductPrice} type="text" />
      <button onClick={onClickSubmit}>상품 등록하기!!</button>
    </>
  )
}