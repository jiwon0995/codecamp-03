import styled from '@emotion/styled'
import { Rate } from 'antd'


export const Wrapper4 = styled.div`
  width: 1200px;
  height: 400px;
  /* background-color: lightpink; */
  margin: 0px 100px;
`
export const pencil = styled.div`
  display: flex;
  justify-content: center;
`
export const Star = styled(Rate)``

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`

export const ContentsWrapper = styled.div`
  border: 1px solid lightgrey;
`
export const Contents = styled.input`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  background-color: white;
  /* border-bottom: 1px solid lightgrey; */
`
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid lightgray;
`
export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
  background-color: white;
`
export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: yellow;
  color: black;
  border: none;
  cursor: pointer;
`