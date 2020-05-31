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
      
     },

     initTouch(item){
        this.node.on('touchstart', function (event) {
            this._moveSpeed = 0;
            console.log(this);
            
            this.item.runAction(cc.scaleBy(0.06,1.06));//点击时放大
            this._startTime = new Date().getTime();
        }.bind(this));

        this.node.on('touchmove', function (event) {
            var movePos = event.getDelta();
            this.itemMoveBy(movePos);
        }.bind(this));

        this.node.on('touchend', function (event) {
            this.touchEnd(event)
        }.bind(this));

        this.node.on('touchcancel', function (event) {
            this.touchEnd(event)
        }.bind(this));
    },

    start () {

    },

    // update (dt) {},
});
