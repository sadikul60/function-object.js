var shopingCard = {
    books: 5,
    pen: 23,
    mouse: 3,
    keyboard: 5,
}

console.log(shopingCard);
// when you the specific property name, use dot notation to get the property value
var penCount = shopingCard.pen;
console.log(penCount)

var penCount2 = shopingCard['books'];
console.log(penCount2);

// when you the specific property name, use dot notation to get the property value
var properties = Object.keys(shopingCard);
console.log(properties);

// when you the specific property value, use dot notation to get the property value
var propertyValue = Object.values(shopingCard)
console.log(propertyValue);

//properties name replace
shopingCard.books = 'pencile: 6';
console.log(shopingCard);

//properties value replace
shopingCard['books'] = 9;
console.log(shopingCard);