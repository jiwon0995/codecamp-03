import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer:String, $title:String, $contents:String) {
    createBoard(
      writer: $writer, 
      title: $title, 
      contents: $contents)
      {
      number
      message
    }
  } 
`
//준비과정




export default function GraphqlMutationBoard3Page() { 
  const[createBoard] = useMutation(CREATE_BOARD) //준비과정 apollo
  
  const [myWriter, setMywriter] = useState("") //reat
  const [myTitle, setMytitle] = useState("")
  const [myContents, setMyContents] = useState("")

  function onChangeMywriter(event) { 
    setMywriter(event.target.value)
  }
  function onChangeMytitle(event) { 
    setMytitle(event.target.value)
  }
  function onChangeMycontents(event) { 
    setMyContents(event.target.value)
  }

  async function aaa() { 
    const result = await createBoard({
      variables: { writer:myWriter, title:myTitle, contents:myContents }
    }) 
    console.log(result)
    console.log(result.data.createBoard.number)
  }
  return (
    <>
      작성자 : <input type="text" onChange={onChangeMywriter}/><br/><br/>
      제목 : <input type="text" onChange={onChangeMytitle}/><br/><br/>
      내용 : <input type="text" onChange={onChangeMycontents}/><br/><br/>
      <button onClick={aaa}>GRAPHQL-API 요청하기!</button>
    </>
  )
}