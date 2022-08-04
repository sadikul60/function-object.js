function add (number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;

}
// add(12, 44);

var total = add(12, 44);
// console.log('total', total);


function bringSingra(money){
    var singraPrice = 10;
    var quantity = money / singraPrice;
    return quantity;
}

var myTaka = 150;
var singras = bringSingra(myTaka);
console.log('Eating singras', singras);