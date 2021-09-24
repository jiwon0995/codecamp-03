### 내적

**_문제 설명_**

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 [내적](https://en.wikipedia.org/wiki/Dot_product)을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 `a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]` 입니다. (n은 a, b의 길이)

**_내가 작성한 코드_**

``` javascript
function solution(a, b) {
    var answer = 0;
    for(let i = 0; i < a.length; i++){
        answer += a[i]*b[i]
    }
    return answer;
}
```

**_멘토님 코드_**

```javascript
//for문 이용한 방법
function solution(a,b) {
  let answer = 0;
  for(elt i = 0; i< a.lenth; i++){
    answer += a[i] * b[i]
  }
}
```

``` javascript
//메서드 이용한 방법
function solution(a,b) {
  const answer = a.map( (num,b[i]) => {
    return num * b[i]
  }).reduce((le,cu)=>{ return el + cu },0)
  return answer
}
```





### 제일 작은 수 제거하기

**_문제 설명_**

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

**_내가 작성한 코드_**

``` javascript
function solution(arr) {
    var answer = [];
    let min = Math.min.apply(null,arr)   
    arr.length === 1 ?  answer = [-1] : answer = arr.filter((el) => el !== min)      
    return answer;
}
```

``` javascript
function solution(arr) {
  let answer = [];
  //제일 작은 수를 저장해주는 변수
  let min = arr[0]
  
  for(let i =1; i<arr.length; i++) {
    if(min > arr[i]){
      min = arr[i]
    }
  }
  arr.splice(arr.indexof(min),1)
  if(arr.length === 0) {
    return [-1]
  }
  return arr
}
```

```javascript
function solution(arr) {
              //apply = 배열이나 객체는 상속, Math.min은 배열이나 객체 사용을 못함
  const min = Math.min.apply(null,arr)
  //스프레드 연산자 사용
  //const min = Math.min(...arr)
  const result = arr.filter((num)=>{return num>min})
  
  return result.length === 0 ? [-1] : result
  
}
```



