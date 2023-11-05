import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

// 敌人类
@ccclass('Enemy')
export class Enemy extends Component {
    

    // 最大生命值
    maxHp
    // 当前生命值
    currentHp

    // x轴坐标
    X 
    // y轴坐标
    Y


    

    
    start() {

    }

    update(deltaTime: number) {
        
    }
}


