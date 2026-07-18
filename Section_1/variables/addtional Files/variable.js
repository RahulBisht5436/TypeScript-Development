"use strict";
console.log(`This is the new log: ${new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
})} =========================>>>>>`);
let studentName = "rahul bisht";
console.log(studentName);
var day;
(function (day) {
    day[day["Monday"] = 0] = "Monday";
    day[day["Tuesday"] = 1] = "Tuesday";
    day[day["Wednesday"] = 2] = "Wednesday";
    day[day["Thusday"] = 3] = "Thusday";
    day[day["Friday"] = 4] = "Friday";
    day[day["Saturday"] = 5] = "Saturday";
    day[day["Sunday"] = 6] = "Sunday";
})(day || (day = {}));
let newDay = day.Sunday;
console.log(newDay);
// Here the data inside the array is of Same type
let newArrayData = ["rahul bisht", "Kamal bisht", "pareshwari bisht"];
console.log(newArrayData);
// Hetrogenous Array of data : 
let newArrayDataHetro = ["rahul bisht", "Kamal bisht", "pareshwari bisht", 123];
console.log(newArrayDataHetro);
//Array with srudentData Field
let studentArray = [
    {
        name: "Rahul Bisht",
        rollNumber: "19009501XXXXX",
        contactNumber: "798XXXXXX",
        email: "Rahulbisht@gmail.com"
    },
    {
        name: "Sheetal Bisht",
        rollNumber: "23123123",
        contactNumber: "79826XXXXX",
        email: "sheetalbisht@gmail.com"
    }
];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["TransGender"] = 2] = "TransGender";
})(Gender || (Gender = {}));
let genderSelection = Gender.Male;
console.log(`This user is a ${Gender[genderSelection]}`);
module.exports = { studentArray };
// console.log(studentArray)
//# sourceMappingURL=variable.js.map