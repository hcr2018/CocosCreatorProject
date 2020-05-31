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
        item.on(cc.Node.EventType.TOUCH_START, function (touch,event) {
            var target = event.getCurrentTarget();
                // 把世界坐标转换到当前节点的本地坐标系中
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0,0,s.width,s.height);
                //单击范围判断检测
                if(cc.rectContainsPoint(rect,locationInNode)){
                    cc.log("sprite began...x="+locationInNode.x+",y="+locationInNode.y);
                    cc.log("sprite tag ="+target.tag);
                    target.runAction(cc.scaleBy(0.06,1.06));//点击时放大
                    return true;

                }
                return false;
        });

           
        item.on(cc.Node.EventType.TOUCH_MOVE, function (touch,event) {
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                //移动当前按钮精灵的坐标位置
                target.x+=delta.x;
                target.y+=delta.y;
        });

        item.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.touchEnd(event)
        });

        item.on('touchcancel', function (touch,event) {
            self.touchEnd(event)
        });
     },

    touchEnd(event){
        console.log();
        
        var target = event.getCurrentTarget();
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0,0,s.width,s.height);
        //单击范围判断检测
        if(cc.rectContainsPoint(rect,locationInNode)){
            cc.log("sprite began...x="+locationInNode.x+",y="+locationInNode.y);
            cc.log("sprite tag ="+target.tag);
            target.runAction(cc.scaleTo(0.06,1.0));

        }

    },

    start () {

    },

    // update (dt) {},
});
