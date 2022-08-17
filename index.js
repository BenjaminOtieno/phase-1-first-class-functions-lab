const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function () {
    return drivers.slice(2, 4);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(arg) {
   return function fareMultiplier(price) {
       return (arg * price)  
    }
    
}

const doubleFare = createFareMultiplier(2)
function fareDoubler(price) {
    return doubleFare(price)
}

const triple = createFareMultiplier(3)
function fareTripler(price) {
    return triple(price)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
}