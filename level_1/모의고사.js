function solution(answers) {
  var answer = [];
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let values = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i] === answers[i % first.length]) values[0]++;
    if (second[i] === answers[i % second.length]) values[1]++;
    if (third[i] === answers[i % third.length]) values[2]++;
  }

  let maxNum = Math.max(...values);
  for (let i = 0; i < values.length; i++) {
    if (values[i] == maxNum) {
      answer.push(i + 1);
    }
  }

  return answer;
}
