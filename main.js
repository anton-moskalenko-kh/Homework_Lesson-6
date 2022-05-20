// Задание 1
function getResult(a) {
    return (b) => {
        return a * b;
    }
}

// Задание 2

function getValue(array) {
    let checkNumber = array.filter(item => isFinite(item));
    let value = checkNumber.reduce(function (prev, current) {
        return (prev + current);
    }, 0);
    return value / (checkNumber.length-1);
}
console.log(getValue([5,8,11,"Text", function (){}, ""]))

// Задание 3

function getString(word, symbol) {
    if (Array.isArray(symbol)) {
        for (let item of symbol) {
            if (word.includes(item)) {
                word = getString(word.replaceAll(item, ""), item);
            }
        }
    } else {
        let value = word.replaceAll(symbol, '');
        return value;
    }
    return word;
}




