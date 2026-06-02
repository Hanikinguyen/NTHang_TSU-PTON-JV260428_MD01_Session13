let arr = []
let n = Math.floor(Math.random() * 11) + 10;
for (let i = 0; i < n; i = i + 1){
    let randomNumber = Math.floor(Math.random() * 100);
    arr.push(randomNumber);
}
// Tính tổng các số lẻ và hiển thị ra màn hình bằng alert()
let sumOdd = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        sumOdd += arr[i];
    }
}

// Tính tổng các số chẵn và hiển thị ra màn hình alert()
let sumEven = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEven += arr[i];
    }
}

// hiển thị
alert(
    "Mảng: " + arr +
    "\nTổng số lẻ: " + sumOdd +
    "\nTổng số chẵn: " + sumEven
);