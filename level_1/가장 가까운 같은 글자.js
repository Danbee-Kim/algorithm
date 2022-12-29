//https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  var answer = [];
  let array = [];

  for (let i = 0; i < s.length; i++) {
    if (!array.includes(s[i])) {
      array.push(s[i]);
      answer.push(-1);
    } else {
      let count = 0;
      for (let j = i - 1; j >= 0; j--) {
        count++;
        if (s[i] === array[j]) {
          array.push(s[i]);
          answer.push(count);
          break;
        }
      }
    }
  }
  return answer;
}
