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
         //滚动item
         item: cc.Prefab,
         scroll_view:{ //获取scrollview组件
            type:cc.ScrollView,
            default:null,
        },

        PAGE_NUM:cc.Integer,

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.PAGE_NUM = 5;
        this.content = this.scroll_view.content;
        for (let i = 0; i < this.PAGE_NUM*3; i++) {
           var item = cc.instance
            
        }
     },

    

    start () {

    },

    // update (dt) {},
});
