var empStatus
console.log(empStatus) //undefined
empStatus=true
console.log(empStatus) //true
//Hoisting is working for var

 console.log(value)
 let value=40//ReferenceError
//Temporal Dead Zone ->TDZ

console.log(data)
const data='js' //refrerencesError
//TDZ -> cannot access 'data' before Initialization