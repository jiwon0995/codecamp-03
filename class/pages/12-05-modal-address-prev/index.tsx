import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from 'antd'

export default function modalAddressPrevPage(){
  const [myAipcode, setMyZipcode] = useState("")
  const [myAddress, setMyAddress] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  
  const handleComplete = (data) => {
    setMyZipcode(data.address)
    setMyAddress(data.zonecode)
    console.log(data.zonecode)
    console.log(data.address)
    setIsOpen((prev)=>!prev)
  };
  
  function onTogleZipcode() { 
    setIsOpen((prev) =>!(prev))
  }
  return (
    <>
      <button onClick={onTogleZipcode}>우편번호 검색</button>
      {isOpen && (
        <Modal visible={true} onCancel={onTogleZipcode}>
          <DaumPostcode onComplete={handleComplete} />;
        </Modal>
      )}
    </>
  );
};
