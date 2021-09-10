### 문자열 내림차순으로 배치하기

**_문제 설명_**

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

**_제한 사항_**

- str은 길이 1 이상인 문자열입니다.

```javascript
function solution(s) {
    								문자열을 배열로 만들어준 다음 -> 대소문자 정렬 -> 배열반대로 -> 조인으로 다시 문자열로 합쳐준다.
  	const answer = 
    s.split('').sort().reverse().join('')
  	// s.split('').sort( (a,b) => {return a > b ? -1 : 1}).join('')
		return answer;
}
```

```javascript
function solution(s){
  let answer = ''
  const arr = []
  for( let i =0; i < s.length; i++){
    arr.push(s[i])
  }
  arr.sort((a,b) => {
    //배열을 내림차순으로 정렬하는 식
    return a>b ? -1:1})
}
```



### K번쨰 수

**_문제 설명_**

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

**_제한 사항_**

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

```javascript
function solution(array, commands) {
  let answer = [];
  for (let idx=0; idx<commands.length; idx++){
    const i = commands[idx][0];
    const j = commands[idx][1]
    const k = commands[idx][2]
    //배열을 자르고 정렬한 결과를 저장하는 상수
    const sliceResult = array.slice(i-1,j)
    												 .sort( (a,b) => { return a-b })
    answer.push(sliceResult[k-1])
  }
  return answer;
}
```



```javascript
function solution(array, commands) {
  const answer = commands.map(el => {
    const sliceResult = array.slice( el[0]-1, el[1]).sort( (a,b) => {return a-b})
  return sliceResult[el[2]-1]
                                    })
  return answer;
}
```











