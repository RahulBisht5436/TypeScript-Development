console.log(
    `This is the new log: ${new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata"
    })} =========================>>>>>`
);
let  studentName:string ="rahul bisht"
console.log(studentName)

enum day {
    Monday,
    Tuesday,
    Wednesday,
    Thusday,
    Friday,
    Saturday,
    Sunday
}

let newDay:day = day.Sunday
console.log(newDay)


// Here the data inside the array is of Same type
let newArrayData:Array<string> = ["rahul bisht" , "Kamal bisht" , "pareshwari bisht"]
console.log(newArrayData)


// Hetrogenous Array of data : 
let newArrayDataHetro:Array<string | number > = ["rahul bisht" , "Kamal bisht" , "pareshwari bisht" , 123]
console.log(newArrayDataHetro)

//Custom data Type : studentData
type studentData = {
    name:string,
    rollNumber:string,
    contactNumber:string,
    email:string
}


//Array with srudentData Field
let studentArray:Array<studentData>= [
    {
        name:"Rahul Bisht",
        rollNumber:"19009501XXXXX",
        contactNumber:"798XXXXXX",
        email:"Rahulbisht@gmail.com"
    },
    {
        name:"Sheetal Bisht",
        rollNumber:"23123123",
        contactNumber:"79826XXXXX",
        email:"sheetalbisht@gmail.com"
    }
]


enum Gender {
    Male,
    Female,
    TransGender
}

let genderSelection: Gender = Gender.Male
console.log(`This user is a ${Gender[genderSelection]}`)

export = {studentArray};

// console.log(studentArray)