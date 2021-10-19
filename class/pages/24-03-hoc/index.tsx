import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";
import { useRouter} from 'next/router'
export default function HocPage() {
  const router = useRouter()
  // accessToken이 있는가?
  // accessToken이 없다면, login 페이지로 보내기
  const { accessToken } = useContext(GlobalContext)
  
  if (!accessToken) {
    router.push('/23-01-login')
  }
  
  return <div>HOC 연습 페이지 입니다!!</div>;
}
