//https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let count = 0;
  let deletedZero = 0;
  let parsing = s;

  while (parsing !== "1") {
    let length = parsing.length;
    let parsingLength = parsing.replaceAll("0", "").length;
    parsing = parsingLength.toString(2);
    count++;
    deletedZero += length - parsingLength;
  }

  return [count, deletedZero];
}
