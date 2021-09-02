import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_BOARD = gql`
  mutation creatBoard($writer:String, $title:String, $contents:String){
  createBoard(
    writer:$writer,
    title:$title,
    contents:$contents
  ){
    _id
    number
    message
  }
}
`

export default function quizGraphql1() { 
  const[creatBoard] = useMutation(CREATE_BOARD)
  
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")
  
  function onChangeWriter(event) { 
    setMyWriter(event.target.value)
  }
  function onChangeTitle(event) {
    setMyTitle(event.target.value)
  }
    function onChangeContents(event) { 
    setMyContents(event.target.value)
  }
  
  
  
  async function onClickCreateBoard() { 
    const result = await creatBoard({
      variables: {writer:myWriter, title:myTitle, contents:myContents}
    })
    console.log(result)
  }

  return (
    <>
      작성자 : <input onChange={onChangeWriter} /><br />
      제목 : <input onChange={onChangeTitle} /><br />
      내용 : <input onChange={onChangeContents} /><br />
      <button onClick={onClickCreateBoard}>GRAPHQL-API 요청하기</button>
    </>
  )
}