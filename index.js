//
// Bài 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
// =====================================================
document.getElementById("btnKetQuaBai1").onclick = function () {
  var sum = 0;
  var n = 1;

  while (sum <= 10000) {
    sum += n;
    n++;
  }
  document.getElementById("ketquabai1").innerHTML = `
  Kết quả là ${n - 1}
  `;
};
