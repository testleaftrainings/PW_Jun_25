let username='Dilip 20@testleaf.com'

//find length of the String
console.log("Length of the String : "+username.length)

let companyName=`TestLeaf`

//print single character from string 'L'
console.log("Print 4th index Character :"+companyName.charAt(4))//-> chartAt index will start from '0'

//poistion of the character -s
console.log("Print position of the character :"+companyName.indexOf('e')) //-> first coccurence index

console.log("Last character Position :"+companyName.lastIndexOf('e'))

let price=`rs1500`
//template literal-> ${price}
console.log(`This price of product's is ${price}`)

let user='Dilip'
let name1="Kumar"
console.log(user.concat(name1))


let  tool='playwright'
console.log(`${tool} with javascrpit we can use automation`)

//substring -> print value based on index 
let data="playwright"
//4 to 7 -> weig
//start index 4 - end index 7-1 => 4 to 6
console.log(data.substring(2,6))
console.log(data.substring(2)) //start index

//
let input="Testleaf"
//output =>faeltseT
//f,a,e,l,t,s,e,T
let reversed=""
for(let i=input.length-1;i>=0;i--){ //8=> 7 => 0 to 7
    reversed=reversed+input[i]
    
}
console.log(reversed)


let val="dilip"
//d,i,l,i,p-> p,i,l,i,d-> pilid
let reverse=val.split('').reverse().join('')
console.log(reverse)

let dataValue="Welcome to TestLeaf for Playwright Program"
//Welcome
//to 
//Testleaf
console.log(dataValue.split(' '))
let splitValue=dataValue.split(' ')

for(let i=0;i<splitValue.length;i++){
    console.log(splitValue[i])
}