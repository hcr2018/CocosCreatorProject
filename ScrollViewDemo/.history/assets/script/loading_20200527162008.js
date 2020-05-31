// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        // 声明进度条
        progress: cc.ProgressBar,
        // 进度显示文本
        text: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // 先设置0%
        this.text.string = '0' + '%';
        this.progress.progress = 0;
        //// 预加载，第一个是场景名，第二个callback中3个参数，第三个callback是完成回调
        cc.director.preloadScene('game',(completedCount,totalCount,item)=>{
            let p = completedCount/totalCount;
            this.progress.progress = p;
            this.text.string = parseInt(p * 100) + '%';
            // 打印观察
            console.log(this.text.string);
————————————————
版权声明：本文为CSDN博主「KUOKUO众享」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/kuokuo666/article/details/89300187
        })
    },

    // update (dt) {},
});
