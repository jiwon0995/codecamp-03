### 짝수와 홀수

**_문제 설명_**

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

**_제한 조건_**

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

```javascript
function solution(num) {
    var answer = '';
    if(num%2===0){
        answer="Even"
    } else {
        answer="Odd"
    }
    return answer;
}
```



### 평균구하기

**_문제 설명_**

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

**_제한 사항_**

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

```javascript
function solution(arr){
	let sum = 0;
  for(let i = 0; i< arr.length; i++){
    sum += arr[i]
  }
  return sum/arr.length
}
```



### 가운데 글자 가져오기

**_문제 설명_**

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

**_제한 설명_**

- s는 길이가 1 이상, 100이하인 스트링입니다.

```javascript
function solution(s) {
  //가운데 있는 글자의 인덱스 값을 저장
  const half = Math.floor(s.length / 2);
  //삼항연잔사 return s.length % 2 === 0 ? s[half-1]+s[half] : s[half]
  if(s.length % 2 === 0){
    return s[half-1]+s[half]
  } else {
    return s[half];
  }
}
```

