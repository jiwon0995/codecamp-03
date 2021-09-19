import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  
`;
export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  cursor: pointer;
  :hover {
    background-color: #cccccc;
    color : white;
  }
`;
export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;
export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #cccccc;
    color : white;
  }
`;
export const TopInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const TopSearch = styled.input`
  width: 776px;
  height: 52px;
  border-radius: 20px;
  background-color: #F2F2F2;
  border:none;
  padding-left: 30px;
`
export const SearchDate = styled.input`
  width: 224px;
  height: 52px;
  border: solid 1px #BDBDBD;
  margin-left: 42px;
  text-align: center;
`

export const SearchButton2 = styled.button`
  width: 94px;
  height: 52px;
  border-radius: 10px;
  background-color: black;
  color: white;
  margin-left: 42px;
`

export const Pagenation = styled.span`
  font-size: 20px;
  color : gray;
  margin: 20px;
  cursor: pointer;
`
export const PageWrapper = styled.div`

`
export const PageWrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`