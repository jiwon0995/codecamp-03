import {
	CloseSquareOutlined,
	MinusSquareOutlined,
  PropertySafetyFilled,
	SmileOutlined,
} from '@ant-design/icons';

import {
	Wrapper,
	BoxWrapper,
	Top,
	TopText,
	Body,
	Signup,
	Input,
	Label,
	InputWrapper,
	Title,
	SideImg,
	Contents,
} from './signup.styles';

export default function SignupUI(props:any) { 

  return (
		<Wrapper>
			<BoxWrapper>
				<Top>
					<SmileOutlined />
					<TopText>Welcome To Market!</TopText>
					<div>
						<MinusSquareOutlined />
						<CloseSquareOutlined />
					</div>
				</Top>
				{props.isEdit && (
					<Body>
						
						
					</Body>
				)}
				{!props.isEdit && (
					<Body>
						<SideImg></SideImg>
						<Contents>
							<Title>User Information</Title>
							<InputWrapper>
								<Label>E-mail : </Label>
								<Input type="text"></Input>
							</InputWrapper>
							<InputWrapper>
								<Label>Name : </Label>
								<Input type="text"></Input>
							</InputWrapper>
							<InputWrapper>
								<Label>Password : </Label>
								<Input type="password"></Input>
							</InputWrapper>
							<InputWrapper>
								<Label>Password : </Label>
								<Input type="password"></Input>
							</InputWrapper>
						</Contents>
					</Body>
				)}
				<div>
					<Signup onClick={props.onClickMoveLogin}>SignUp</Signup>
					<Signup onClick={props.onClickMoveSignup}>Create Account</Signup>
				</div>
			</BoxWrapper>
		</Wrapper>
	);
}