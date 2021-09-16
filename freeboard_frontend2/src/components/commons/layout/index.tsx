import LayoutHeader from "./header/LayoutHeader.comtainer";

import LayoutHeaderContainer from './header/LayoutHeader.comtainer';

export default function Layout(props) { 
  return (
		<>
			<LayoutHeaderContainer />
			<div>{props.children}</div>
		</>
	);
  

}