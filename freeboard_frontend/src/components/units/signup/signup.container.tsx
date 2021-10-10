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
import { GlobalContext } from '../../../../pages/_app'

export default function SignUp(props: Iprops) {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [IsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  
  const onChangeEmail = (e) => { 
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => { 
    setpassword(e.target.value)
  }

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

  const go = () => {
    router.push("/login");
    setIsOpen(false);
  };

  const onClickSignUp = async (data: any) => {
    if (data.password !== data.password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        },
      });
      setIsOpen(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    console.log(result.data?.loginUser.accessToken)
    setAccessToken(result.data?.loginUser.accessToken);
  };

  return (
    <SignupUI
      isEdit={props.isEdit}
      onClickSignUp={onClickSignUp}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      IsOpen={IsOpen}
      go={go}
      onClickLogin={onClickLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}
