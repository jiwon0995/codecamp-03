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

export default function BoardsNewPage() {
  
  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  
  const [writerError, setWriterError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentError, setContentError] = useState("")

  function onChangeWriter(event) {
    setWriter(event.target.value)

  }
  function onChangePassword(event) {
    setPassword(event.target.value)

  }
  function onChangeTitle(event) {
    setTitle(event.target.value)

  }

  function onChangeContent(event) {
    setContent(event.target.value)

  }

  function onClickSignup() {
    
    if (writer === "") {
      setWriterError("작성자를 입력해 주십시오.")
      
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해 주십시오.")
    }
    if (title === "") { 
      setTitleError("제목을 입력해 주십시오.")
    }
    if (content === "") {
      setContentError("내용을 입력해 주십시오.")
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
