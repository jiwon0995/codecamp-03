import { useRouter } from 'next/dist/client/router'
import LayoutHeaderUI from './LayoutHeader.presenter'

export default function LayoutHeaderContainer() { 
  const router = useRouter()

  const onClickMove = e => router.push(e.target.id)

  
  return (
		<LayoutHeaderUI
			onClickMove={onClickMove}
		/>
	);
}