### 소수 찾기

###### 문제 설명

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

##### 제한 조건

- n은 2이상 1000000이하의 자연수입니다.

``` javascript
function solution(n) {
    //소수를 구하는 함수
    function check(i){
        for(let j = 2; j*j<=i; j++){
            if(i % j === 0) return false
        }
        return true
        // if(소수가 맞으면){
        //     true
        // } else {
        //     false
        // }
    }
    let count = 0
    for(let i=2; i<=n; i++){
        if(check(i) === true){
            count ++
        }
    }
    return count 
}
```



``` javascript
//에라토스테네스의 체
function solution(n) {
    let answer = 0;
    
    // 2부터 n 까지의 숫자들을 담아주는 배열
    const numbers = [];
    for(let i = 2; i <= n; i++) {
        // numbers.push(i);
        numbers[i - 2] = i;
    }
    
    for(let i = 2; i * i <= n; i++) {
															  // l = l + i;
        for(let l = i * i; l <= n; l += i) {
            numbers[l - 2] = false;
        }
    }

		// 배열에서 false 값 (= 소수가 아닌 값)을 제거한다. 
    answer = numbers.filter( data => data !== false );

    return answer.length;
}
```

