//https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) count++;
    }
    count++;
    arr.push(count);
  }
  const newArr = arr.filter((num) => num <= limit);

  if (newArr.length === number) {
    return arr.reduce((a, b) => a + b);
  } else
    return newArr.reduce((a, b) => a + b) + (number - newArr.length) * power;
}
