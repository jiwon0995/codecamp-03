import Uploads02UI from "./Upload02.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { UPLOAD_FILE } from "./Upload02.queries";

// modal
import Modal from "@mui/material/Modal";
import * as React from "react";
import Box from "@mui/material/Box";

//modal style
const style = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Uploads02(props:any) {
  const fileRef = useRef<HTMLInputElement>();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0];
    if (!file?.size) {
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      return;
    }
    try {
      const result = await uploadFile({
        variables: { file },
      });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {}
  };

  const onClickUploadk = () => {
    fileRef.current?.click()
  }

  return (
    <Uploads02UI
      fileRef={fileRef}
      onChangeFile={onChangeFile}
      onClickUploadk={onClickUploadk}
      fileUrl={props.fileUrl}
    />
  );
}
