//018. 조건문 연습

function boolean(input1, unput2) {



  if (input1 === false && input2 === false) {
    console.log(false)
  }
  else {
    console.log(true)
  }

}

//019. 홀짝

function evenOdd(num) {
  if (num % 2 !== 0) {
    console.log("Odd")
  } else if (num === 0) {
    console.log("Zero")
  } else {
    console.log("Even")
  }

}

//020. 온동

function temperature(num) {
  if (num <= 18) {
    console.log("조금 춥네요");
  } else if (num <= 19 || num <= 23) {
    console.log("날씨가 좋네요");
  } else if (num >= 24) {
    console.log("조금 덥습니다");
  }
}

//021. 며칠

function days(month) {
  if (month === 2) {
    console.log(28)
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30)
  } else {
    console.log(31)
  }
}
