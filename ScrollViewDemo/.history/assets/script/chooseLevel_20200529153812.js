// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
        m_pictu:cc.Sprite,
        m_animation: cc.Animation,
        m_title:cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    
    /**
     * 显示预制层-关卡确定页
     * @param {sprite类型图片} pic 
     */
    show:function(pic){
        this.node.active =true;
       // this.m_animation.play('ScaleToShow');
       console.log('pic='+pic);
       
       this.m_pictu.spriteFrame = pic;
    },

    /**
     * 隐藏预制层
     */
    hide:function(){
        this.node.active=false;
     //  this.m_animation.play('ScaleToHide');
    },

    clickConfirm:function(){
        cc.loader.loadRes('sound')
        var title = this.m_title.string;
        cc.log('开始游戏'+title);
    },
    
     /**
      * 点击关闭
      */
    clickClose:function(){
        this.hide();
    },

    onLoad () {
        //回调函数，播放完动画之后设置node隐藏
       /*  this.m_animation.scaleToHidePlayEnd = function(){
           this.node.active=false;
        }.bind(this); */
    },

    start () {

    },

    // update (dt) {},
});
