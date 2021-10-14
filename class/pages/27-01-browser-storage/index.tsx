
export default function BrowserStoragePage() {
  
  const onClickSaveCookie = () => document.cookie = "aaa=철수"
  
  const onClickSaveLocalStorage = () => { 
    localStorage.setItem("bbb","영희") //bbb라는 key에 value 영희를 저장
  }
  const onClickSaveSessionStorage = () => {
    sessionStorage.setItem("ccc","훈이")
  }

  const onClickGetCookie = () => { 
    // console.log('mycookie', document.cookie)
    const temp = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0]
    
    console.log(temp.split("=")[1])
  }
  const onClickGetLocalStorage = () => {
    const fff = localStorage.getItem("bbb")
    console.log('로컬스토리지 :',fff)
  }
  const onClickGetSessionStorage = () => {
    const ggg = sessionStorage.getItem("ccc")
    console.log('세션스토리지 :',ggg)
  }
  
  
  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSaveSessionStorage}>
        세션스토리지에 저장하기
      </button>
      =====================================================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}