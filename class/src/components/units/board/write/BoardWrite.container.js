import BoardWriteUI from './BoardWrite.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite() { 
  const [createBoard] = useMutation(CREATE_BOARD) //준비과정 apollo

  const [myWriter, setMywriter] = useState("") //reat
  const [myTitle, setMytitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const [zzz, setZzz] = useState(false)
  const [qqq, setQqq] = useState(false)

  //mywriter, myTitle, myContents모두 내용이 저장되어 있다면,
  // 즉, (myWriter!=="" && myTitle!==""&&myContents) 라면,
  //setQqq를 사용해서 false==>true 이모션의 버튼색을 노란색으로 변경하기


   //state특징때문에 마지막에 넣을 값을 event.target.value로 바꿔줘야한당!
  function onChangeMywriter(event) {
    setMywriter(event.target.value)
    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setQqq(true)
    }
  }
  function onChangeMytitle(event) {
    setMytitle(event.target.value)
    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setQqq(true)
    }
  }
  function onChangeMycontents(event) {
    setMyContents(event.target.value)
    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setQqq(true)
    }
  }

  async function aaa() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    })
    console.log(result)
    console.log(result.data.createBoard.number)
  }
  return (
      <BoardWriteUI
      onChangeMywriter={onChangeMywriter}
      onChangeMytitle={onChangeMytitle}
      onChangeMycontents={onChangeMycontents}
      aaa={aaa}
      zzz={zzz}
      qqq={qqq}
      
    />
  )
}