
// uses if and if else and else
/* var color= 'pink';

if ( color == 'red'){
    console.log('You are a red friend');
}
else if ( color == 'green'){
    console.log('You are a green friend');
}
else if ( color == 'blue'){
    console.log('You are a blue friend');
}
else if ( color == 'white'){
    console.log('You are a white friend');
}
else if ( color == 'yellow'){
    console.log('You are a yellow friend');
}
else {
    console.log('You are a not friend');
} */


// uses switch
var color = 'red';
switch(color){
    case 'red':
        console.log('You are red friend');
        break;
    case 'blue':
        console.log('You are blue friend');
        break;
    case 'green':
        console.log('You are green friend');
        break;
    case 'yellow':
        console.log('You are yellow friend');
        break;
    case 'white':
        console.log('You are white friend');
        break;
        default:
            console.log('You are not a friend');
}