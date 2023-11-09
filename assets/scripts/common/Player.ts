import { _decorator, Component, Node, math, v2, v3, sys } from 'cc';
import { WebsocketManager } from './WebsocketManager';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends WebsocketManager {



    // 最大生命值
    maxHp
    // 当前生命值
    currentHp

    // x轴坐标
    X
    // y轴坐标
    Y

    @property(Node)
    player: Node


    // 移动
    move(event, value) {
        console.log("----", this.player)
        if (this.player) {
            // 移动
            console.log("uid:", Number(sys.localStorage.getItem("uid")))
            this.send("/GameService/Move", { "up": 1, "token": sys.localStorage.getItem("uid") })
            // const position = v3(100,this.player.position.y +100,0)
            // console.log(this.player)
            // this.player.position = position
        }
    }

    start() {
        console.log("=====>", this.player)

    }

    update(deltaTime: number) {

    }
}


