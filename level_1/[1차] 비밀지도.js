//https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  var answer = [];
  let result = "";
  for (let i = 0; i < arr1.length; i++) {
    let a = arr1[i].toString(2);
    let b = arr2[i].toString(2);
    result = (Number(a) + Number(b)).toString().padStart(n, 0);
    result = result.replaceAll(/[1-9]/g, "#").replaceAll(0, " ");
    answer.push(result);
  }

  return answer;
}
