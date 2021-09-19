import LayoutHeader from "./header/LayoutHeader.comtainer";
import LayoutBanner from '../layout/banner/LayoutBanner.contaiainer'
import LayoutHeaderContainer from './header/LayoutHeader.comtainer';

export default function Layout(props) { 
  return (
		<>
			<LayoutHeaderContainer />
			<LayoutBanner />
			<div>{props.children}</div>
		</>
	);
  

}