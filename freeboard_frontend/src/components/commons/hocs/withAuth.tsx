import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken, setAccessToken } = useContext(GlobalContext);

  useEffect(() => {
    
    // const accessToken = localStorage.getItem("refreshToken");
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요합니다");
      router.push("/login");
    }
  }, []);
  return <Component {...props} />;
};
