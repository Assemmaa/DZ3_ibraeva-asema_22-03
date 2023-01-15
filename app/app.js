var number = 0;
do {
    console.log(number);
    number++
}while (number <= 20);


var positiveNumber = 0;
do {
    var num = Number(prompt('Пожалуюста ведите число'))
    if (num >= 0) {
        positiveNumber += num
    }
}while (num >= 0)
console.log('Сумма чисел - ' + positiveNumber);