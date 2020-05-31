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

    hide:function(){
        this.node.active=false;
     //  this.m_animation.play('ScaleToHide');
    },
     onLoad () {
         //回调函数，播放完动画之后设置node隐藏
        /*  this.m_animation.scaleToHidePlayEnd = function(){
            this.node.active=false;
         }.bind(this); */
     },

    clickClose:function(){
        this.hide();
    },
    start () {

    },

    // update (dt) {},
});
