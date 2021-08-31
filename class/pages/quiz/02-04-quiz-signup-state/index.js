import { useState } from 'react'

import { ErrorText } from './indexcss'

export default function signupState() { 
  
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  function onchangeEmail(event) { 
    setEmail(event.target.value)
  }
  function onchangePassword1(event) { 
    setPassword1(event.target.value)
  }
  function onchangePassword2(event) { 
    setPassword2(event.target.value)
  }
  
  function Signup() { 
    
    if (!email.includes("@")) { 
      setEmailError("이메일 형식이 올바르지 않습니다.")
    }

    if (password1 !== password2) { 
      setPasswordError("비밀번호가 일치하지 않습니다.")
    }

  }
  return (
    <>
      이메일 : <input type="text" onChange={onchangeEmail}></input><br />
      <ErrorText>{emailError}</ErrorText>
      비밀번호 : <input type="password" onChange={onchangePassword1}></input><br />
      비밀번호 확인 : <input type="password" onChange={onchangePassword2}></input><br />
      <ErrorText>{passwordError}</ErrorText>
      <button onClick={Signup}>가입하기</button>
    </>
  )
}