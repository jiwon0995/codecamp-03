import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";

export default function MyComponent() { 
  const router = useRouter()
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => { 
    console.log("컴포넌트가 마운트됐습니다~~")
    inputRef.current.focus()
    
    return () => { 
      alert("컴포넌트가 제거됩니다~")
    }
  },[])
  
  useEffect(() => { 
    console.log("컴포넌트가 변경됐씁니다~~")
  },[count])
  
  function onClickCount() { 
    setCount(prev => prev +1 )
  }
  function onClickMove() { 
    router.push("/")
  }
  
  return (
    <>
      <input type="password" ref={inputRef}/>
      <div>카운트 : {count}</div>
      <button onClick={onClickCount}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}