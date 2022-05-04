//  1. if 문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다. 
//     (중복 제거의 반대)
//  2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다. 
//     (코드 짧은 부분이 if쪽에 오도록)
//  3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다. 
//     (else고려할 필요 없도록)
//  4. else를 제거한다. (이 때 중첩 하나가 제거된다.) 
//     (내부 if문이 밖으로 나와 별개의 if문이 됨)


function test() {
  let result = '';
  if (a) {
    if (!b) {
      result = 'c';
    }
  } else {
    result = 'a';
  }
  result += 'b';
  return result;
}

//  위의 코드는 다음과 같이 줄일 수 있다.

function test() {
  let result = '';
  if (!a) {
    result = 'a';
    result += 'b';
    return result;
  } 
  if (!b) {
    result = 'c';
  }
  result += 'b';
  return result;
}