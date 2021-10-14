import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css'; // reactQuill CSS

// import ReactQuill from 'react-quill' 프론트엔트 서버에서 그릴 때, document가 없어서 분제가 됨
// 넥스트js = 서버사이드랜더링
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr:false })

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput){
      _id
    }
  }
`;

export default function WebEditerPage() {
  //setValue : 강제로 값을 넣어준다
  //trigger : 
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode:"onChange",
  })
  const [createBoard] = useMutation(CREATE_BOARD)
  const router = useRouter()
  
  const onClickMyButton = async (data) => {
    try { 
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/28-02-web-editor-detail/${result.data.createBoard._id}`)
      // result.data.createBoard._id
    } catch (error) {console.log(error) }
  } 


  const onChangeMyEditer = (value) => {
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    //<p><br></p>일 때 빈값(false)을 value에 넣어주기 
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //onChange가 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }
  
  
  return (
    <form onSubmit={handleSubmit(onClickMyButton)}>
      writer: <input type="text" {...register("writer")}/><br/>
      password: <input type="password" {...register("password")}/><br/>
      title: <input type="text" {...register("title")}/><br/>
      contents: <ReactQuill onChange={onChangeMyEditer}  />
      {/* <button type="button" onClick={onClickMyButton}>MyButton</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}