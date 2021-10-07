###  시저 암호

###### 문제 설명

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

##### 제한 조건

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

``` javascript
const lower = ‘abcdefghijklmnopqrstuvwxyz’;
const upper = ‘ABCDEFGHIJKLMNOPQRSTUVWXYZ’; 

function solution(s,n) {
  let answer = '';
  for(let i = 0; i < s.length; i++){
    if(s[i] === ' ') {
      //공백의 경우 바로 공백을 추가한다.
      answer += ' '
    } else {
      // 소문자와 대문자를 구분해서 알파벳 문자열을 text 상수에 저장
      const text = lower.includes(s[i] === true ? lower : upper)
      let index = text.indexof(s[i]) +n
      if(text[index]===undefined) {
        index = index -26 //알파벳의 길이만큼 뺀다. 
        
      }
      answer += text[index]
    }
  }
  return answer;
}
```



``` javascript
const lower = ‘abcdefghijklmnopqrstuvwxyz’;
const upper = ‘ABCDEFGHIJKLMNOPQRSTUVWXYZ’; 

function solution(s,n) {
  const answer = s.aplit("")
  								.map(str => {
                    if(str === ' '){
                      return " "
                    }
                    const text = lower.includes(str) === true ? lower:upper
                    let index = test.indexOf(str) + n
                    if(text[index] === undefined){ index = index - 26}
                    return text[index]
                  })
  return answer.join("")
}
```



``` javascript
function solution(s,n) {
  let result = '';
  
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      result += ' '
    } else {
      let charcode = s.hacrCodeAt(i) + n
      if(charcode > 122 || (charcode > 98 && (charcode - n) < 97) ) {
        //소문자 z(122) 이상을 넘어가거나
        //댜문자  Z  (98) 를 넘어가거나
        // 기준의 chacode의 값이 소문자일 경우
        charcode  = charcode - 26
      }
      result += Strig.fromCharCode(charcode)
    }
  }
  return result;
}
```

