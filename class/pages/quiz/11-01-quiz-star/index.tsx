import { Rate } from "antd";
import { useState } from "react";

export default function antdStar() { 
  const [value, setValue] = useState(3);

  function handleChange(value: number) {
    setValue(value);
    alert(value + "점입니다!");
    
    }

  return (
    <>
      <Rate onChange={handleChange} value={value} />
      <div>{value}점</div>
    </>
  );
  }
