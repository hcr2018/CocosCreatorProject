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
        for (let i = 0; i < 4; i++) {
           var item = cc.instantiate(this.item);
           this.content.addChild(item)
            this.initTouch(item);
        }
     },


     initTouch(item){
        var self = this;
        item.on('touchstart', function (event) {
            self._moveSpeed = 0;
            console.log(self);
            
           // this.item.runAction(cc.scaleBy(0.06,1.06));//点击时放大
           self._startTime = new Date().getTime();
        });

           
        item.on('touchmove', function (event) {
            var movePos = event.getDelta();
            self.itemMoveBy(movePos);
        });

        item.on('touchend', function (event) {
            self.touchEnd(event)
        });

        item.on('touchcancel', function (event) {
            self.touchEnd(event)
        });
     },

    

    start () {

    },

    // update (dt) {},
});
