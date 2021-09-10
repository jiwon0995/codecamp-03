### 서울에서 김서방 찾기

**_문제 설명_**

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

**_제한 사항_**

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

```javascript
function solution(seoul){
  // kim의 인덱스 값을 담아주는 변수
  let x = 0;
 
  //한줄로 해결하는 방법
  let x = seoul.indexof(kim); //한줄로 해결하는 방법
  
  //for문으로 해결하는 방법
  /*for( let i = 0; i < seoul.length; i++){
    if( seoul[i] === 'kim'){
      x=i;
      //반복문을 종료
      break;
    }
  }*/
  return '김서방은' + x + '에 있다'
}
```



### 문자열 다루기 기본

**_문제 설명_**

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.



**_제한 사항_**

- `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

```javascript
function solution(s){
  let answer = true
  if(s.length !== 4 && s.length !==6){
    return false
  }
  for(let i = 0; i<s.length; i++){
    //isNaN:해당 데이터가 NaN인지 아닌지 
    if(isNaN(s[i]) === true){
      answer = false
      break
    } 
  }
  return answer
}
```

```javascript
//filter 사용해서 해결하는 방법

function solution(s){
  let answer = true
//split : 문자열을 배열로 만들어 준다.
	const answer = s.split("").filter(str => isNaN(str)===true).length === 0 
  return answer
  }
```

 

### 약수의 합

**_문제 설명_**

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

**_제한 사항_**

- `n`은 0 이상 3000이하인 정수입니다.

```javascript
function solution(n) {
    let answer = 0
    for(let i=1; i<=n; i++ ){
        if( n % i === 0){
            answer = answer+ i
        }
    }
    return answer;
}
```

```javascript
function solution(n){
  let answer = 0;
                //n의 길이만큼 배열을 만들어준다.
  const array =      //fill:배열채워주기 forEach:for문 
        new Array(n).fill(1).forEach((num, index) => {
          n % (num+index) === 0 ? answer = answer + (num + index) : null
        })
  
  return answer
}
```

