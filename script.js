onerror = handleError;

function handleError(msg, url, line, col, error) {
    console.log(msg);
    console.log(url);
    console.log('error occured');
    // hide error return true
    return true; 
}


var myStr = 'Sc Welcome to JavaScript';
var newStr = new String('JavaScript String object');
var str = String('string str');

var result = parseInt(prompt('enter a number between 10 and 20'));

    if (result < 10)
        throw 'less than expected';
    else if (result > 20)
        throw new RangeError('out of range');
    else
        alert('value is within range');
        console.log('before catch st');


    console.logg('in catch st');
    console.log(err);

// finally statement will exec if there is an error or not
// if there is an error occured this statement will not exec
console.log('done statement');






