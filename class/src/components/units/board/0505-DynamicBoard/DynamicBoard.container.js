import DynamicBoardUI from './DynamicBoard.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from './DynamicBoard.queries'
import { useRouter } from "next/router"


export default function DynamicBoardWrite() {
  const router = useRouter() //라우터 사용하기

  const [createBoard] = useMutation(CREATE_BOARD) //준비과정 apollo, mutation사용하기. CREATE_BOARE로 이동.

  const [myWriter, setMywriter] = useState("") //reat state 사용하기. myWriter state 빈문자열로 초기화
  const [myTitle, setMytitle] = useState("")
  const [myContents, setMyContents] = useState("")

  //onChange 작동 함수

  function onChangeMywriter(event) {  //onChange되면 이벤트가 생긴 타켓 벨류를 setMywriter를 이용해서 Mywriter state에 저장
    setMywriter(event.target.value)
  }
  function onChangeMytitle(event) {
    setMytitle(event.target.value)
  }
  function onChangeMycontents(event) {
    setMyContents(event.target.value)
  }
  //mutation 응답받기, router.push이용해서 페이지 이동해서 응답받은 내용 페이지에 보여주기.
  async function aaa() {
    try {
      const result = await createBoard({ //변수 result에 mutation 응답 저장
        variables: { writer: myWriter, title: myTitle, contents: myContents }
      })
      console.log(result)
      console.log(result.data.createBoard.number)
      // router.push('/05-06-dynamic-board-read/' + result.data.createBoard.number) //옛날 방식
      router.push(`/05-06-dynamic-board-read/${result.data.createBoard.number}`) //템플릿 리터럴:전체를 ``으로 감싸고 변수 ${}감싸주기

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <DynamicBoardUI
      onChangeMywriter={onChangeMywriter}
      onChangeMytitle={onChangeMytitle}
      onChangeMycontents={onChangeMycontents}
      aaa={aaa}
    />
  )
}