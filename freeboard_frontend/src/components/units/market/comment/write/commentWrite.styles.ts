import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  background-color: #008080;
  display: flex;
  justify-content: center;
`
export const CommentWrapper = styled.div`
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
  box-shadow: 0px 10px 20px #333;
  /* margin-bottom: 50px; */
  width: 800px;
`

export const CommentInput = styled.input`
  width: 795px;
  height: 60px;
  background-color: #c6c6c6;
  font-family: 'myfontko';
  font-size: 13px;
  padding: 20px 20px;
`
export const ButtonBox = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-around;
`
export const TextCount = styled.div`
  width: 697px;
  height: 40px;
  background-color:#c6c6c6;
  font-family: 'myfont';
  padding: 10px;
`
export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  font-family: 'myfont';
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  background-color: #d3f705;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  border-right: 3px solid #7f7f7f;
  border-bottom: 3px solid #7f7f7f;
`