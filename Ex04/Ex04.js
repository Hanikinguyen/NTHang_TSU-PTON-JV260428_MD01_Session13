let input = prompt('Nhập vào chuỗi số (cách nhau bởi dấu phẩy): ');
let arr = input.split(",");
let max = Number(arr[0]);
for (let i = 1; i < arr.length; i++) {
  if (max < Number(arr[i])) {
    max = Number(arr[i]);
  }
}
alert("Số lớn nhất là: " + max);