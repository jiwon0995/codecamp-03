import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGEDIN } from "./LayoutHeader.queries";
import { isEmpty } from 'lodash'
import { IQuery } from "../../../../commons/types/generated/types";
export default function LayoutHeaderContainer() {
  const router = useRouter();
  const { accessToken, setAccessToken, setUserInfo, userInfo } :any=
    useContext(GlobalContext);

  const { data } = useQuery<Pick<IQuery,"fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  console.log("d", data);

  useEffect(() => {
    if(!isEmpty(userInfo)) return;
    setUserInfo(data);
  }, [data]);

  const onClickMove = (e:any) => router.push(e.target.id);

  const onClickLogin = () => {
    router.push("/login");
  };
  const onClickLogout = () => {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
  };
  console.log("i", userInfo);
  return (
    <LayoutHeaderUI
      onClickMove={onClickMove}
      accessToken={accessToken}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
