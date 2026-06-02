let arr = []

for (let i = 0; i < 10; i = i + 1){
    let randomNumber = Math.floor(Math.random() * 100);
    arr.push(randomNumber);
}
console.log(arr);