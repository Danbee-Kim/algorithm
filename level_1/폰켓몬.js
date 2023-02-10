//https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const set = new Set(nums);
  const length = nums.length / 2;
  return set.size > length ? length : set.size;
}
