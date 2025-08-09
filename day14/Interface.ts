interface data{

    //100% abstract method
   //only unimplemented method
    click():void
    clear():void
    fill():void
    loactor():void

}

//connect class to class -> extends
//connect abstract class and class -> extends
//connect class and interface -> implements

class baseTest implements data{
    loactor(): void {
        console.log("Locator")
    }
    click(): void {
        console.log("Click")
    }
    clear(): void {
       console.log("Clear")
    }
    fill(): void {
     console.log("Fill")   
    }
    
}
const bt=new baseTest()
bt.clear()
bt.click()
bt.fill()
bt.loactor()