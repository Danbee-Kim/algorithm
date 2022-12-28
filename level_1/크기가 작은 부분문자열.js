//https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  var answer = 0;

  for (let i = 0; i < t.length; i++) {
    if (t.substr(i, p.length) <= p && t.substr(i, p.length).length === p.length)
      answer++;
  }
  return answer;
}
