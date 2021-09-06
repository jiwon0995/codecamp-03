### 01. 문자열을 정수로 바꾸기

**_문제설명_**

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

**_제한 조건_**

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.



```javascript
function solution(s) {
    var answer = 0;
    answer = Number(s)
    //return +s 이것도 숫자타입으로 바꿔줌
    return answer;
}
```



### 02. 같은 숫자는 싫어

**_문제 설명_**

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.



**_제한 사항_**

- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

```javascript
function solution(arr)
{
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[ i + 1 ]){
            answer.push(arr[i])
        }            
    }  
    return answer;
}
```

```
테스트 1
입력값 〉[1, 1, 3, 3, 0, 1, 1]
기댓값 〉[1, 3, 0, 1]
실행 결과 〉테스트를 통과하였습니다.

```

### 03. 핸드폰 번호 가리기

**_문제 설명_**

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 `*`으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

**_제한 사항_**

- s는 길이 4 이상, 20이하인 문자열입니다.

```javascript
function solution(phone_number) {
    var answer = '';
    for(let i=0; i<phone_number.length; i++){
        if(i<phone_number.length-4){
            answer = answer + '*'
        } else {
            answer = answer + phone_number[i]
        }
        console.log(i,answer)
    }
    return answer;
}
```

```
테스트 1
입력값 〉	"01033334444"
기댓값 〉	"*******4444"
실행 결과 〉	테스트를 통과하였습니다.
출력 〉	0 *
1 **
2 ***
3 ****
4 *****
5 ******
6 *******
7 *******4
8 *******44
9 *******444
10 *******4444
```



