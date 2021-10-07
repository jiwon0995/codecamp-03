// import { MyButton } from './Myform.styles'
import Button01 from '../../commons/buttons/01/Button01'
import Input01 from '../../commons/inputs/01/Input01'

export default function MyformUI(props) { 

  return (
  <form onSubmit={props.handleSubmit(props.onClickLogin)}>
    <div> 리액트 훅 폼 연습</div>
    name : <Input01 type="text" register={props.register("myName")} />
    <br />
    e-mail : <input type="text" register={props.register("myEmail")} />
    <div>{props.formState.errors.myEmail?.message}</div>
    password : <input type="password" register={props.register("myPassword")} />
    <div>{props.formState.errors.myPassword?.message}</div>
    
      <Button01 name="로그인하기" type="submit" isValid={props.formState.isValid}></Button01>
      <Button01 name="가입하기" type="submit" isValid={props.formState.isValid}></Button01>
    </form>
);
}




