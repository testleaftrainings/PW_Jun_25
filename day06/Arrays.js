let data=['dilip',30,true,25,'testleaf']
//array index will start from '0'
//h.p-> 5
//s.p-> 4 -> 0-4
//find the length of the array
console.log("Length of the array : "+data.length)

//print value 25 based on the index
//data[0]='dilip',data[1]=30,data[2]=true,data[3]=25,data[4]='testleaf' data[5]= ,data[6]=
console.log(data[3])
//undefined
console.log(data[6])

//add values in the array index 7 -> what will value assigned for index 5 & 6c
data[7]=false

console.log(data)
//index 5 & 6 will be empty items
console.log(data[6])

//add value index  of 0 in the array -> unshift
data.unshift('js')
console.log(data)

//add value in the last position in the array -> push
data.push("ts")
console.log(data)

console.log("After adding value :"+data.length)

//delete first and last index
data.shift() 
//shift-> delete the value of '0' index
console.log(data)

data.pop()
//delete value which present in the last index
console.log(data)

//spread syntax -> we connect form one array to another array (...arrayName)
let a1=[2,4,56,78]
let a2=['d','r','t','w',...a1]
//length a2?
console.log("Spread Syntax length :"+a2.length)

//nested array or multiple array
let value=['a','g','t',true,45,[42,'dilip',false]]
console.log("Nested array Length :"+value.length)
console.log(value[5][1])

console.log(data.sort())