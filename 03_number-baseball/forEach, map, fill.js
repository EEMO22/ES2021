//  forEach

//  Array.prototype.forEach()
//  arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])

//  thisArg(opt) -> callback을 실행할 때 this로 사용할 값
//  return undefined

//  메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.

//  for 문을 forEach로 바꾸기 (forEach -> 배열에 대한 반복문)
//  함수 생성과 호출을 해야 하므로 for문 보다 성능은 떨어지지만,
//  연달아 사용할 때 편리하다

const answer = [3, 1, 4, 6];
const value = '3124';
let strike = 0;
let ball = 0;

//  for

for (let i = 0; i < answer.length; i++) {
  const index = value.indexOf(answer[i]);
  if (index > -1) {
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
}

//  forEach

answer.forEach((element, i) => {  //  i -> answer의 index
  const index = value.indexOf(element); //  answer[i] = element이므로
  if (index > -1) {
    if (index === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
})

//  element, i 등 매개변수는 변수니까 이름 마음대로 지어도 되는 거 알지?
//  중요한 건 메서드에 들어가는 자리임. 변수자리 함수자리...





//  map

//  Array.prototype.map()
//  arr.map(callback(currentValue[, index[, array]])[, thisArg])

//  return 배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.

//  메서드는 배열 내 모든 요소 각각에 대해 주어진 함수를 호출
//  ** 그 결과를 모아 새로운 배열을 반환한다

//  forEach의 역할도 하면서 요소들을 어떻게 바꿀지 정할 수 있음
//  ** 원본 배열을 바꾸지 않는다
//  ** 새로운 배열을 반환함

const array = [1, 2, 3, 4];
const result = [];

//  for

for (let i = 0; i < 4; i++) {
  result.push(array[i] * 2); 
}

// map

array.map((element, i) => {
  return element * 2;
})




//  fill

//  Array.prototype.fill()
//  arr.fill(value[, start[, end]])

//  value -> 배열을 채울 값
//  start(opt) -> 시작 인덱스, 기본값은 0
//  end(opt) -> 끝 인덱스, 기본값은 this.length
//  return 변형한 배열

//  메서드는 배열의 시작 인덱스부터 끝 인덱스 "앞"까지 정해준 값으로 채운다
//  arr.fill('A', 1, 3); -> arr의 1번 부터 3번 인덱스 "앞"까지 'A' 로 채워
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(9, 1, 4); //  -> [1, 9, 9, 9, 5, 6, 7]

//  숫자야구에서 사용한 배열 준비하는 법
const numbers = [];

for (let n = 0; n < 9; n += 1) {
  numbers.push(n + 1);
}

//  (빈) 배열을 만들 때, JS는 이렇게도 가능

Array(9); //  undefined로 채워진 빈 배열

Array(9).fill(0); //  0으로 채우기

//  map과 함께 사용 -> 위의 for문을 대체할 수 있다.
//  ** 이 부분이 for문에 비해 메서드들이 가지는 장점임.

Array(9).fill(0).map((el, idx) => {
  return idx + 1; //  return 값이 배열에 들어감
})

//  더 긴 배열도 가능
Array(45).fill().map((el, idx) => {
  return idx + 1;
})
