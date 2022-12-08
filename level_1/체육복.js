function solution(n, lost, reserve) {
  var answer = n - lost.length;
  let borrowing = 0;

  let ascending_order = function (x, y) {
    return x - y;
  };

  lost.sort(ascending_order);
  reserve.sort(ascending_order);

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] === lost[j]) {
        lost.splice(j, 1);
        reserve.splice(i, 1);
        i--;
        borrowing++;
        break;
      }
    }
  }

  for (let i = 0; i < reserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (reserve[i] - lost[j] > 1) continue;
      if (reserve[i] - 1 === lost[j] || reserve[i] + 1 === lost[j]) {
        lost.splice(j, 1);
        reserve.splice(i, 1);
        borrowing++;
        i--;
        break;
      }
    }
  }
  return (answer += borrowing);
}
