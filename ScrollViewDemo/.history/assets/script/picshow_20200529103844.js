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
        m_pic:cc.Sprite,
        m_animation: cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    // LIFE-CYCLE CALLBACKS:
    show:function(pic){
        this.node.active =true;
       // this.m_animation.play('ScaleToShow');
       console.log('pic=');
       
      // this.m_pic.spriteFrame = pic;
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
