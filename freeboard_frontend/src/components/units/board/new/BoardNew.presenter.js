import { from } from "@apollo/client"
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
  ErrorText } from '../../board/new/BordNew.styles'
export default function BoardNewUI(props) { 

  return (
    <>
      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer onChange={props.onChangeWriter} name="writer" type="text" placeholder="이름을 적어주세요." />
            <ErrorText>{props.writerError}</ErrorText>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              onChange={props.onChangePassword}
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
            <ErrorText>{props.passwordError}</ErrorText>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject onChange={props.onChangeTitle} name="title" type="text" placeholder="제목을 작성해주세요." />
          <ErrorText>{props.titleError}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents onChange={props.onChangeContent} name="contents" placeholder="내용을 작성해주세요." />
          <ErrorText>{props.contentError}</ErrorText>
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
          <SubmitButton onClick={props.onClickSignup} buttonColorChange={props.buttonColorChange}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
      
    </>
  )
}