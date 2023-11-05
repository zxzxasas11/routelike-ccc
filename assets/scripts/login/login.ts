import { _decorator, Component, Node, EditBox, director, sys } from 'cc';
import { WebsocketManager } from '../common/WebsocketManager';
const { ccclass, property } = _decorator;

@ccclass('login')
export class main extends WebsocketManager {

    @property(EditBox)
    UsernameNode :EditBox

    @property(EditBox)
    Password :EditBox

    /**
     *
     */
    constructor() {
        super();
        this.callback = this.message
    }


    message(e){
        if(e.success){
            console.log("登录成功")
            sys.localStorage.setItem("username",this.UsernameNode.string)
            sys.localStorage.setItem("password",this.Password.string)
            setTimeout(() => {
                director.loadScene("main")
            }, 1000);
        }
    }
    /**
     * 登录方法
     */
    login(){
        console.log("main")
        const username = this.UsernameNode.string
        const password =this.Password.string
        console.log(username,password)

        this.send("/GameService/Login",{username,password})
        
    }
    start() {
        console.log(1)
        
    }

    update(deltaTime: number) {
        
    }
}


