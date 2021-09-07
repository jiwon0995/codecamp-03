import { gql, useMutation, useQuery } from "@apollo/client"
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts{
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px black;
`

const Column = styled.div`
  width: 20%;
  margin: 10px;
`
const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId:ID){
    deleteProduct(productId:$productId){
      message
    }
  }
`


export default function QuizMap() {
  const { data } = useQuery(FETCH_PRODUCTS)
  const [deletProduct] = useMutation(DELETE_PRODUCT)

  async function onClickProducts(event) {
    await deletProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }]
    })
  }

  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column><input type="checkbox" /></Column>
          <Column>ID : {el._id}</Column>
          <Column>판매자 : {el.seller}</Column>
          <Column>상품명 : {el.name}</Column>
          <Column>상세설명 : {el.detail}</Column>
          <Column>가격 : {el.price}</Column>
          <Column>날짜 : {el.createdAt}</Column>
          <Column>
            <button id={el._id} onClick={onClickProducts} >삭제하기</button>
          </Column>
        </Row>))}
    </div>
  )
}