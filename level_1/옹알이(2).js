//https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  var answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    babbling[i] = babbling[i]
      .replaceAll("aya", 1)
      .replaceAll("ye", 2)
      .replaceAll("woo", 3)
      .replaceAll("ma", 4);
    console.log(babbling[i]);
    if (
      !/[a-zA-Z]/g.test(babbling[i]) &&
      babbling[i].indexOf(11) == -1 &&
      babbling[i].indexOf(22) == -1 &&
      babbling[i].indexOf(33) == -1 &&
      babbling[i].indexOf(44) == -1
    ) {
      answer++;
    }
  }

  return answer;
}
