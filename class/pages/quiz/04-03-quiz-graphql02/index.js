import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProductInput($seller:String, $createProductInput:CreateProductInput!){
  createProduct(
    seller:$seller,
	  createProductInput: $createProductInput

  ){
  _id
  number
  message
}
}
`

export default function GragphqlCreatProduct() { 

  const [createProduct] = useMutation(CREATE_PRODUCT)

  //product state
  const [mySeller, setMySeller] = useState("")
  const [myName, setMyName] = useState("")
  const [myDetail, setMyDetail] = useState("")
  const [myPrice, setMyPrice] = useState("")

  function onChangeSeller(event) { 
    setMySeller(event.target.value)
  }
  function onChangeName(event) { 
    setMyName(event.target.value)
  }
  function onChangeMyDetail(event) { 
    setMyDetail(event.target.value)
  }
  function onChangeMyprice(event) { 
    setMyPrice(event.target.value)
  }


  async function CreateProduct() { 
    const result = await createProduct({
      variables: {
        seller: mySeller,
        createProductInput: {
          name: myName,
          detail: myDetail,
          price: Number(myPrice)          
        }
      }
    })
    console.log(result)
  }


  return (
    <>
      seller : <input onChange={onChangeSeller} type="text" /><br />
      name : <input onChange={onChangeName} type="text"/><br />
      detail : <input onChange={onChangeMyDetail} type="text"/><br />
      price : <input onChange={onChangeMyprice} type="text"/><br />
      <button onClick={CreateProduct}>GRAGPHQL API 요청하기!!</button>
    </>
  )
}