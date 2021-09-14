import { Calendar } from 'antd';
import styled from '@emotion/styled'

const C=styled.div`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`


export default function calender() { 
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  
  return (
    <C>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      <div></div>
    </C>
  )
}
