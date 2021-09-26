import LayoutHeader from "./header/LayoutHeader.comtainer";
import LayoutBanner from '../layout/banner/LayoutBanner.contaiainer'
import LayoutHeaderContainer from './header/LayoutHeader.comtainer';
import { useRouter } from "next/dist/client/router";


const hidden = ['/boards','/boards/new']

export default function Layout(props) { 
	const router = useRouter()
	const isHidden = hidden.includes(router.pathname)
  return (
		<>
			
			<LayoutHeaderContainer />
			{!isHidden &&
				<LayoutBanner />}
			<div>{props.children}</div>
		</>
	);
  

}