import { _decorator, Component, Node } from 'cc';
import { WebsocketManager } from '../../common/WebsocketManager';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends WebsocketManager {

    constructor() {
        super();
        this.callback = this.message
    }


    message(e) {

    }
    start() {
        console.log("进入主场景")

    }

    update(deltaTime: number) {

    }


}


