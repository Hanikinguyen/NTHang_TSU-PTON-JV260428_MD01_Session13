let arr = [];

let n = Math.floor(Math.random() * 11) + 10; // 10 → 20 phần tử

for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    arr.push(randomNumber);
}
let k = Number(prompt("Nhập số cần kiểm tra:"));

// đếm số lần xuất hiện
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        count++;
    }
}

// hiển thị kết quả
alert(
    "Mảng: " + arr +
    "\nSố " + k + " xuất hiện: " + count + " lần"
);