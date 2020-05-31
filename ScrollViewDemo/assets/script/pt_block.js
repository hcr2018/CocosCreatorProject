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


    },

    initBlock:function(picTexture,position){
        console.log(position)
        let sprite = this.node.getComponent(cc.Sprite);
        let width = this.node.width;
        let height = this.node.height;
        let frame = new cc.SpriteFrame(picTexture,cc.rect(position.x*width,position.y*height,width,height));
        sprite.spriteFrame = frame;
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.node.on('touchstart',this.touchstart,this);
        this.node.on('touchmove',this.touchmove,this);
        this.node.on('touchend',this.touchend,this);
        this.node.on('touchcacel',this.touchend,this);
     },

    touchstart:function(event){
        this.node.opacity = 128;
        this.startPos = this.node.position;
        this.node.zIndex = 1;
    },
    touchmove:function(event){
        let dalta = event.getDelta();
        this.node.x += dalta.x;
        this.node.y += dalta.y;

    },
    touchend:function(event){
        this.node.opacity = 255;
        this.node.zIndex = 0;
        let height = this.node.height;
        let width= this.node.width;
        var pos = this.getPos2Move(this.node.position)
        console.log('pos='+pos.i+','+pos.j);
        let tempNode = window.game.picNodeArr[pos.i][pos.j];
        if(tempNode){
            this.node.setPosition(pos.j*width,-pos.i*height);
            tempNode.setPosition(this.startPos);
            var stPos = this.getPos2Move(this.startPos);
            console.log('stPos='+stPos.i+','+stPos.j);
            window.game.picNodeArr[stPos.i][stPos.j] = tempNode;
            window.game.picNodeArr[pos.i][pos.j] = this.node;
            var succ = window.game.checkSuccess();
            if (succ){
                console.log('拼图成功');
                window.game.showSuccess();
            }

        }else {
            this.node.setPosition(this.startPos);
        }
    },



    getPos2Move:function(pos){
        let height = this.node.height;
        let width= this.node.width;
        let i = Math.abs(parseInt(pos.y/height));
        let j = Math.abs(parseInt(pos.x/width));
        console.log(i+','+j);

       /* if( Math.abs(pos.y-window.game.picNodeArr[i][j].position.y)>100){
            i = i+1;
        }
        console.log('新的i,j'+i+'....'+j)
        if( Math.abs(pos.x-window.game.picNodeArr[i][j].position.x)>100){
            j = j+1;
        }*/
        console.log('getPos2Move='+pos.y+','+pos.x+','+height+','+width);
        return {i,j}
    },

    start () {

    },

    // update (dt) {},
});
