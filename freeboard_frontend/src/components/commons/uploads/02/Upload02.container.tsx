import { UploadImage, UploadButton, UploadFileHidden } from "./Upload02.styles";
import { checkValidationImage } from '../../../../commons/libraries/validationImage'
import { ChangeEvent, useRef, useState} from "react";

export default function Uploads02(props:any) {
  const fileRef = useRef<HTMLInputElement>();
  const [fileUrl, setFileUrl] = useState("")
  
  const onClickUpload = () => {
    fileRef.current?.click()
  }

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(e?.target.files?.[0]);
    if(!file) return
    
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => { 
      setFileUrl(data.target?.result as string)
      props.onChangeFiles(file, props.index)
    }
  };

  return (
    <>
      {/* 이미지가 있으면 보여주고 아니면 빈 문자열 */}
      {fileUrl || props.defaultFileUrl ? (
        <UploadImage
          onClick={onClickUpload}
          src={
            fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <UploadButton onClick={onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
      />
    </>
  );
}
