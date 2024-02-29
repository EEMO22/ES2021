// 조건문 변환
{
  let cond = true;
  let value = '';
  if (cond) {
    value = '참';
  } else {
    value = '거짓';
  }
}

{
  let cond = true;
  let value = '';
  switch(cond) {
    case true:
      value = '참';
      break;
    case false:
      value = '거짓';
      break;
  }
}

let cond = true;
let value = cond ? '참' : '거짓';

//  반복문

for (i = 0; i < 100; i++) {
  console.log(i + 1);
}

// break, continue
// +@: label
// break -> 해당 루프 실행 종료, 탈출
// continue -> 다음 실행줄 건너뛰고 반복문으로 돌아감

let i, j;

outerLoop:
for (i = 0; i < 3; i++) {
  innerLoop:
  for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop;
    }
    console.log('i = ' + i + ', j = ' + j);
  }
}

// 구구단, 짝수 X

for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log('\n');
  for (let j = 1; j < 10; j++) {
    if (j % 2 == 0) {
      continue;
    }
    console.log(i + '*' + j + '=' + i*j);
  }
}

for (let i = 0; i < 10; i++) {
  // console.log('\n');
  for (let j = 0; j < 10; j++) {
    if (i % 2 == 0 || j % 2 == 0) {
      continue;
    }
    console.log(i + '*' + j + '=' + i*j);
  }
}

for (let i = 1; i < 10; i += 2) {
  console.log('\n');
  for (let j = 1; j < 10; j += 2) {
    console.log(i + '*' + j + '=' + i*j);
  }
}

// 별찍기 (on chrome console)

/* 
*
**
***
****
*****
*/

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(i + 1));
}

/* 
*****
****
***
**
*
*/

for (let i = 5; i > 0; i--) {
  console.log('*'.repeat(i));
}

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(5 - i));
}

for (let i = 0; i < 1; i++) {
  for (let j = 5; j > 0; j--) {
    console.log('*'.repeat(j));
  }
}

/*
*
***
*****
*******
*********
*/

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log('*'.repeat(i));
  }
}

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(i * 2 + 1));
}

/*
*********
*******
*****
***
*
*/

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(9 - i * 2));
}

for (let i = 10; i > 0; i--) {
  console.log('*'.repeat(i - 1 * 2));
}

/*
*****
 ****
  ***
   **
    *
*/

for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(i) + '*'.repeat(5 - i));
}


/*
    *
   **
  ***
 ****
*****
*/

for (let i = 5; i > 0; i--) {
  console.log(' '.repeat(i - 1) + '*'.repeat(6 - i))
}

for (let i = 0; i < 5; i++) {
  console.log(' '.repeat(4 - i) + '*'.repeat(i + 1));
}

/*
    *
   ***
  *****
 *******
*********
*/

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(' '.repeat((10 - i) / 2) + '*'.repeat(i));
  }
}

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

//  마름모도 해보기 (Math.abs 활용 -> 절댓값)




//  객체 (배열, 함수, 그 외 객체 리터럴)


//  배열

//  arr라는 배열이 있을 때, 배열의 마지막에서 세 번째 요소는?

const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 3]);

//  배열에 값을 추가하거나 빼기

//  값 추가

//  배열의 맨 뒤에 추가
const target = ['가', '나', '다', '라', '마'];
target[5] = '바';
//  배열의 가장 마지막 인덱스(가상의) 자리에 추가
console.log(target);

//  또는,
//  target.push

//  배열의 맨 앞에 추가
//  맨 뒤에 추가할 때와는 달리, [0]인덱스에 값을 추가하면 [0] 요소가 수정된다.
//  target.unshift

//  배열을 const로 할당했으나, 내부 값은 변경 가능
//  '=' 를 이용해 할당(다시 초기화하며 선언)할 수는 없다.

//  값 빼기

//  배열의 맨 뒤에서 빼기
//  target.pop

//  배열의 맨 앞에서 빼기
//  target.shift

