import { Menu } from '@material-ui/core'
import { Logo, Nav, Wrapper, Font, FontWrapper } from './LayoutHeader.styles'

export default function LayoutHeaderUI() { 
  
  return (
    <Wrapper>
      <Nav>
        <Logo src="/samsunglogo.png"></Logo>
        <FontWrapper>
          <Font>제품</Font>
          <Font>기획전</Font>
          <Font>스토리</Font>
          <Font>고객 서비스</Font>
        </FontWrapper>
      </Nav>
    </Wrapper>
  )

}