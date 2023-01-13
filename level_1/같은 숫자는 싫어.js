//https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  var answer = [arr[0]];
  let a = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (a !== arr[i]) {
      answer.push(arr[i]);
    }
    a = arr[i];
  }
  return answer;
}
