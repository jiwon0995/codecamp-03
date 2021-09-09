export default function TypescriptPage() {

  //문자타입 타입추론
  let aaa = "안녕하세요"
  aaa = 3

  //문자타입
  let bbb: string;
  bbb = "gd"
  bbb = 123

  //숫자타입
  let ccc = 5
  ccc = "dd"
  
  //객체 타입
  interface Iprofile {
    school: string,
    age: number
  }
  let profile: Iprofile = {
    school: '다람쥐초',
    age: 12
  }

  //배열타입

  let ddd: number[] = [1, 2, 3, 4, 5, 6,]
  
  let eee: (number | string)[] = ["1", 2, 3, 4, 5, 6];
  let fff: (number[] | string[]) = [1,2,3,4,5,6]
  
  
  
  return <div>타입스크립트 페이지 입니다.</div>
}