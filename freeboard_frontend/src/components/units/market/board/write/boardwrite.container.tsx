import BoardWritePageUI from "./boardwrite.presenter";
import { IMyupdateUseditem } from './boardwrite.types'
import {
  CREATEE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./boardwrite.queries";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./boardwrite.validation";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../../commons/types/generated/types";


export default function BoardWritePage(props: any) {
  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATEE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE)

  //imgurl state
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  
  const [address, setAddress] = useState("")
  const [addressDetail, setAddressDetail] = useState("")
  //useForm 
  const { handleSubmit, register, formState, setValue, trigger, watch } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  //editer 설정
  const onChangeMyEditer = (value:any) => {
    console.log(value);
    //register로 등록하지 않고, 강제로 값을 넣어주는 기능
    //<p><br></p>일 때 빈값(false)을 value에 넣어주기
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //onChange가 됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  };
  const onChangeLat = (value:any) => {
    setValue("LAT", value || "")
    trigger("LAT")
  }

  const onChangeLng = (value:any) => {
    setValue("LNG", value || "")
    trigger("LNG")
  }
  const onChangeAddress = (value) => { 
    setValue("Address", value || "")
    trigger("Address")
  }
// 중고마켓 상품등록
  const onClickUsedItem = async (data: any) => {
    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const myImages = results.map((el) => el?.data.uploadFile.url || "")
    
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            contents: data.contents,
            price: Number(data.price),
            remarks: data.remarks,
            images: myImages,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: Number(data.LAT),
              lng: Number(data.LNG)
            }
          },
        },
      });
      console.log("createUseditem",data)
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  //
  function onChangeFiles(file: File, index: number) {
    //1. 기존 fileUrls를 가져온다
    const newFiles = [...files];
    //이미지를 넣으면 이미지가 바뀜
    newFiles[index] = file;
    setFiles(newFiles);
  }

  useEffect(() => {
    if (!props?.isEdit && props.data?.fetchUseditem) {
      setValue("contents", props?.data?.fetchUseditem?.contents);
      setValue("name", props?.data?.fetchUseditem?.name);
      setValue("price", props?.data?.fetchUseditem?.price);
      setValue("remarks", props?.data?.fetchUseditem?.remarks);
    }
  }, [!props?.isEdit, props?.data?.fetchUseditem]);
  
  const onClickUpdate = async (data: any) => {
    
    const myupdateUseditem: IMyupdateUseditem = {};
    if (data.name) myupdateUseditem.name = data.name
    if (data.contents) myupdateUseditem.contents = data.contents
    if (data.price) myupdateUseditem.price = Number(data.price)
    if (data.remarks) myupdateUseditem.remarks = data.remarks
    if (data.images) myupdateUseditem.images = data.images
    
    const uploadFiles = files
      .map((el) => (el ? uploadFile({ variables: { file: el } }) : null))
    const results = await Promise.all(uploadFiles)
    const nextImages = results.map((el) => el?.data.uploadFile.url || "")
    myupdateUseditem.images = nextImages

    if (props.data?.fetchUseditem.images?.length) {
      const prevImages = [...props.data?.fetchUseditem.images];
      myupdateUseditem.images = prevImages.map((el, index) => nextImages[index] || el)
    } else {
      myupdateUseditem.images = nextImages
    }
    
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.boardId,
          updateUseditemInput: myupdateUseditem,
        },
      });
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }; 


  return (
    <BoardWritePageUI
      isEdit={props.isEdit}
      onClickUsedItem={onClickUsedItem}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onChangeMyEditer={onChangeMyEditer}
      onChangeFiles={onChangeFiles}
      onClickUpdate={onClickUpdate}
      data={props.data}
      contents={watch("contents") || ""}
      setValue={setValue}
      onChangeLat={onChangeLat}
      onChangeLng={onChangeLng}
      LAT={watch("LAT")}
      LNG={watch("LNG")}
      setAddress={setAddress}
      setAddressDetail={setAddressDetail}
    />
  );
}
