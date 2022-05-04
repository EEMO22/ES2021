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
