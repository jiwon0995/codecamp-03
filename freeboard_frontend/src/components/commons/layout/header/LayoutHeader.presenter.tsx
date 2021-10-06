import { Logo, Nav, Wrapper, Font, FontWrapper, Font2 } from './LayoutHeader.styles'

export default function LayoutHeaderUI(props:any) { 
  
  return (
		<Wrapper>
			<Nav>
				<Logo src="/jiologo.png" id="/boards.main"></Logo>
				<FontWrapper>
					<Font id="/boards/main" onClick={props.onClickMove}>
						HOME
					</Font>
					<Font2>|</Font2>
					<Font id="/boards/new" onClick={props.onClickMove}>
						NEW
					</Font>
					<Font2>|</Font2>
					<Font id="/boards" onClick={props.onClickMove}>
						BOARD
					</Font>
					<Font2>|</Font2>
					<Font id="/boards/publicAPI" onClick={props.onClickMove}>
						API
					</Font>
				</FontWrapper>
			</Nav>
		</Wrapper>
	);

}