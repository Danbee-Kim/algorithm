//https://school.programmers.co.kr/learn/courses/30/lessons/12911?language=javascript

function solution(n) {
  var count = n
    .toString(2)
    .match(/1/g)
    .filter((item) => item !== "").length;
  let i = n + 1;
  while (true) {
    if (
      i
        .toString(2)
        .match(/1/g)
        .filter((item) => item !== "").length === count
    ) {
      return i;
    }

    i++;
  }
}
