// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
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
            console.log('completedCount='+completedCount+'totalCount='+totalCount+'item='+item);
            
            let p = completedCount/totalCount;
            this.progress.progress = p;
            this.text.string = parseInt(p * 100) + '%';
            // 打印
            console.log(this.text.string);
        },function(){
            //加载场景
            cc.director.loadScene('game');
        })
    },

    // update (dt) {},
});
