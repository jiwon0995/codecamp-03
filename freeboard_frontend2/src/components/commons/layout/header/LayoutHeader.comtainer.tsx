import { useRouter } from 'next/dist/client/router'
import LayoutHeaderUI from './LayoutHeader.presenter'

export default function LayoutHeaderContainer() { 
  const router = useRouter()


  function onClickMonvMain() { 
    router.push('/boards/main')
  }
  function onClickMoveBoards() { 
    router.push('/boards')
  }
  function onClickMoveNew() { 
    router.push('/boards/new')
  }
  return (
		<LayoutHeaderUI
			onClickMonvMain={onClickMonvMain}
			onClickMoveBoards={onClickMoveBoards}
			onClickMoveNew={onClickMoveNew}
		/>
	);
}