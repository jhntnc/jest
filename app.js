

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}


function fromEuroToDollar (a,b){
    return a * 1.2
}

function fromDollarToYen(a,b){
    return a / 1.2 * 127.9
}

function fromYenToPound(a,b){
    return a / 127.9 * 0.8
}


module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};