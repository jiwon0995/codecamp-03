<h3>023.숫자 더하기</h3>

입력되는 수에 따라 0부터 해당 수까지의 합을 구한다.

num이 5라면 1+2+3+4+5를 모두 더한 값을 출력한다.

<b>주의사항</b>

for문을 이용해서 문제를 풀어야 한다. 

<b>예상 결과</b>

```javascript
sum(5) //15
```

<b>코드 작성</b>

```javascript
function sum(sum) {
	let count = 0 //더한 값을 저장해 줄 변수
	for(let i = 0; i <= sum; i++){ //sum에 입력한 수 만큼 반복 
    count += i //count = count + i
  }
  console.log(count) 
}
```



<h3>023.숫자 더하기</h3>

문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만든다.

반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당한다.

<b>주의사항</b>

for을 이용해서 문제를 풀어야 한다.

문자열도 배열이다.

대문자 "A" 문자열도 "a"에 포함이다.

<b>예상 결과</b>

```javascript
countLetter("I am from Korea")                         // 2
countLetter("A day without laughter is a day wasted.") // 6
```

<b>코드 작성</b>

```javascript
function countLetter(str) {
	let count = 0;
	for(let i=0; i<str.length; i++){ //str문자열 값만큼 반복
        if(str[i]==="a" || str[i]==="A"){ //str[i] index 값이 "a" or "A" 이면 
            count ++ // count 증가
  }
    }
  console.log(count)
}
```



<h3>025. 문자열 삽입</h3>

num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만든다.

num이 3일 경우에는 "1-2-3"이다.

<b>주의 사항</b>

for문을 이용해서 문제를 풀어야 한다.

<b>예상 결과</b>

```javascript
makeNumber(5) // 1-2-3-4-5
makeNumber(7) // 1-2-3-4-5-6-7
```

<b>코드 작성</b>

```javascript
//코드1
function makeNumber(num) {
	let str = "1" 
  for(let i=2; i<=num; i++) { //시작을 1로 했으니까 for문은 2로 시작
    str = str + "-" + i //  처음 for이 돌아가면 1 + "-" + 2
  }
	console.log(str)
}

//코드2
function makeNumber(num) {
	let str = '' 
  for(let i=1; i<=num; i++) { //시작을 1로 했으니까 for문은 2로 시작
    str = str + i
    if(i!==num){
      str = str + "-"
    }
  }
	console.log(str)
}
```



<h3>026. 홀수 문자열</h3>

num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만든다.

num이 5 일 경우 "135"

<b>주의 사항</b>

for문을 이용해서 문제를 풀어야 한다.

짝수는 제외하는 조건을 추가

<b>예상 결과</b>

```javascript
makeOdd(5) // 135
makeOdd(7) // 1357
```

<b>코드 작성</b>

```javascript
function makeOdd(num) {
    let odd="" //홀수 담아줄 빈문자열 변수 선언
    for(let i=1; i<=num; i++){ 
        if(i%2!==0){ //홀수 찾는 조건
            odd = odd + i; //odd에 담아준다
        }
    } console.log(odd)
}
```



<h3>027. 가장 큰 수 찾기</h3>

str은 무작위 숫자인 문자열이다. 해당 문자열에서 가장 큰 수를 구하는 함수를 만든다.

만약 str에 "12345"가 들어온다면 "5"를 나타내야 한다.

<b>주의 사항</b>

- str에서 각각의 문자를 숫자로 바꿔서 계산해야 합니다.
- 비교할 수 있는 기준값이 있어야 합니다.
- 최댓값을 저장할 수 있는 변수가 있어야 합니다.



<b>코드 작성</b>

```javascript
function bigNum(str) {
	let max= Number(str[0])
	for(let i=0; i<str.length; i++){
		if(Number(str[i])<Number(str[i+1])){
		max = Number(str[i+1])
		}
	}
	console.log(max)
}
```

