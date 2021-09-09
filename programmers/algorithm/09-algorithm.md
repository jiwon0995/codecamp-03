### 자릿수 더하기



```javascript
function solution(n){
	let result = 0
  //n을 문자열 타입으로 변환
  n = String(n)
  //for문 이용하기
  for(let ik=0; i<n.length; i++){
    result = result + Number(n[i])
  }
  return result;
}
```

```javascript

//forEach메소드를 이용한 방법
function solution(n){
  let result = 0
  String(n).split("").forEach(num => {result=result+Number(num)})
  console.log(arry)
  return result
}
```



###  x만큼 간격이 있는 n개의 숫자

```javascript
function solution(x,n){
  let answer = [];
  for(let i=1; i<= n; i++){
    answer.push(i*x)
  }
  ret urn answer
}
```

```javascript
function solution(x,n) {
	const array = new Array(n).fill(x).map((number,index)=>{
    return number * (index+1)
  }) // n개 길이를 가진 빈 문자열을 만든다음 x로 채워줌
  return array
}
```

