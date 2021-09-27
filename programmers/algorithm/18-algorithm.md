### 행렬의 덧셈

**_문제 설명_**

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

**_멘토님 코드_**

```javascript
function solution(arr1, arr2) {
  let answer=[[]]
  for(let i=0; i<arr.length; i++) {
    for(let l = 0; l<arr[i].length; l++){
      // 배열의 각각의 위치에 있는 정수들을 더한 결과 값을 저장
      const sum = arr1[i][l] + arr2[i][l]
      if(answer[i] === undefined){
        answer[i] = []
      }
      answer[i][j] = sum
    }
  }
  return answer;
}
```



```javascript
//메서드를 이용한 코드
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i)=>{
    return num1.map((num2)=>{
      return num2 + arr2[i][l]
    })
  })
  return answer;
}
```

