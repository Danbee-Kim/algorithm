//https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

function solution(s) {
  var answer = 0;
  let first = s[0];
  let arr1 = [first];
  let arr2 = [];

  for (let i = 1; i < s.length; i++) {
    if (first === s[i]) {
      arr1.push(s[i]);
    } else {
      arr2.push(s[i]);
    }
    if (arr1.length === arr2.length) {
      answer++;
      first = s[i + 1];
      arr1 = [];
      arr2 = [];
    }
  }
  if (arr1.length > 0) {
    answer++;
  }

  return answer;
}
