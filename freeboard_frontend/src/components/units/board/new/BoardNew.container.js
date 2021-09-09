import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from "next/router";
import BoardNewUI from '../../../units/board/new/BoardNew.presenter'
import { CREAT_BOARD, UPDATE_PRODEUT } from '../new/BoardNew.queries'


export default function BoardNewContaniner(props) {
  const router = useRouter()
  const [createBoard] = useMutation(CREAT_BOARD) //Mutation 사용하겠다!
  const [updateBoard] = useMutation(UPDATE_PRODEUT)
  // 작성자, 비밀번호, 제목, 내용 값을 state에 담기. 초기값은 빈 문자열
  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContent] = useState("")
  // 에러 메세지  state에 담기. 초기값이 빈 문자열이라 보이지 않음 
  const [writerError, setWriterError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentError, setContentError] = useState("")

  const [buttonColorChange, setButtonColorChange] = useState(false)
  //onchange함수. 각 함수별로 이벤트가 발생하면 그 값을 각 state에 담는다. 
  //조건문 내용: 값이 들어오면 에러메세지에 빈문자열을 넣어준다
  function onChangeWriter(event) {
    setWriter(event.target.value)
    if (event.target.value !== "") {
      setWriterError("")
      if (event.target.value !== "" && password !== "" && title !== "" && contents !== "") {
        setButtonColorChange(true)
      } else {
        setButtonColorChange(false)
      }
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value)
    if (event.target.value !== "") {
      setPasswordError("")
    }
    if (writer !== "" && event.target.value !== "" && title !== "" && contents !== "") {
      setButtonColorChange(true)
    } else {
      setButtonColorChange(false)
    }

  }
  function onChangeTitle(event) {
    setTitle(event.target.value)
    if (event.target.value !== "") {
      setTitleError("")
    }
    if (writer !== "" && password !== "" && event.target.value !== "" && contents !== "") {
      setButtonColorChange(true)
    } else {
      setButtonColorChange(false)
    }
  }

  function onChangeContent(event) {
    setContent(event.target.value)
    if (event.target.value !== "") {
      setContentError("")
    }
    if (writer !== "" && password !== "" && title !== "" && event.target.value !== "") {
      setButtonColorChange(true)
    } else {
      setButtonColorChange(false)
    }
  }

  //빈칸 검사 함수
  async function onClickSignup() {

    if (writer === "") {
      setWriterError("작성자를 입력해 주십시오.")
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해 주십시오.")
    }
    if (title === "") {
      setTitleError("제목을 입력해 주십시오.")
    }
    if (contents === "") {
      setContentError("내용을 입력해 주십시오.")
    }
    //모두 값이 들어오면 mutation을 요청한다
    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          }
        }
      })
      router.push(`/boards/detail/${result.data.createBoard._id}`)
    }
  }
  async function onClickUpdata() {
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.detail,
          password: password,
          updateBoardInput: {
            title: title,
            contents: contents,
          }
        }
      })
      router.push(`/boards/detail/${result.data.updateBoard._id}`)
    } catch (error){
      console.log(error)
    } 
  }

  return (
    <BoardNewUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickSignup={onClickSignup}
      buttonColorChange={buttonColorChange}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      isEdit={props.isEdit}
      onClickUpdata={onClickUpdata}
    />
  )
}