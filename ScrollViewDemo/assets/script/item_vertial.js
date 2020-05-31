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

        pigshow:cc.Prefab,
        pt_block:cc.Prefab,
        bg: cc.Node,
        m_success:cc.Prefab,

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        window.game= this;
         console.log('1234')
         this.picNodeArr = [];
         this.blockNum = 4;
         var blockWidth = this.bg.width/this.blockNum;
         var blockHeight = this.bg.height/this.blockNum;
         var self = this;
        cc.loader.loadRes('texture/pt',cc.Texture2D,function (err,spriteFrame) {
            this.spriteFrame = spriteFrame;
            console.log(spriteFrame)

            for (let i = 0; i < self.blockNum; i++) {
                self.picNodeArr[i]=[];
                for (let j = 0; j < self.blockNum; j++) {
                    console.log(j)
                    var block = cc.instantiate(self.pt_block);
                    console.log(block)
                    self.bg.addChild(block);
                    block.setPosition(cc.v2(j*blockWidth,-i*blockHeight));
                    block.getComponent('pt_block').initBlock(spriteFrame,cc.v2(j,i));
                    block.mPos = {i,j};
                    self.picNodeArr[i][j] =  block;

                    console.log(block)
                }
            }
            self.shuffBlock();
        });
        
        this.content = this.scroll_view.content;
        for (let i = 0; i < 4; i++) {
           var item = cc.instantiate(this.item);
           this.content.addChild(item)
            this.initTouch(item);
        }
         console.log('123')
     },

    checkSuccess:function(){
        let mCount = 0;
        for (let i = 0; i < this.blockNum; i++) {
            for (let j = 0; j <this.blockNum; j++) {
                var block = this.picNodeArr[i][j];
                var mPos = block.mPos;
                if (mPos.i == i&& mPos.j == j){
                    mCount++;
                }
            }
        }
        console.log('mcount='+mCount)
        if (mCount ==  this.blockNum * this.blockNum){
            return true;
        }else {
            return  false;
        }
    },

    showSuccess:function(){
        cc.loader.loadRes('sound/game_over', cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        });
        //点击节点弹出图片层
        var succLayer = cc.instantiate(this.m_success);
        this.node.addChild(succLayer);
        var shows  = succLayer.getComponent('success');
        // console.log(shows);
        shows.show();
    },

    shuffBlock:function(){
        for (let i = 0; i < this.blockNum; i++) {
            for (let j = 0; j < this.blockNum; j++) {
                var block = this.picNodeArr[i][j];
                var exIndex = {
                    i:parseInt(Math.random()*4),
                    j:parseInt(Math.random()*4),
                }
                var exBlock = this.picNodeArr[exIndex.i][exIndex.j];
                var pos = block.position;
                var exPos = exBlock.position;
                block.setPosition(exPos);
                exBlock.setPosition(pos);
                this.picNodeArr[i][j] =  exBlock;
                this.picNodeArr[exIndex.i][exIndex.j] = block;

            }
        }
    },

     initTouch(item){
        var self = this;
        console.log(item);
        
        item.on('touchstart', function (event) {
            console.log('touchstart');
             
            var target = event.getCurrentTarget();
            // 把世界坐标转换到当前节点的本地坐标系中
           // var locationInNode = target.convertToNodeSpace(event.getLocation());
           // var s = target.getContentSize();
            // target.runAction(cc.scaleBy(0.06,1.06));//点击时放大

            //点击节点弹出图片层
            var pic = cc.instantiate(self.pigshow);
            //   console.log(pic);
            
            self.node.addChild(pic);
            var shows  = pic.getComponent('picshow');
           // console.log(shows);
            var btn = target.getComponent(cc.Button);
            console.log(btn._sprite.spriteFrame);
            shows.show(btn._sprite.spriteFrame);
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
