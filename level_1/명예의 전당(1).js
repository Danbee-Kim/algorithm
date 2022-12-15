//https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  var answer = [];
  let winners = [];

  for (let i = 0; i < score.length; i++) {
    if (k > i) winners.push(score[i]);

    if (i >= k) {
      if (score[i] > winners[0]) {
        winners.shift();
        winners.push(score[i]);
      }
    }

    winners.sort((a, b) => a - b);
    answer.push(winners[0]);
  }

  return answer;
}
