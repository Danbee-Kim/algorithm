//https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(x, y) {
  var answer = '';
  const arrX = x.split('');
  const arrY = y.split('');
  for (let i = 9; i >= 0; i--) {
    const curX = arrX.filter((el) => Number(el) === i).length;

    const curY = arrY.filter((el) => Number(el) === i).length;
       console.log(curX,curY)
    answer += String(i).repeat(Math.min(curX, curY));
  }

  answer = answer === '' ? '-1' : answer;
  return answer.startsWith(0) ? '0' : answer;
}