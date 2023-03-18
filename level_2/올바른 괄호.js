//https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript

function solution(s) {
  if (s[s.length - 1] === "(") return false;

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? count++ : count--;
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}
