//slices() -> same substring  -> it will accept both +ve & -ve(start from -1)
let companyName='Testleaf'
//(n,n-1)
console.log(companyName.substring(0,9))//estl

//(n-1,n) => (-(5-1),-(2))=> (-4,-2)
//(n-1)=> (-(5-1))=>(-4)
console.log(companyName.slice(-5))
// f=0,a=-1,e=-2,l=-3.t-4,s=-5,e-6,T=-7
//(n,n-1)
console.log(companyName.slice(0,12)) //(0,8)

//replace 
let dataValue="Playwrigt Js"
let replaceValue =dataValue.replace("J",98)
console.log(replaceValue)

let course='Testleaf@123'
console.log(course.replace("e","E"))

//replaceAll
console.log(course.replaceAll(/[a-z A-Z 0-9 @]/g,'a'))

//(/[es]/g,'u')
//
let emp='dilip@123'
console.log(emp.toUpperCase())

let emp1="TESTLEAF"
console.log(emp1.toLowerCase())

//console.log(emp.toLocaleUpperCase())
//includes -> boolean value it check value is present in string
let value1="playwright123"
console.log(value1.includes("123"))
