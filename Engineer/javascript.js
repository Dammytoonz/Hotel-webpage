// console.log("Hello world")
// prompt("You Are Welcome")
// var, let, const
// const a = "Tunde solomon"
// console.log(a)
// var b = 100
// console.log(b)
// const b ="sade"
// console.log(b)

//var a = 100;
//console.log(a)
//var b = 200;
//console.log(b)
//var c = a * b
//console.log(c)
//var g = "Damilola"
//console.log("My Name Is", g)
//var a = 200
//console.log(a)
//const d = "Taiwo"
//console.log(d)
//const f ="Dammy"
//console.log(f)
//console.log("Motherfuckers")

// var FirstName = "Damilola"
// var LastName = "Odewale"
// console.log(FirstName + ' ' + LastName)


//*BASIC OPERATORS*//
//var currentYear = 2023
//var ageJohn =1995
//var ageMike =1999
//var JohnPresentAge = currentYear - ageJohn
//var MikePresentAge = currentYear - ageMike
//console.log("John is " + JohnPresentAge + " Years old")
//console.log("Mike is " + MikePresentAge + " Years old")

//var a = 5
//var b = 8
//var c = 13
//var d = 14
//var e = 20
//f = a + b + c + d + e 
//console.log(f)
//var g = f / a
//console.log(g)


/// PROMPT IN JAVASCRIPT///

// const a = parseInt(prompt("Input your first number"))
// console.log("My first number is", a)
// const b = parseInt(prompt("Input your second number"))
// console.log("My second number is", b)
// c = a + b
// console.log(c)


// const a = parseInt(prompt("Input your first number"))
// console.log("My first number is", a)
// const b = parseInt(prompt("Input your second number"))
// console.log("My second number is", b)
// const c = parseInt(prompt("Input your second number"))
// console.log("My third number is", c)

// d = a + b + c
// console.log (d)

// const e = parseInt(prompt(" Input total number"))
// console.log("Total number", e)

// g = d / e
// console.log(g)


////ARRAYS IN JS////
// var names = ['john', 'mark', 'jane']
// console.log(names)
// console.log(names.length)
// names[1] = 'Ben'
// console.log(names)


// var John = ['John', 'Smith', 1998 , 'designer', false];
// console.log(John)
// John.push('blue')
// console.log(John)
// John.unshift('Mr.')
// console.log(John)
// John.shift()
// console.log(John)
// John.pop()
// console.log(John)
// John.pop()
// console.log(John)




/****IF AND ELSE STATEMENT******/


// var age = 11
// var firstName = 'John'

// if(age < 13){
//     console.log( firstName + ' is still a boy')
// }

// else if(age >=13 && age<20){
//     console.log(firstName + 'is still a teen')
// }

// else if(age >=20 && age<30){
//     console.log(firstname + 'is still a young man')
// }
// else{
//     console.log(firstName + 'is still an old man')
// }

// var firstName ="Mark"
// var civilStatus ="married"

// if(civilStatus === "married"){
//     console.log(firstName + " is Married")
// }
// else{
//     console.log(firstName + 'will marry soon')
// }


///SWITCH STATEMENTS//



// var job = 'driver'
// switch(job){
//     case "teacher":
//         console.log("teaches kids how to code")
//         break;
//         case "driver":
//             console.log("drives an uber in London")
//             break;
//             case "designer":
//                 console.log(
//                     "designs beautiful websites"
//                 )
//                 break;
//                 default:
//                     console.log("he is an Engineer")
// }

//OBJECTS IN JS

// var John ={
//     firstName: 'Mike',
//     lastName: 'Smith',
//     birthyear: 1990,
//     family :[ 'jane', 'mark','Bob'],
//     job: 'teacher',
//     isMarried:false
// }

// console.log(John.family)
// console.log(John.LastName)

// John.job = 'designer'
// console.log(John)

//**FUNCTIONS IN JS*****//
function calculateAge(year){
    return 2023 - year;
}

var ageJohn = calculateAge(1996)
var ageBimbo = calculateAge(2005)
console.log(ageJohn, ageBimbo)

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year)
    var retirement = 70-age;

    if (retirement > 0){
        console.log(firstName + ' retires in' + retirement + 'years.')
    }

    else{
        console.log(firstName + 'is already retired')
    }
}
yearsUntilRetirement(1980, 'Tunji')