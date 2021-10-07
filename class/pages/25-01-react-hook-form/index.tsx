import {useForm} from 'react-hook-form'

export default function ReactHookFormPage() { 
  const { handleSubmit, register } = useForm()
  
  const onClickLogin = (data) => { 
    console.log(data);
  }
  
  
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div> 리액트 훅 폼 연습</div>
      name : <input type="text" {...register("myName")} />
      <br />
      e-mail : <input type="text" {...register("myEmail")} />
      <br />
      password : <input type="password" {...register("myPassword")} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </form>
  );
}