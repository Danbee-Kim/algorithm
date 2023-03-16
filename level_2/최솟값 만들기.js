//https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  var answer = 0;
  let arrayA = A.sort(function (a, b) {
    return a - b;
  });
  let arrayB = B.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < arrayA.length; i++) {
    answer += arrayA[i] * arrayB[i];
  }
  return answer;
}
