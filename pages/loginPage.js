import { Selector, t } from "testcafe";

class loginPage{
    constructor(){
        this.user = Selector("#user-name")
        this.password = Selector("#password")
        this.button = Selector('#login-button')
        this.errorMesssage = Selector('h3')
    }

    //variable, informacion_enviada
    async enviarInfo(user, pass){

        if(user!= null){
            await t.typeText(this.user, user)
        }

        if (pass != null){
            await t.typeText(this.password, pass)
        }

        await t.click(this.button)
        

    }

}

export default new loginPage