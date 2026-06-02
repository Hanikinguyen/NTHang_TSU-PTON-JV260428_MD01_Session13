let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input = +prompt('Nhập vào số cần tìm: ');

if (arr.includes(input)) {
    alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau");
}