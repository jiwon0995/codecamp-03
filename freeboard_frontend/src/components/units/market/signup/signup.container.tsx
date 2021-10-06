import { PropertySafetyFilled } from '@ant-design/icons';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import SignupUI from './signup.presenter'

export default function SignUp(props:any) { 
  const router = useRouter()

  function onClickMoveSignup() { 
    router.push('/market/login')
  }
  function onClickMoveLogin() { 
    router.push('/market/signup')
  }

  return (
		<SignupUI
			isEdit={props.isEdit}
			onClickMoveSignup={onClickMoveSignup}
			onClickMoveLogin={onClickMoveLogin}
		/>
	);
}