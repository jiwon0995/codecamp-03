import { UploadButton, UploadImage, UploadFileHidden } from './Upload01.styles';

export default function Uploads01UI(props:any) { 
  
  return (
		<>
			{props.fileUrl ? (
				<UploadImage
					onClick={props.onClickUpload}
					src={`https://storage.googleapis.com/${props.fileUrl}`}
				/>
			) : (
				<UploadButton onClick={props.onClickUpload}>
					<>+</>
					<>Upload</>
				</UploadButton>
			)}
			<UploadFileHidden
				type="file"
				ref={props.fileRef}
				onChange={props.onChangeFile}
			/>
		</>
	);

}