// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen = (valueInEuro * oneEuroIs.USD) * oneEuroIs.JPY;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = (valueInEuro * oneEuroIs.JPY) * oneEuroIs.GBP;
    // Retornamos el valor en dólares
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }