import axios from "axios"

export default function QuizRestApi() { 
  
  async function onClickRest() { 
    const result = await axios.get('https://koreanjson.com/users ')
    console.log(result)
  }

  return (
    <>
      <button onClick={onClickRest}>REST-API 요청하기!</button>
    </>
  )
}