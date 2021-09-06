import {
  Address,
  ButtonWrapper,
  CancelButton,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  ErrorText
} from "../../../styles/indexcss";
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from "next/router";

//gql mutiation
const CREAT_BOARD = gql`
  mutation ($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput)
    {
      _id
      writer
      title
    }     
}
`

export default function BoardsNewPage() {
  const router = useRouter()
  const [createBoard] = useMutation(CREAT_BOARD) //Mutation 사용하겠다!
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
  //onchange함수. 각 함수별로 이벤트가 발생하면 그 값을 각 state에 담는다. 
  //조건문 내용: 값이 들어오면 에러메세지에 빈문자열을 넣어준다
  function onChangeWriter(event) {
    setWriter(event.target.value)
    if (event.target.value !== "") { 
      setWriterError("")
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value)
    if (event.target.value !== "") { 
      setPasswordError("")
    }
  }
  function onChangeTitle(event) {
    setTitle(event.target.value)
    if (event.target.value !== "") { 
      setTitleError("")
    }
  }

  function onChangeContent(event) {
    setContent(event.target.value)
    if (event.target.value !== "") { 
      setContentError("")
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
    if (writer!=="" && password!=="" && title!== "" && contents!== "") { 
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
      router.push(`detail/${ result.data.createBoard._id}`)
    }
  }
  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer onChange={onChangeWriter} name="writer" type="text" placeholder="이름을 적어주세요." />
          <ErrorText>{writerError}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            onChange={onChangePassword}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <ErrorText>{passwordError}</ErrorText>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject onChange={onChangeTitle} name="title" type="text" placeholder="제목을 작성해주세요." />
        <ErrorText>{titleError}</ErrorText>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents onChange={onChangeContent} name="contents" placeholder="내용을 작성해주세요." />
        <ErrorText>{contentError}</ErrorText>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube name="youtube" placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>
          {/* <input
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
            /> */}
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <CancelButton>취소하기</CancelButton>
        <SubmitButton onClick={onClickSignup}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
