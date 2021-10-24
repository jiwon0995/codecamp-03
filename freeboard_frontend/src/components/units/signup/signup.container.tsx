import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/router";
import { yupResolver } from "@hookform/resolvers/yup";
import SignupUI from "./signup.presenter";
import { schema } from "./singup.validation";
import { Iprops } from "./signup.types";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { CREATE_USER, LOGIN_USER } from "./signup.queries";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";

export default function SignUp(props: Iprops) {
  //@ts-ignore
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  //modal
  const [IsOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
  };

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const MoveLoginPage = () => {
    router.push("/login");
    setIsOpen(false);
  };
  const MoveSignUpPage = () => router.push("/signup");

  //회원가입 함수
  const onClickSignUp = async (data: string | any) => {
    if (data.password !== data.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: String(data.name),
            email: data.email,
            password: data.password,
          },
        },
      });
      setIsOpen(true);
    } catch (error) {
      alert(error.message);
    }
  };
  //로그인 함수
  const onClickLogin = () => {
    try {
      const result = loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      //@ts-ignore
      // localStorage.setItem("refreshToken", result.data?.loginUser.accessToken);
      // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);
      localStorage.setItem("refreshToken", "true");
      router.push("/market/list");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignupUI
      isEdit={props.isEdit}
      onClickSignUp={onClickSignUp}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      IsOpen={IsOpen}
      MoveLoginPage={MoveLoginPage}
      MoveSignUpPage={MoveSignUpPage}
      onClickLogin={onClickLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}
