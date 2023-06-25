// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
    return (arr.slice(0,2))
}

const returnLastTwoDrivers = (arr) => {
    return (arr.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
}
const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(arr, callback){
    return callback(arr)

}
