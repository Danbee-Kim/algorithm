//school.programmers.co.kr/learn/courses/30/lessons/132267

 function solution(a, b, n) {
  var answer = 0;

  while (n / a >= 1) {
    const remain = n % a;
    n = Math.floor(n / a) * b;
    answer += n;

    n += remain;
  }

  return answer;
}
