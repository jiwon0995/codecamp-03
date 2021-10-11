import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { GlobalContext } from "../_app";
import { useContext } from "react";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn{
      email
      name
      picture
    }
  }
`

export default function UseAploolClientPage() {
  const { setAccessToken,setUserInfo, userInfo } = useContext(GlobalContext)
  const { handleSubmit, register } = useForm();
  const [loginuser] = useMutation(LOGIN_USER);
  const client = useApolloClient()
  
  
  async function onClickLogin(data) {
    //로그인 처리하기!
    const result = await loginuser({
      variables: {
        email: data.myEmail,
        password: data.myPassword,
      },
    });
    //const result = await axios.get
    const accessToken = result.data.loginUser.accessToken;

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization:`Bearer ${accessToken}`
        }
      }
    })
    const userInfo = resultUserInfo.data.fetchUserLoggedIn

    setAccessToken(accessToken)
    setUserInfo(userInfo)
  }

  return (
    <>
      {userInfo.email ? `${userInfo.name}님 환영합니다` :
        (<form onSubmit={handleSubmit(onClickLogin)}>
          이메일 : <input type="text" {...register("myEmail")} />
        비밀번호 : <input type="text" {...register("myPassword")} />
          <button type="submit"> 로그인하기</button>
          {/* <button type="button" onClick={myOnClickFunction}>버튼</button> */}
        </form>)}
    </>
  );
}
