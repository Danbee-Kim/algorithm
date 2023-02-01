//https://school.programmers.co.kr/learn/courses/30/lessons/12926?language=javascript

function solution(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let array = upper.includes(s[i]) ? upper : lower;

    let index = array.indexOf(s[i]) + n;
    if (index >= array.length) index -= array.length;
    answer += array[index];
  }

  return answer;
}
