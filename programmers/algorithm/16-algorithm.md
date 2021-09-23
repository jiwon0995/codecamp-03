### 하샤드 수

**_문제 설명_**

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

**_내가 작성한 코드_**

``` javascript
function solution(x) {
    var answer = true;
    let sum = 0;
    let m = String(x)
    for(let i = 0; i<m.length; i++){
        sum = sum + parseInt(m[i])
    }
    if(x % sum === 0){
        return answer
    } else {
        return false
    }
    
    return answer;
}
```

**_멘토님 코드_**

``` javascript
function solution(x) {
  // for문 사용하기
  var answer = true
  // 숫자를 문자열 형태로 변환 (변수에 담긴 값만 문자열로 변환 가능)
  x = x.toString();
  for(let i = 0; i<x.length; i++){
    sum += Number(x[i])
  }
  return x % sum === 0 ? true : false
}
```

``` javascript
function solution(x) {
  // 매서드 사용하기
  let sum = 0;
  x = x.toString().split("").forEach( num => { sum += Number(num)})
  return x % sum == 0 ? true : false
}
```

``` javascript
function solution(x) {
  let sum = x.toString().split("").reduce((el,cu)=>{return Number(el)+Number(cu)})
  return x % sum == 0 ? true : false
}
```

