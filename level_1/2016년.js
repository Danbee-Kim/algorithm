//https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  var answer = "";

  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let d = new Date(`2016-${a}-${b}`);
  return (answer = day[d.getDay()]);
}
