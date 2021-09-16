### 두 개 뽑아서 더하기

**_문제 설명_**

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

**_제한 사항_**

- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.

**_멘토님 코드_**

```javascript
function solution(number){
	let answer=[]
  for(let i =0; i<numbers.length; i++){
    for(let j= i+1; j<numbers.length; j++){
      const sum = numbers[i] + numbers[j]
      if(answer.includse(sum) === false){ //중복되는 숫자 제거해서 배열에 넣어주기
        answer.push(sum) 
      }
    }
  }
  return answer.sort((a,b)=>a-b) //오름차순으로 정렬
}
```

```javascript
function solution(numbers){
  let answer = []
   number.forEach((num1, i)=>{
     numbers.slice( i + 1, numbers.length).forEach(num2=->{
       const sum = num1 + num2
       if(answer.includes(sum) === false){
       answer.push(sum)
     }
     })
   })
   return answer.sort((a,b)=>a-b)
}
```

