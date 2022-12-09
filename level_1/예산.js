//https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  var answer = 0;
  d.sort((x, y) => x - y);

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget >= 0) {
      answer++;
    }
  }
  return answer;
}
