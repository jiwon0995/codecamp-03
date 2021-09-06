import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_PRODUCT = gql`
  query fetchProduct($productId:ID){
    fetchProduct(productId:$productId){
      seller
      name
      detail
      price
    }
  }
`


export default function DynamicProductRead() { 
  const router = useRouter()
  const {data} = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.readProduct }
  })
  console.log(data)
  
  return (
    <>
      <div>상품 상세 페이지 입니다.</div>
      <div>상품 판매자: {data?.fetchProduct.seller} </div>
      <div>상품 이름: {data?.fetchProduct.name}</div>
      <div>상품 내용:{data?.fetchProduct.detail}</div>
      <div>상품 가격: {data?.fetchProduct.price}</div>
    </>  
  )
}