//  배열의 중간에서 빼기, 또는 수정
//  target.splice
//  원하는 인덱스로부터 원하는 개수만큼 빼거나 수정 가능

//  배열에서 값 찾기

//  target.includes 참, 거짓
//  또는
//  target.indexOf 앞에서부터
//  또는
//  target.lastIndexOf 뒤에서부터

//  값이 없으면 -1

//  다음 배열에서 '라'를 모두 제거하세요. indexOf, splice 사용

const arr1 = ['가', '라', '다', '라', '마', '라'];
if (arr1.indexOf('라') > -1) {
  for (i = 1; i < arr1.length; i++) {
    arr1.splice(i, 1);
  }
}
console.log(arr1);

//  다른 방법(includes 사용)

const arr2 = ['가', '라', '다', '라', '마', '라'];
while (arr2.includes('라')) {
  arr2.splice(arr2.indexOf('라'), 1);
}
console.log(arr2);

//  풀이
const arr3 = ['가', '라', '다', '라', '마', '라'];
while (arr3.indexOf('라') > -1) {
  arr3.splice(arr3.indexOf('라'), 1);
}
console.log(arr3);

//  indexOf로 조건을 걸 때엔, arr.indexOf(n) > -1 형태가 필요하다.
//  indexOf(n) 의 값이 0인 경우에는, if문 안의 조건이 0이 되어서 false가 되기 때문.
//  존재 여부를 가리는 형태로 사용해야 함에 주의.



//  함수(function)

//  function() {};
//  () => {};

//  function a() {} 함수 선언문(function declaration statement)
//  const b = function() {}; 함수 표현식(function expression)
//  const c = () => {}; 함수 표현식 + 화살표함수

//  return
//  return은 반환값을 제공하는 동시에, 함수를 종료시킨다.
//  함수 마지막에는 늘 return undefined; 가 생략되어 있다.(=return;)

//  값을 여러 개 리턴하고 싶을 때, return 1, 5; 이렇게 쓰면 5만 리턴한다.
//  배열 또는 객체 리터럴로 리턴받아야 함.


//  매개변수(parameter)와 인수(argument).

//  함수를 선언할 때 = 매개변수
function a(parameter) {
  console.log(parameter);
}

