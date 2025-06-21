var comName //undefined
console.log(comName)
comName='testleaf' //allow us to reassignment
console.log(comName)

var empdetails=23
var empdetails=true //allow us to redeclaration
console.log(typeof empdetails)

//var it allow us to Redeclaration and Reassignment


let browserName='chrome'
browserName='edge' //allow us to Reassignment
console.log(browserName)
//let browserName=true //its not allow us to redecalation

//let will allow only reassignment , it will not allow redeclaration


const pi=3.14  //final value
pi=true //TypeError -> reassignment is not possible
console.log(pi)
//const pi=90// redeclaration is not possible

//const it will not allow reassign and redeclare