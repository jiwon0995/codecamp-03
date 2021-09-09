import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProductNewUI from '../write/productWrite.presenter'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from '../../product/write/productWrite.queries'





// 재사용하는 컴포넌트 
export default function ProductContainer(props) { 
  
  const router = useRouter()
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  
  // 입력값을 state에 넣어준다
  const [sellerName, setSellerName] = useState("")
  const [productName, setProductName] = useState("")
  const [productDetail, setProductDetail] = useState("")
  const [productPrice, setProductPrice] = useState("")

  //onChange함수들
  function onChangeSeller(event) {
    setSellerName(event.target.value)
  }
  function onChangeName(event) { 
    setProductName(event.target.value)
  }
  function onChangeDetail(event) { 
    setProductDetail(event.target.value)
  }
  function onChangePrice(event) { 
    setProductPrice(event.target.value)
  }

  //등록하기 페이지 기능. 상품생성하고 받은 _id 값을 상세페이지로 보낸다.
  async function onClickCreate() { 
    const result = await createProduct({
      variables: {
        seller: sellerName,
        createProductInput: {
          name: productName,
          detail: productDetail,
          price: Number(productPrice)
        }
      }
    }) 
    console.log(result)
    router.push(`/quiz/08-02-quiz-product-detail/${result.data.createProduct._id}`)
  }
  
  //수정하기 페이지 기능 부분. 수정하고 받은 _id값을 상세페이지로 보낸다.
  async function onClickEdit() {
    await updateProduct({
      variables: {
        productId: (router.query.add),
        updateProductInput: {
          name: productName,
          detail: productDetail,
          price: Number(productPrice)
        }
      }
    })
    router.push(`/quiz/08-02-quiz-product-detail/${router.query.add}`)
  }
  
  
  // props 기능들
  return (
    <ProductNewUI
      onChangeSeller={onChangeSeller}
      onClickCreate={onClickCreate}
      isEdit={props.isEdit}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickEdit={onClickEdit}
    />
  )
}