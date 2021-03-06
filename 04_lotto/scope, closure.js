/*

let, var
변수는 scope(범위)를 가진다
var는 함수 스코프, let은 블록 스코프를 가진다(다른 언어들과 유사)

function b() {
  var a = 1;
}
console.log(a); 

의 경우, a is not defined 이다. 함수 바깥으로 나오면 var a 에 접근 불가.

if (true) {
  let a = 1;
}
console.log(a);

의 경우, a is not defined, 그러나 let -> var 인 경우에는 a = 1
if문이 블록({})으로 감싸져 있지만 함수는 아니므로 var 변수에는 접근 가능

lotto.html의 setTimeout 반복문에서 i = 6이 출력되는 이유.

i < 6(winBalls.length) 인 조건에서, i = 5일 때 {} 안의 동작문이 실행된다.
그 다음 i++ 가 수행되어 i = 6이 된다. 이 때 조건문이 false이므로
{} 안의 동작문이 실행되지 않고 종료되는 것.
결국 i는 6까지 커진다.

setTimeout(( ... ) => {}, ...) 의 ( ... ) => {}, 부분은 비동기로 실행된다.
여기가 실행 될 때, 반복문은 매우 빠르게 작동하여 i는 이미 6까지 커진 상태.
winBalls[i] -> winBalls[6] 이 되었는데, 6번째 인덱스는 없으므로 undefined.

그런데 let은 왜 되는걸까?
{} 블록은 블록 스코프 변수에 대해 바깥으로부터, 안쪽으로부터의 접근을 모두 차단한다.
-> 각각의 i 상태가 고정되어 있게 됨.

** 이것을 var로 처리하려면,

for (var i = 0; i < winBalls.length; i++) {
  (function(j) {        -> 매개변수로 j : 인수 i가 매개변수 j로 전달됨. 이 j는 함수 안에 갇혀 그때그때의 i를 가리킴.
    setTimeout(() => {
      drawBall(winBalls[j], $result);
    }, (i + 1) * 1000);
  })(i);        -> 함수를 ()로 감싸고 뒤에 (); 붙이면 바로 호출. 여기에 i를 인수로 넣는다
}

이와 같은 것을 클로저 문제라고 한다. (클로저를 사용해 문제 해결)

*** 클로저(closure): 함수와 함수 바깥에 있는 변수와의 참조관계.
이를 이해하기 위해서는 lexical scope를 이해해야 한다.
-> 이미 종료된 함수 바깥에서 함수의 내부함수에 인수를 제공하고,
   내부함수를 감싸고 있는 부모함수가 가진 변수를 참조할 수 있는 것.
   내부 함수가 생성해놓은 인스턴스를 참조하는데, 이 때 내부함수가 사용하는 부모 변수 역시 참조.
   JS의 특징이다. 실행 컨택스트와 관련이 있다.
   private method를 흉내낼 수 있음. <- OOP의 정보 은닉, 캡슐화의 이점을 얻을 수 있다.

위의 for문은 scope와 clousure 문제를 같이 해결해야 하는 경우임.
함수와 함수 바깥에 있는 변수를 함수와 함수 안에 있는 변수로 바꿔줘야 한다.
  함수 바깥에 있는 i -> 함수 안에 있는 j 로.

함수와 함수 바깥의 변수 - 클로저 + 비동기 = 클로저 문제 발생
이런 문제를 피해가려면 let 씁시다~ (요즘 새로 작성되는 코드에서는 발생 X)

*/