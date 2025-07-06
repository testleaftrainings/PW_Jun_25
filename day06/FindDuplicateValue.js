let value=[34,56,21,23,45,34,65,45]
//45,34
//loop and compare value
for(let i=0;i<value.length;i++){ //outer loop

    for(let j=i+1;j<value.length;j++){ //inner loop

        if(value[i]===value[j]){
            console.log(`duplicate values is : ${value[j]}`)
        }
    }

}