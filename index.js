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

//
// Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
// =====================================================
function tinhKetQuaBai2(x, n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  return sum;
}

document.getElementById("btnKetQuaBai2").onclick = function () {
  var x = document.getElementById("so-x").value * 1;
  var n = document.getElementById("so-n").value * 1;
  var sum = tinhKetQuaBai2(x, n);

  document.getElementById("ketquabai2").innerHTML = `
  Kết Quả: ${sum}
  `;
};

//
// Bài 3: Nhập vào n. Tính giai thừa 1*2*...n
// =====================================================
function tinhGiaiThua(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * tinhGiaiThua(n - 1);
  }
}

document.getElementById("btnKetQuaBai3").onclick = function () {
  var n = document.getElementById("so-m").value * 1;
  var giaiThua = tinhGiaiThua(n);

  document.getElementById("ketQuaBai3").innerHTML = `
  Kết quả: ${giaiThua}
  `;
};

//
// Bài 4: Nhập vào n. Tính giai thừa 1*2*...n
// =====================================================
document.getElementById("addNewDiv").onclick = function taoDiv() {
  for (var i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    div.innerText = i;
    div.className = i % 2 === 0 ? "red" : "green";
    document.body.appendChild(div);
  }
};
