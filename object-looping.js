/* object Student */
var student = {
    roll: 116491,
    name: 'Md. Sadikul Islam',
    class: 11,
    shift: '2nd',
    technology: 'Computer'
}

const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

// uses for loop 
for ( i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = student[propertyName];
    // console.log(propertyName, propertyValue);

}

// uses for in loop
for ( propertyName in student){
    const value = student[propertyName];
    console.log(propertyName, value);
}
