import { useContext } from "react"
import { MyContext } from '../../../../../class/pages/22-04-context-API/index'
export default function MyBoardWriteUI() { 
  
  const { isEdit } = useContext(MyContext)
  
  
  return <div>{isEdit ? "수정" : "등록"}</div>
}