### 자릿수 더하기

**_문제 설명_**

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

**_제한 사항_**

- N의 범위 : 100,000,000 이하의 자연수

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
function solution(n)
{
    let result = 0
    String(n).split('').forEach(num => {result=result+Number(num)})
    console.log(result)
    return result;
}
```



###  x만큼 간격이 있는 n개의 숫자

**_문제 설명_**

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

**_제한 조건_**

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

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
function solution(x, n) {
  
    const answer = new Array(n).fill(x).map((num,index) => (num*(index+1)))
    return answer;
}
```

