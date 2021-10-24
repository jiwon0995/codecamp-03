import LayoutHeader from "./header/LayoutHeader.comtainer";
import LayoutBanner from "../layout/banner/LayoutBanner.contaiainer";
import LayoutHeaderContainer from "./header/LayoutHeader.comtainer";
import { useRouter } from "next/dist/client/router";

const hidden = [
  "/boards",
  "/boards/new",
  "/signup",
  "/login",
  "/market/new",
  "/market/list"
];
const hidden2 = ["/signup", "/login" ];
export default function Layout(props: any) {
  const router = useRouter();
  const isHidden = hidden.includes(router.pathname);
  const isHidden2 = hidden2.includes(router.pathname);
  return (
    <>
      {!isHidden2 && <LayoutHeaderContainer />} 
      {!isHidden && <LayoutBanner />} 
      <div>{props.children}</div>
    </>
  );
}
