//https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  var answer = [];
  let min = 0;
  let countingZero = 0;
  let rank;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        count++;
      }
    }
    if (lottos[i] === 0) countingZero++;
  }
  let max = count + countingZero;

  switch (max) {
    case 6:
      rank = 1;
      break;
    case 5:
      rank = 2;
      break;
    case 4:
      rank = 3;
      break;
    case 3:
      rank = 4;
      break;
    case 2:
      rank = 5;
      break;
    default:
      rank = 6;
  }
  answer.push(rank);
  switch (min) {
    case 6:
      rank = 1;
      break;
    case 5:
      rank = 2;
      break;
    case 4:
      rank = 3;
      break;
    case 3:
      rank = 4;
      break;
    case 2:
      rank = 5;
      break;
    default:
      rank = 6;
  }
  answer.push(rank);
  return answer;
}
