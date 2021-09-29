import { FileWordFilled } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client"
import { useRef } from "react";
import { useState } from "react"

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;


export default function QuizUpload() { 
  const [uploadfile] = useMutation(UPLOAD_FILE)
  const [createBoard] = useMutation(CREATE_BOARD)
  const fileRef = useRef<HTMLInputElement>()

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [imageUrl,setImgUrl] = useState("")
  
  function onChangeWriter(e) {
    setWriter(e.target.value)
  }
  function onChangePassword(e) { 
    setPassword(e.target.value)
  }
  function onChangeTitle(e) { 
    setTitle(e.target.value)
  }
  function onChangeContents(e) { 
    setContents(e.target.value)
  }
  function onClickDIv() {
    fileRef.current?.click
  }

  async function onChangeFile(e) { 
    const myfile = e.target.files[0]
    
    const result = await uploadfile({
      variables: {
        file:myfile,
      }
    })
    setImgUrl(result.data.uploadFile.url)
    console.log(result.data.uploadFile);
  }
  console.log(contents)
  console.log(writer);

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images:[imageUrl]
        }
      }
    })
  }

  return (
    <>
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      작성자 : <input onChange={onChangeWriter} type="text" />
      <br />
      비밀번호 : <input onChange={onChangePassword} type="password" />
      <br />
      제목 : <input onChange={onChangeTitle} type="text" />
      <br />
      내용 : <input onChange={onChangeContents} type="text" />
      <br />
      <input ref={fileRef} style={{display:'none'}} onChange={onChangeFile} type="file" />
      <br />
      <div
        onClick={onClickDIv}
        style={{ width: "50px", height: "50px", backgroundColor: "gray", fontSize:'15px' }}
      >Upload</div>
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}