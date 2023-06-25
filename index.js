// Code your solution in this file!

const returnFirstTwoDrivers = ([driver1, driver2, driver3]) => {
    return ([driver1, driver2])
}

const returnLastTwoDrivers = ([driver1, driver2, driver3, driver4]) => {
    return ([driver3, driver4])
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

