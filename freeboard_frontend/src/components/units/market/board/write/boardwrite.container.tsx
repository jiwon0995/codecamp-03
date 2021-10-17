import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { schema } from "./boardwrite.validation";
import BoardWritePageUI from "./boardwrite.presenter";
import { USEDITEM, UPDATE_USED_ITEM } from "./boardwrite.queries";
import { useState } from "react";

export default function BoardWritePage(props: any) {
  const router = useRouter();
  const [createUseditem] = useMutation(USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  //imgurl state
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onChangeMyEditer = (value) => {
    console.log(value);
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    //<p><br></p>일 때 빈값(false)을 value에 넣어주기
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //onChange가 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  const onClickUsedItem = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: Number(data.price),
            remarks: data.remarks,
            images: [...fileUrls],
          },
        },
      });

      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  //
  function onChangeFileUrls(fileUrl: string, index: number) {
    //1. 기존 fileUrls를 가져온다
    const newFileUrls = [...fileUrls];
    //이미지를 넣으면 이미지가 바뀜
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.boardId,
          updateUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: Number(data.price),
            remarks: data.remarks,
            images: [...fileUrls],
          },
        },
      });
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BoardWritePageUI
      onClickUsedItem={onClickUsedItem}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeMyEditer={onChangeMyEditer}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
