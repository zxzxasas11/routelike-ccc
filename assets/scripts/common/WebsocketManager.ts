import { _decorator, Component, Node, TERRAIN_HEIGHT_BASE } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WebsocketManager')
export class WebsocketManager extends Component {

    socket 

    url = "ws://localhost:8989/ws"

    public callback :Function
    
    /**
     *
     */
    constructor() {
        super();
        this.socket = new WebSocket(this.url);
        this.socket.onopen = function (event) {
            console.log("WebSocket连接已建立");
        };
        this.socket.onmessage =  (event)=> {
            console.log("收到WebSocket消息：" + event.data);
            this.callback&& this.callback(JSON.parse(event.data))
        };
        this.socket.onclose = function (event) {
            console.log("WebSocket连接已关闭");
        };
        this.socket.onerror = function (event) {
            console.error("WebSocket连接发生错误");
        };
    }

    send(route:string,params:Object){
        console.log("开始发送")
        this.socket.send(JSON.stringify({route,params}))
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


