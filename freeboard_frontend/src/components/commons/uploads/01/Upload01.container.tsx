import { ChangeEvent,useRef } from 'react';
import Uploads01UI from './Upload01.presenter'
import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import {UPLOAD_FILE} from './Upload01.queries'

export default function Uploads01(props:any) { 
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadFile] = useMutation(UPLOAD_FILE);
  
  function onClickUpload() { 
    fileRef.current?.click()
  }
  
  async function onChangeFile(event:ChangeEvent<HTMLInputElement>) {
    const file = event?.target.files?.[0];
		if (!file?.size) {
			Modal.error({ content: '파일이 없습니다.' });
			return;
		}
		if (file.size > 5 * 1024 * 1024) {
			Modal.error({ content: '파일 용량 초과 (제한 : 5MB)' });
			return;
		}
		if (!file.type.includes('png') && !file.type.includes('jpeg')) {
			Modal.error({
				content: '파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)',
			});
			return;
		}
		try {
      const result = await uploadFile({ variables: { file } });
			props.onChangeFileUrls(result.data.uploadFile.url, props.index);
		} catch (error) {
			Modal.error({ content: error.message });
		}
	}

  return (
		<Uploads01UI
			onChangeFile={onChangeFile}
			onClickUpload={onClickUpload}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
		/>
	);
}