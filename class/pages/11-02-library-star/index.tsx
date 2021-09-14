import { useState } from "react";

import { Rate } from 'antd'
// state가 바뀌면 새로 바뀌니까 안바뀌는 부분은 함수 위로 뺀다. 하드코딩 된 부분이라 다시 만들 필요가 없어서 위로 뻄 

const desc = ["terrible", "bad", "normal", "good", "wonderful"]; 



export default function LibraryStarPge() { 
  const [value, setValue] = useState(3)
  const aaa = 3
                        //함수 안에서 사용하려고 쓰는 놈 
  const handleChange = (value) => {
    console.log(aaa); // 가장 가까운 {}를 찾아서 있으면 aaa를 찍고 없으면 한단계 위에 있는 {}를 찾아 떠난다.
    setValue(value)
  };

  
    return (
      <span>
        <Rate
          // tooltips={desc}             
          onChange={handleChange} value={value} />
        {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
      </span>
    )
}