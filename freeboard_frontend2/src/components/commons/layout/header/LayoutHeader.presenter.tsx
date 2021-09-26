import { PropertySafetyFilled } from '@ant-design/icons'
import { Menu } from '@material-ui/core'
import { Logo, Nav, Wrapper, Font, FontWrapper, Font2 } from './LayoutHeader.styles'

export default function LayoutHeaderUI(props) { 
  
  return (
		<Wrapper>
			<Nav>
				<Logo src="/jiologo.png"></Logo>
				<FontWrapper>
					<Font onClick={props.onClickMonvMain}>HOME</Font>
					<Font2>|</Font2>
					<Font onClick={props.onClickMoveNew}>NEWS</Font>
					<Font2>|</Font2>
					<Font onClick={props.onClickMoveBoards}>BOARD</Font>
				</FontWrapper>
			</Nav>
		</Wrapper>
	);

}