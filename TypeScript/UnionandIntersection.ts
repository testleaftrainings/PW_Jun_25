//union -> OR condition 

//type alias-> creating custom type of data
//syntax -> type typeName=definition
type statusCode=number
let  code:statusCode=50

//union(|)
type apiStatusCode=string|number
let status1:apiStatusCode='OK'

let browserName:string|null
browserName='chrome'
browserName=null

//intersection(&) (both value exp)
//let dataValue:number&string
//dataValue=49&78

//intersection 
type admin={
adminname:string
adminId:number
}

type customer={
    cusname:string
    cusId?:number
}

type db=admin&customer
let value:db={
   adminname:"Testleaf",
    adminId:57,
   // cusId:78,
    cusname:'Dilip',
}

//optional = value 
//cusID? => '?' -> optional value 

//optional parameter should not given in-between, it should be last parameter
function empdetails(empname:string,empid:number,empstatus?:boolean){

    console.log(empname+" "+empid+" "+empstatus)
}

empdetails("Dilip",98)
empdetails("Testleaf",67,true)