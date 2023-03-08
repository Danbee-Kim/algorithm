//https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  const arr = s.split(" ");
  const lower = arr.map((word) => word.toLowerCase());
  for (let i = 0; i < lower.length; i++) {
    lower[i] = lower[i].charAt(0).toUpperCase() + lower[i].slice(1);
  }

  const answer = lower.join(" ");
  return answer;
}
