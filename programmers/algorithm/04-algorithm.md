```javascript
const myShopping = [
		{ category: "과일", price: 12000　},
		{ category: "의류", price:10000　 },
		{ category: "의류", price: 20000　},
		{ category: "장난감", price: 9000 },
		{ category: "과일", price: 5000　 },
		{ category: "의류", price: 10000  },
		{ category: "과일", price: 8000　　},
		{ category: "의류", price: 7000　　},
		{ category: "장난감", price: 5000  },
		{ category: "의류", price: 10000　 },
]

let count = 0 //의류 구매한 횟수
let sum = 0 //의류 구매한 총 금액
let grade = ""

for(let i=0; i < myShopping.length; i++){
  if(myShopping[i].categry ==="의류"){
    count+=1 
    sum = sum + myShopping[i].price 
  }
  if(sum >=5 ){
    grade="Cold"
  }
  else if(sum >= 3){
    grade="Silver"
  }
  else if(sum >= 0){
    grade="Bronze"
  }
  console.log("의류를 구매한 횟수는 총 " + count + "회 금액은" + sum + "원이며 등급은" + grade + "입니다."	
)
}


```

