import { useMutation } from "@apollo/client";
import { useState } from "react"
import { useRef } from "react"
import { fileValidation } from "../../src/commons/ libraries/validation"
import { gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPreviewPAge() { 
  const fileRef = useRef<HTMLInputElement>()
  const [imageUrl, setImageUrl] = useState("")
  const [myfile, setMyFile] = useState()
  const [uploadFile] = useMutation(UPLOAD_FILE)
  
  function onClickGray() { 
    fileRef.current.click()
  }
  
  function onChangeFile(event) {
    const file = event.target.files[0];
    //검증부분 분리
    // if (!fileValidation(file)) return;

    //내 컴퓨터에서만 사용하는 임시 url
    //스토리지에 올라가는 시간이 오래 걸리니까 임시저장된 화면을 보여준다
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result)
      setImageUrl(data.target.result);
      setMyFile(file)
    };
  }
  async function onClickSubmit() { 
    const start = performance.now()
    await Promise.all([
      uploadFile({ variables: { file: myfile } }),
      uploadFile({ variables: { file: myfile } }),
      uploadFile({ variables: { file: myfile } }),
      uploadFile({ variables: { file: myfile } }),
      uploadFile({ variables: { file: myfile } }),
    ]);
    const end = performance.now()
    console.log(end - start)
    // const start = performance.now()
    // const result1 = await uploadFile({
    //   variables: {
    //     file: myfile,
    //   },
    // });
    // const result2 = await uploadFile({
    //   variables: {
    //     file: myfile,
    //   },
    // });
    // const result3 = await uploadFile({
    //   variables: {
    //     file: myfile,
    //   },
    // });
    // const result4 = await uploadFile({
    //   variables: {
    //     file: myfile,
    //   },
    // });
    // const result5 = await uploadFile({
    //   variables: {
    //     file: myfile,
    //   },
    // });
    // const end = performance.now()
    // console.log(end-start)
    // const url = result.data.uploadFile.url

  }
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드!!
      </div>
      <img src={imageUrl} />
      <input type="file" ref={fileRef} onChange={onChangeFile} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}