import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import LayoutFooter from './footer/LayoutFooter.container'
import LayoutHeader from './header/LayoutHeader.comtainer.container'

const Wrapper = styled.div`
`
// const Header = styled.div`
//   height: 200px;
//   background-color: red;
// `
  
const Body = styled.div``
// const Footer = styled.div`
//   background-color: blue;
//   height: 300px;
// `
const SidebarWrapper = styled.div`
  display: flex;

`
const Sidebar = styled.div`
  width: 300px;
  background-color: yellow;
`
const HIDDEN_FOOTER = ['/13-01-layout-hidden']

export default function Layout(props) { 
  const router = useRouter()
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);
  return (
    <Wrapper>
      {/* <Header>여기는 헤더영역입니다.</Header> */}
      <LayoutHeader />
      <SidebarWrapper>
        <Sidebar>여기는 사이드바영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {/* 조건부랜더링 */}
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터영역입니다.</Footer> */}
    </Wrapper>
  );
}