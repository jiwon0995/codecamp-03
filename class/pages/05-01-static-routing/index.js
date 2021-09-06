import { useRouter } from 'next/router';


export default function StaticRoutingPage() { 
  
  const router = useRouter()

  function onClickMove() { 
    router.push('/05-02-static-routed') //주소에 해당하는 폴더를 찾아서 index.js파일을 열어준다.
  }


  return (
    <button onClick={onClickMove}>정적 라우팅 페이지 이동!!!</button>
  )
}