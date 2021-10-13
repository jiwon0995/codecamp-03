import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { ICreateUseditemInput, IMutation, IUseditem } from '../../../../../commons/types/generated/types';
import { Contents } from '../../../board/write/BordWrite.styles';
import { schema } from './boardwrite.validation'
import BoardWritePageUI from './boardwrite.presenter'
import { USEDITEM } from './boardwrite.queries'


export default function BoardWritePage() { 
  const router = useRouter()
  const [createUseditem] = useMutation(USEDITEM);
  
  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onChangeMyEditer = (value) => {
    console.log(value)
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    //<p><br></p>일 때 빈값(false)을 value에 넣어주기
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //onChange가 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  };
  
  const onClickUsedItem = async(data:any) => { 
    try {
      const result = await createUseditem({
        variables: { 
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: Number(data.price),
            remarks: data.remarks
          }
        },
      });
      router.push(`/market/${result.data.createUseditem._id}`)
    } catch(error){console.log(error.message)}
    
  }
  return (
    <BoardWritePageUI
      onClickUsedItem={onClickUsedItem}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeMyEditer={onChangeMyEditer}
    />
  );
}