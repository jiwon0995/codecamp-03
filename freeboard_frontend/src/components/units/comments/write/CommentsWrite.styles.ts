import styled from '@emotion/styled'


export const Wrapper = styled.div`
	width: 1200px;
	padding-left: 102px;
	padding-right: 102px;
  margin: 100px;
  /* background-color: aqua; */
`
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const Text = styled.span`
  font-size: 18px;
  margin-left: 10px;
  background-color: beige;
`
export const Input = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 25px;
  border: solid 1px #BDBDBD;
  padding: 4px 0px 0px 10px;
`
export const Star = styled.div`
  
`

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentsBox = styled.div`
  width: 100%;
  height: 161px;
  margin-top: 20px;
  border: solid 1px #BDBDBD;
  
`

export const Comments = styled.input`
  width: 100%;
  height: 108px;
  border: none;
  padding: 0px 0px 0px 20px;
  resize: none;
`

export const CommentsBottom = styled.div`
  width: 100%;
  height: 52px;
  border-top: solid 1px #BDBDBD ;
  display: flex;
  justify-content: flex-end;
  
`
export const CommentsButton = styled.button`
  width: 91px;
  height: 52px;
  border: none;
  background-color: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
`