//  함수를 호출할 때 = 인수
a('argument');
function a(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
a('Hello', 'Parameter', 'Argument');

//  인수가 매개변수에 할당되는데, 짝지어지는 값이 없는 z 는 기본값(undefined)
//  두 번째 콘솔에 찍히는 arguments는 내장된 값으로, 화살표함수에서는 사용 불가.
//  호출할 때 넣은 인수가 무엇인지 배열로 보여줌.

function a(w, x) {
  console.log(w, x, y, z);
}
a('Hello', 'Parameter', 'Argument');

//  이번에는 'Argument'가 들어갈 매개변수 자리가 없다.
//  이런 경우에 'Argument'는 무시됨.

//  매개변수로 x, y, z를 받아 곱해 반환하는 multiply함수 만들기. 화살표함수로.
const multiply = (x, y, z) => {
  return x * y * z;
}

multiply(1, 2, 3);

//  화살표함수는 {} 와 return이 바로 만나는 경우, 둘 다 생략 가능
//  const multiply = (x, y, z) => x * y * z;
//  const multiply = (x, y, z) => (x * y * z);
 
//  multiply(1, 2, 3);


//  객체 리터럴

//  속성 - 이름: 값(key: value)

//  key는 ''로 감싸지 않아도 된다.
//  단 숫자가 들어가거나 특수문자, 띄어쓰기가 들어가는 경우 ''로 감싸주기

const a = {
  'key': 'value',
  'key2': 'value2',
  'key3': 'value3',
};

//  접근 방법은 두 가지가 있다.
//  a.key;
//  a['key'];

//  두 번째 방법은, key에 숫자나 특수문자, 띄어쓰기가 들어간 경우에 사용.
//  a.key >> value
//  a[key2] >> error
//  a['key2'] >> value2

//  객체 내부 추가, 수정, 제거

//  추가
//  a.key4 = newValue;
//  수정
//  a.key2 = refreshValue;
//  제거
//  delete a.key;


//  배열, 함수도 객체이다.

function hello() {}
hello.a = 'really?';
const array = [];
array.b = 'wow!';
console.log(hello.a);
console.log(array.b);
// really?
// wow!

//  객체의 특성을 그대로 따른다.
//  그러나 이렇게 임의 속성을 넣을 필요 없음.


//  객체의 속성 값으로 함수가 들어가면, 이 속성은 메서드(method)라고 부른다.
//  console.log

const debug = {
  log: function(value) {
    console.log(value);
  }
}

debug.log('Hello, Method');


//  객체 간의 비교

//  {} === {} // false

//  모양이 같아도 false.
//  배열도 마찬가지.

//  객체 간 비교를 위해서는 객체를 변수 안에 저장하고 비교한다.
//  객체 리터럴을 선언할 때 새 객체가 생성되기 때문에 같지 않다.

//  const array = [1, 2, 3];
//  array === [1, 2, 3]; // false

//  const aa = { name: 'eemo' };
//  const arr0 = [ 1, 2, aa ];
//  console.log(aa === arr0[2]);  //  true

//  문자열 등 객체가 아닌 원시값은 stack에 값이 저장되고, 변수는 그 주소를 가리킴.
//  stack에 저장된 값을 동일하게 가리키므로 같다.

//  객체는 heap에 객체 리터럴이 선언될 때마다 새로 저장됨.
//  어떠한 위치를 지정하지 않고, 자기 자신이 곧 그대로의 값임.
//  그러니 서로 각자 다른 존재.
//  그래서 변수에 할당하여, stack에 올려놓고 비교하면 true 가능.


//  참조와 복사

//  객체간 참조 가능(heap 내부에서 상대 객체를 가리킴)
//  const a = { n: eemo }
//  const b = a;
//  a.n: fff;
//  console.log(b.n); // fff
//  어차피 하나의 값을 가리키고 있으니, 누구를 찍어봐도 변경된 값을 가짐.
//  a와 b는 참조 관계

//  원시값을 참조할 때
//  let a = 'eemo';
//  let b = a;
//  a = 'fff';
//  console.log(b); // eemo
//  heap내 fff가 별도로 생성되어 a는 fff를 가리킴
//  그러나 b는 아직 eemo를 가리키는 중. 
//  a와 b는 참조 관계가 아님


//  다음과 같이 객체 안에 객체가 있을 때, '강' 값에 접근하려면?
const eemo = {
  name: {
    first: '호진',
    last: '강',
  },
  gender: 'm',
}

console.log(eemo.name.last);
console.log(eemo['name']['last']);  //  따옴표에 주의


//  유사배열
//  HTML 요소들은 유사 배열이다. (부모자식간 노드 관계)
//  예를 들어, $table.children 확인 시,
//  HTMLCollection(3) [tr, tr, tr] 와 같은 형태로 나타나게 됨.
//  배열 메서드 사용 불가, for문으로 tr 정보를 가져올 수는 있음.

//  Array.from
//  Array.from($table.children) 처럼 사용하면, (3) [tr, tr, tr] 와 같이 배열화 되어,
//  모든 배열 메서드 사용 가능

//  every
//  1차원 배열에서만 가능
//  모두 다 true면 true, 하나라도 false면 false 처리하는 메서드.
//  틱택토 게임에서, 첫 칸이 빈 칸임에도 불구하고 반복문 검사에서는 모든 셀을 다 검사하므로 비효율적

//  flat
//  2차원 배열을 1차원 배열로 풀어주는 메서드 (배열의 차원을 한 단계 낮춰준다. 3차원 배열 -> 2차원)

//  some
//  하나라도 true이면 true, 모두 다 false 면 false

//  every, some 은 참 거짓 조건이 판별되는 순간 종료된다. 시간 절약.