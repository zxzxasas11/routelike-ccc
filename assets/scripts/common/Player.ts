import { _decorator, Component, Node, math, v2, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {



    // 最大生命值
    maxHp
    // 当前生命值
    currentHp

    // x轴坐标
    X 
    // y轴坐标
    Y

    @property(Node)
    player:Node


    // 移动
    move(event,value){
        console.log("----",this.player)
        if(this.player){
            const position = v3(100,this.player.position.y +100,0)
            console.log(this.player)
            this.player.position = position
        }
    }

    start() {
        console.log("=====>",this.player)
        
    }

    update(deltaTime: number) {
        
    }
}


