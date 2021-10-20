import styled from '@emotion/styled'
import { breakPoint } from '../../src/commons/styles/media';

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: blueviolet;

  @media ${breakPoint.tablet} {
    width: 500px;
    height: 500px;
    background-color: chartreuse;
  }

  @media ${breakPoint.mobile} {
    width: 100px;
    height: 100px;
    background-color: burlywood;
  }
`;


export default function ResponsiveMediaPage() { 

  return (
    <>
      <Wrapper>Box</Wrapper>
    </>
  )
}