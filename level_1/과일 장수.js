//https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript

function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);

  for (let j = 0; j <= score.length; j++) {
    if (score[j + m - 1]) answer += score[j + m - 1] * m;
    j += m - 1;
  }
  return answer;
}
