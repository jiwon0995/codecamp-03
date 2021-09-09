import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
  query fetchProduct($productId:ID){
    fetchProduct(productId:$productId){
      seller,
      name,
      detail,
      price
    }
  }
`

export default function ProductDetailPage() { 
  const router = useRouter()

  const { data } = useQuery(FETCH_PRODUCT, { 
    variables: {productId: router.query.add}
  })

  function onClickMoveEdit() { 
    router.push(`/quiz/08-02-quiz-product-detail/${router.query.add}/edit`)
  }

  return (
    <>
      <div>판매자 : {data?.fetchProduct.seller}</div>
      <div>제품 : {data?.fetchProduct.name}</div> 
      <div>상세설명 : {data?.fetchProduct.detail}</div> 
      <div>가격 : {data?.fetchProduct.price}</div> 
      <button onClick={onClickMoveEdit}> 수정하러 가기 </button>
    </>
  )
}