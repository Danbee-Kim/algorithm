//https://school.programmers.co.kr/learn/courses/30/lessons/12940?language=javascript

function solution(n, m) {
  var answer = [];
  let min = Math.min(n, m);

  for (let i = min; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }
  answer.push((n * m) / answer[0]);

  return answer;
}
