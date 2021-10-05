import { useState } from "react"
import { gql, useMutation } from '@apollo/client'
import { useContext } from "react";
import { GlobalContext } from "../_app";
import { useRouter } from 'next/router'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() { 
  const router = useRouter()
  const { setAccessToken } = useContext(GlobalContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser] = useMutation(LOGIN_USER)
  
  function onChangeEmail(e) { 
    setEmail(e.target.value)
  }
  function onChangePassword(e) { 
    setPassword(e.target.value)
  }

  async function onClickLogin() { 
    const result = await loginUser({
      variables: {email,password}
    })
    console.log(result.data?.loginUser.accessToken);
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
    router.push("/23-02-login-success");
  }
  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail}/><br />
      비밀번호 : <input type="password" onChange={onChangePassword}/><br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  )
}