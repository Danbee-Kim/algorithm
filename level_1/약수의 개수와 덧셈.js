//https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let number = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) number++;
    }

    if (number % 2 !== 0) {
      answer -= i;
    } else answer += i;
  }

  return answer;
}
