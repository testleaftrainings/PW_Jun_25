function fetchData(){

    return new Promise((resolve,reject)=>{
console.log("Fetching Data")

setTimeout(()=>{

    const success=true
    if(success){
        resolve("Data is fetched")
    }else{
        reject("failed to fetch")
    }
},3000)
    })
}
fetchData().then(response=>{
    console.log(response)
}).catch(error =>{
    console.log(error)
})

