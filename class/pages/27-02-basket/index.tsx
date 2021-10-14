import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'

const FETCH_BOARD = gql`
  query fetchBoards{
    fetchBoards{
      _id
      title
      writer
    }
  }
`




export default function BasketPage() {
  const router=useRouter()
  const { data } = useQuery<Pick<IQuery,"fetchBoards">,IQueryFetchBoardsArgs>(FETCH_BOARD)
  
  const onClickBasket = (el) => () => {
    //기존 장바구니 불러오기 없으면 빈배열
    const baskets = JSON.parse(localStorage.getItem('baskets'))||[]

    //중복 체크!
    let isExists = false //스위치 변수

    baskets.forEach((basketsEl) => {
      //내가 클릭한 아이디랑 불러온 아이디랑 같은게 있는지 확인
      if(el._id === basketsEl._id) isExists = true
    })
    if (isExists) {
      alert('이미 장바구니에 담긴 상품입니다.')
      return
    }
    
    //__typename 제거
    const newEl = { ...el }
    delete newEl.__typename
    baskets.push(newEl)
    
    // console.log('담기', el)
    localStorage.setItem("baskets",JSON.stringify(baskets))
  }
  const onCLickLogin = () => {
    alert('login!')
    const baskets = JSON.parse(localStorage.getItem('baskets')) || []
    if (baskets.length) { 
      const result = confirm('장바구니로 이동?')
      if (result) router.push('27-03-basket-logged-in')
    }
  }
  
  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{index}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onCLickLogin}>로그인하기</button>
    </>
  );
}