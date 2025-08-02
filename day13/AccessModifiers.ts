// public  -> default modifier (even if not mentioned)
//anywhere inside, outside or subclass

// private -> can be accessed only inside the class
// protected -> inside  same class and inside the subclass

 export class login{

    public user:string='dilip'
    private pass:string='crmsfa'
    protected logval:number=67

    protected log(){
      console.log("pro")
    }
    public errorLog(){
        console.log("Public Value")
    }
    public getdata(){
        console.log(`${this.user} ${this.pass} ${this.logval}`)
    }
}

const val=new login()
val.errorLog()
val.getdata()
console.log(val.user)