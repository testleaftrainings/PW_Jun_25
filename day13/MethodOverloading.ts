class ElementAction{
    
    public eleclick(locator:string):void //normal click
    public eleclick(locator:string,val:boolean):void 
    //true -> dd click
    //public eleclick(locator:string,val:boolean,version:number):void

    public eleclick(locator:string,val?:boolean){

        //if(false==true)
        //if(true==true)
        if(val==true){
            console.log("Double click")
        }else{
console.log("Normal click")
        }
    }    
}
const ob=new ElementAction()
ob.eleclick("click")
ob.eleclick("ok",true)