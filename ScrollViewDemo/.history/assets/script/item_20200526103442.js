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
         item: {
            default: [],
            type: [cc.Node],
        },
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        for (let i = 0; i < this.item.length; i++) {
            this._maxSize.width += this.item[i].width;
            this._maxSize.height += this.item[i].height;
            this._maxSize.width += this.itemOffset;
            this._maxSize.height += this.itemOffset;
            this.initTouch(this.item[i]);
        }
     },

    start () {

    },

    // update (dt) {},
});
