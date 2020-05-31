// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
         //滚动item
         item: cc.Prefab,
         scroll_view:{ //获取scrollview组件
            type:cc.ScrollView,
            default:null,
        },

        pictushow:cc.Prefab,

        data:null,//保存要传递给下一场景的数据

    },

    getData:function(){

        return this.data
    },
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
       
        this.content = this.scroll_view.content;
        for (let i = 0; i < 4; i++) {
           var item = cc.instantiate(this.item);
           this.content.addChild(item)
            this.initTouch(item);
        }
     },


     initTouch(item){
        var self = this;
        console.log(item);
        
        item.on('touchstart', function (event) {
            console.log('touchstart');
            
          
            
            var target = event.getCurrentTarget();
            console.log(target);
                // 把世界坐标转换到当前节点的本地坐标系中
                var locationInNode = target.convertToNodeSpace(event.getLocation());
                var s = target.getContentSize();
               // target.runAction(cc.scaleBy(0.06,1.06));//点击时放大

               var level = cc.instantiate(self.pictushow);
               console.log(level);
               
               self.node.addChild(level);
                var shows  = level.getComponent('chooseLevel');
                // console.log(shows);

                var sprite = target.children[1].getComponent(cc.Sprite);
                 console.log(target.children[1].getComponent(cc.Sprite));
                  shows.show(sprite.spriteFrame);
        });

           
        item.on('touchmove', function (event) {
                var target = event.getCurrentTarget();
                var delta = event.getDelta();
                //移动当前按钮精灵的坐标位置
                target.x+=delta.x;
                target.y+=delta.y;
               
                
        });

        item.on('touchend', function (event) {
            self.touchEnd(event)
        });

        item.on('touchcancel', function (event) {
            self.touchEnd(event)
        });
     },

    touchEnd(event){
        console.log('event='+event.getLocation());
        
        var target = event.getCurrentTarget();
        var locationInNode = target.convertToNodeSpace(event.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0,0,s.width,s.height);
        target.runAction(cc.scaleTo(0.06,1.0));
       

    },

    start () {

    },

    // update (dt) {},
});
