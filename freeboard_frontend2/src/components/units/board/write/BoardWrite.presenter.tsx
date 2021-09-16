import {
	Wrapper,
	Title,
	WriterWrapper,
	InputWrapper,
	Label,
	Writer,
	Password,
	Subject,
	Contents,
	ZipcodeWrapper,
	Zipcode,
	SearchButton,
	Address,
	Youtube,
	ImageWrapper,
	UploadButton,
	OptionWrapper,
	RadioButton,
	RadioLabel,
	ButtonWrapper,
	Error,
	SubmitButton,
	WrapperWrapper,
} from './BordWrite.styles';

export default function BoardWriteUI(props) {
	return (
		<WrapperWrapper>
			<Wrapper>
				<Title>{props.isEdit ? '게시물 수정' : '게시물 등록'}</Title>
				<WriterWrapper>
					<InputWrapper>
						<Label>작성자</Label>
						<Writer
							onChange={props.onChangeWriter}
							type="text"
							placeholder="이름을 적어주세요"
							readOnly={Boolean(props.data?.fetchBoard.writer)}
							defaultValue={props.data?.fetchBoard.writer}
						/>
						<Error>{props.writerError}</Error>
					</InputWrapper>
					<InputWrapper>
						<Label>비밀번호</Label>
						<Password
							onChange={props.onChangePassword}
							type="password"
							placeholder="이름을 적어주세요"
						/>
						<Error>{props.passwordError}</Error>
					</InputWrapper>
				</WriterWrapper>
				<InputWrapper>
					<Label>제목</Label>
					<Subject
						onChange={props.onChangeTitle}
						type="text"
						placeholder="제목을 입력해주세요."
						defaultValue={props.data?.fetchBoard.title}
					/>
					<Error>{props.titleError}</Error>
				</InputWrapper>
				<InputWrapper>
					<Label>내용</Label>
					<Contents
						onChange={props.onChangeContents}
						placeholder="내용을 입력해주세요."
						defaultValue={props.data?.fetchBoard.contents}
					/>
					<Error>{props.contentsError}</Error>
				</InputWrapper>
				<InputWrapper>
					<Label>주소</Label>
					<ZipcodeWrapper>
						<Zipcode placeholder="07250" />
						<SearchButton>우편번호 검색</SearchButton>
					</ZipcodeWrapper>
					<Address></Address>
					<Address></Address>
				</InputWrapper>
				<InputWrapper>
					<Label>유튜브</Label>
					<Youtube
						placeholder="링크를 복사해주세요."
						onChange={props.onChangeYoutubeUrl}
						defaultValue={props.data?.fetchboard.youtubeUrl}
					/>
				</InputWrapper>
				<ImageWrapper>
					<Label>사진첨부</Label>
					<UploadButton>
						<div>*</div>
						<div>Upload</div>
					</UploadButton>
					<UploadButton>
						<div>*</div>
						<div>Upload</div>
					</UploadButton>
					<UploadButton>
						<div>*</div>
						<div>Upload</div>
					</UploadButton>
				</ImageWrapper>
				<OptionWrapper>
					<Label>메인설정</Label>
					<RadioButton type="radio" />
					<RadioLabel>유튜브</RadioLabel>
					<RadioButton type="radio" />
					<RadioLabel>사진</RadioLabel>
				</OptionWrapper>
				<ButtonWrapper>
					{!props.isEdit && (
						<SubmitButton
							onClick={props.onClickSubmit}
							isActive={props.isActive}
							disabled={!props.isActive}
						>
							등록하기
						</SubmitButton>
					)}
					{props.isEdit && (
						<SubmitButton onClick={props.onClickUpdate} isActive={true}>
							수정하기
						</SubmitButton>
					)}
				</ButtonWrapper>
			</Wrapper>
		</WrapperWrapper>
	);
}
