import { useRouter } from "next/router";
import { useEffect } from "react";
// eslint-disable-next-line
export const withAuth = (Component: any) => (props:any) => {
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
