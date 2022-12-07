//https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript

function solution(food) {
  var answer = [];
  let number = "";
  for (let i = food.length; i > 0; i--) {
    number = String(i).repeat(Math.floor(food[i] / 2));
    answer.push(number);
    answer.unshift(number);
  }
  answer.splice(answer.length / 2, 1, 0).join();
  answer = answer.join("");
  return answer;
}
