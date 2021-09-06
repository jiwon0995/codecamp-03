import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from 'react'
//mutation 불러오기(?)

const CREATE_PRODUCT = gql`  
  mutation createProduct($seller:String, $createProductInput:CreateProductInput!){
    createProduct(seller:$seller,createProductInput:$createProductInput){
      _id
      number
      message
    }
  }
`

export default function DynamicProductPage() { 
  const router = useRouter()
  
  const [creatProduct] = useMutation(CREATE_PRODUCT) //mutation사용할거당
  // state에 판매자, 상품명, 설명, 가격 값 저장 , 초기값은 빈 문자열
  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  //onChange 작동 함수
  function onChangeSeller(event) { 
    setSeller(event.target.value)
  }
  function onChangeName(event) { 
    setName(event.target.value)
  }
  function onChangeDetail(event) { 
    setDetail(event.target.value)
  }
  function onChangePrice(event) { 
    setPrice(event.target.value)
  }

  // 상품동록 버튼 누르면 creatProduct mutation 요청
  async function onClickCreatProduct() {  
    
    const result = await creatProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price)
        }
      }
    }) //mutation 요청받는 곳
    router.push(`05-02-quiz-dynamic-product-read/${result.data.createProduct._id}`)

  }


  return (
    <>
      판매자 : <input onChange={onChangeSeller} type="text" /><br />
      상품명 : <input onChange={onChangeName} type="text" /><br />
      상품내용 : <input onChange={onChangeDetail} type="text" /><br />
      상품가격 : <input onChange={onChangePrice} type="text" /><br />
      <button onClick={onClickCreatProduct}>상품 등록하기</button>

    </>
  )
}