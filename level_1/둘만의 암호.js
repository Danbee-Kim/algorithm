//https://school.programmers.co.kr/learn/courses/30/lessons/155652?language=javascript

function solution(s, skip, index) {
  var answer = "";
  let text = "abcdefghijklmnopqrstuvwxyz";
  let arrText = text.split("");

  skip.split("").map((el) => {
    const findSkipIdx = arrText.indexOf(el);
    arrText.splice(findSkipIdx, 1);
  });

  for (let i = 0; i < s.length; i++) {
    let idx = arrText.indexOf(s[i]) + index;
    if (idx >= arrText.length) idx = idx % arrText.length;

    answer += arrText[idx];
  }

  return answer;
}
