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
	OptionWrapper,
	RadioButton,
	RadioLabel,
	ButtonWrapper,
	Error,
	SubmitButton,
	WrapperWrapper,
} from './BordWrite.styles';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'antd/lib/modal/Modal';
import Uploads01 from '../../../commons/uploads/01/Upload01.container';

export default function BoardWriteUI(props:any) {
	return (
		<WrapperWrapper>
			{/* 주소검색 모달 */}
			{props.isOpen && (
				<Modal visible={true}>
					{/* 다음에서 만든 기능 */}
					<DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
				</Modal>
			)}

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
						<Zipcode
							name="zipcode"
							placeholder="07250"
							readOnly
							value={
								props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
							}
						/>
						<SearchButton onClick={props.onClickAddressSearch}>
							우편번호 검색
						</SearchButton>
					</ZipcodeWrapper>
					<Address
						// readOnly{true} 사용자가 수정 못함
						readOnly
						// 주소검색해서 받은 데이터를 넣어준다.
						// 작성하게 없으면 기존에 작성한 주소를 보여준다.
						// 앞에 데이터가 있으면 앞에꺼, 없으면 뒤에꺼 둘다 없으면 빈칸
						value={
							props.address || props.data?.fetchBoard.boardAddress?.address
						}
					></Address>
					<Address
						onChange={props.onChangeAddressDetail}
						defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
					></Address>
				</InputWrapper>
				<InputWrapper>
					<Label>유튜브</Label>
					<Youtube
						placeholder="링크를 복사해주세요."
						onChange={props.onChangeYoutubeUrl}
						defaultValue={props.data?.fetchBoard.youtubeUrl}
					/>
				</InputWrapper>
				<ImageWrapper>
					<Label>사진첨부</Label>
					{props.fileUrls.map((el, index) => (
						<Uploads01
							key={`${el}_${index}`}
							index={index}
							fileUrl={el}
							onChangeFileUrls={props.onChangeFileUrls}
						/>
					))}
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
