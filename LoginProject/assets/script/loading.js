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
        m_progress:cc.Node,
        m_progressMax:{
            type:cc.Integer,
            default:800,
        },
        m_Speed:{
            type:cc.Integer,
            default:100,
        },
    },

    setProgress:function(pro){
        if(pro >1 || pro<0){
            return;
        }
        this.setWidth = this.m_progressMax*pro;
     //   this.m_progress.width =this.setWidth;
        cc.log(this.m_progress.width);
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.m_progress.width =0;
     },

    start () {

    },

     update (dt) {
         if(this.m_progress.width < this.setWidth){
            this.m_progress.width+=dt*this.m_Speed;
         }
     },
});
