import { UploadImage,UploadButton,UploadFileHidden} from './Upload02.styles'

export default function Uploads02UI(props: any) { 

  return (
    <>
      {/* 이미지가 있으면 보여주고 아니면 빈 문자열 */}
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUploadk}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUploadk}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      />
    </>
  );
} 