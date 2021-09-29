import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput){
      _id
    }
  }
`

export default function ImageUploadPage() {
  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD)
  const fileRef = useRef<HTMLInputElement>()

  async function onChangeFile(event) {
    const myfile = event.target.files[0];
    console.log(myfile);

    //파일 유무 검사
    if (!myfile) {
      alert("파일이 없습니다");
      return;
    }
    //5MB 이상인지 검사
    if (myfile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다,(제한: 5MB)");
      return;
    }
    //type 검사
    if (!myfile.type.includes("jpeg") && !myfile.type.includes("png")) {
      alert("jpeg 또는 png만 업로드 가능합니다!");
      return;
    }

    console.log(myfile);
    const result = await uploadfile({
      variables: {
        file: myfile,
      },
    });
    setImageUrl(result.data.uploadFile.url);
    console.log(result.data.uploadFile.url);
  }
  const [myWriter, setMyWriter] = useState("")
  const [myPassword, setMyPassword] = useState('')
  const [myTitle, setMyTitle] = useState('')
  const [myContents,setMyContents] = useState('')
  
  function onClickDiv() { 
    fileRef.current?.click()
  }
  function onChangeMyWriter(event) { 
    setMyWriter(event.target.value)
  }
  function onChangeMyPassword(event) { 
    setMyPassword(event.target.value)
  }
  function onChangeMyTitle(event) { 
    setMyTitle(event.target.value)
  }
  function onChangeMyContents(event) { 
    setMyContents(event.target.value)
  }
  function onClickSubmit() { 
    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images:[imageUrl]
        }
      }
    })
    
  }
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <div>이미지 업로드!!</div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "gray",
          fontSize: "20px",
        }}
        onClick={onClickDiv}
      >
        IMG
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} /><br/>
      작성자: <input type="text" onChange={onChangeMyWriter} /><br/>
      비밀번호: <input type="text" onChange={onChangeMyPassword} /><br/>
      제목: <input type="text" onChange={onChangeMyTitle} /><br/>
      내용: <input type="text" onChange={onChangeMyContents} /><br/>
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
