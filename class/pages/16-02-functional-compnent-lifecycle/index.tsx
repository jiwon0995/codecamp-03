import { useEffect, useState, useRef } from "react"
import { useRouter } from 'next/router'
export default function FunctionalComponentLifeCyclePage() { 
  const router = useRouter()
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>()
  
  // componentDidMount 와 동일
  useEffect(() => { 
    console.log('컴포넌트 마운트 완료');
    inputRef.current.focus();
    // componentWillUnmount와 동일
    return () => { 
      console.log('잘가요~~')
    }
  }, [])
  // [] 의존성 배열

  // componentDidUpdate와 동일
  useEffect(() => {
    console.log('컴포넌트 수정 완료')
  }, [count]);
  // 처음은 무조건 실행 다음에는 의존성 배열에 의해 재실행. count가 바뀌면 실행
  // []부분이 없으면 DidUpdate와 같은 기능
  
  //setState와 useEffect
  // useEffect(() => { 
  //   setCount(perv => perv + 1)
  // }, [])
  //좋은 방법이 아님
  
  // setState와 useEffect의 dependency-array
    // useEffect(() => {
    //   setCount((perv) => perv + 1);
    // }, [count]);
  
  function onCllickCount() { 
    setCount(prev => prev + 1)
  }
  function onClickMove() { 
    router.push('/')
  }
  return (
    <>
      현재 카운트 : {count}
      <button onClick={onCllickCount}>카운트 증가!!</button>
      <button onClick={onClickMove}>페이지 이동</button>
      <input type="text" ref={inputRef}/>
    </>
  )
}