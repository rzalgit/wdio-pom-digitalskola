import Page from "./page";
import {$,expect,browser} from '@wdio/globals'

class LoginPage extends Page {

    get usernameField(){
        return $('//*[@id="user-name"]');
    }
    get passwordField(){
        return $('//*[@id="password"]');
    }
    get loginButton(){
        return $('//*[@id="login-button"]');
    }

    get errorMessage(){
        return$("Epic sadface: Username and password do not match any user in this service")
    }

    async inputUsername(username){
        await this.usernameField.setValue(username)
    }
    
    async inputPassword(password){
        await this.passwordField.setValue(password)
    }
    
    async ClickButton(){
        await this.loginButton.click()
    }

    async login(username,password){
       await this.inputUsername(username)
       await this.inputPassword(password)
       await this.ClickButton()
    }

    async validateWrongPassword(){
        await expect(this.errorMessage).toHaveTest(
            expect.stringContainin("Epic sadface: Username and password do not match any user in this service")
        )
    }

    open(){
        return super.open("")
    }

}

export default new LoginPage();
