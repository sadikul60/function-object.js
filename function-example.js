function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignmentMarks1 = 57;
const assignmentMarks2 = 60;
const assignmentMarks3 = 60;

var myAverage = getAverage(assignmentMarks1, assignmentMarks2, assignmentMarks3);
console.log('My average so far:', myAverage);



// Adding two numbers

/* function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(22, 18);
const result2 = add(17, 23);
const finalResult = add(result1, result2);
console.log('Final Result:', finalResult) */


function add( a, b, c){
    const sum = a + b +c;
    return sum;
}

var total = add(7, 10, 2);
console.log(total);
