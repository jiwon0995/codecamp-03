import {
  GithubOutlined,
} from "@ant-design/icons";
import styled from '@emotion/styled'

const MyIcon = styled(GithubOutlined)`
  font-size: 300px;
  color: skyblue;
  margin : 150px;
`

export default function LibraryIconbPage() { 

  return (
    <div>
      <MyIcon />
    </div>
  ); 
}