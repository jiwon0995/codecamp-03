import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export default function ComponentLifePage() { 
  const router = useRouter()
  const [isChange, setIsCange] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  
  
  useEffect(() => { 
    alert("Rendered!")
    inputRef.current.focus();

    return () => { 
      alert("Bye!!!!!")
    }
  },[])

  useEffect(() => { 
    alert("Changed!!")
    console.log("changed!!")
  }, [isChange])
  
  function onClickIsChange() { 
    setIsCange(true)
  }
  function onClickMove() { 
    router.push('/')
  }

  return (
    <>
      <button onClick={onClickIsChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="password" ref={inputRef} />
    </>
  );
}