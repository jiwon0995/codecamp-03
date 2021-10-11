import { useMutation } from '@apollo/client';
import { printSourceLocation } from 'graphql';
import { useState } from 'react';
import { IMutation, IUseditem } from '../../../../../commons/types/generated/types';
import { Contents } from '../../../board/write/BordWrite.styles';
import BoardWritePageUI from './boardwrite.presenter'
import {USEDITEM } from './boardwrite.queries'
export default function BoardWritePage() { 
  const [name, setName] = useState("")
  const onChangeName=(e:any)=> setName(e.target.value)
  console.log(name)
  const [Useditem] = useMutation<Pick<IMutation, "createUseditem">, IUseditem>(
    USEDITEM
  );
  
  const onClickUsedItem = async() => { 
    const result = await Useditem({
      // variables: {
      //   name: name,
      //   contents: Contents,
      //   price: printSourceLocation,
      // }
    })

  }
  return <BoardWritePageUI onChangeName={onChangeName} />;
}