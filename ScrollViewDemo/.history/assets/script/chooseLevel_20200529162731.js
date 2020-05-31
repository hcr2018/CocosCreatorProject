// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       
        m_pictu:cc.Sprite,
        m_animation: cc.Animation,
        m_title:cc.Label,
        m_comfirm:cc.Button,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    
    /**
     * 显示预制层-关卡确定页
     * @param {sprite类型图片} pic 
     */
    show:function(pic){
        this.node.active =true;
       // this.m_animation.play('ScaleToShow');
       console.log('pic='+pic);
       
       this.m_pictu.spriteFrame = pic;
    },

    /**
     * 隐藏预制层
     */
    hide:function(){
        this.node.active=false;
     //  this.m_animation.play('ScaleToHide');
    },


    clickConfirm:function(){
      /*   cc.loader.loadRes('sound/pick', cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        }); */
        var title = this.m_title.string;
        cc.log('开始游戏'+title);
        this.clickClose();
    },
    
     /**
      * 点击关闭
      */
    clickClose:function(){
        this.hide();
    },

    onLoad () {
        //回调函数，播放完动画之后设置node隐藏
       /*  this.m_animation.scaleToHidePlayEnd = function(){
           this.node.active=false;
        }.bind(this); */

        /**
         * 可通过node.on()监听方式设置按钮点击事件，也可以在编辑器直接设置Click Events方法
         * @param {} event 
         */
        function onTouchDown (event) {
           
          //设置按钮点击音效，声音资源采用动态加载的方式时一定得放在resources文件下，否则无法找到
          cc.loader.loadRes('sound/drop', cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        });

           
        };
        function onTouchUp (event) {
            var title = this.m_title.string;
             cc.log('开始游戏'+title);
            this.clickClose();
        };

        this.m_comfirm.node.on('touchstart', onTouchDown, this);
        this.m_comfirm.node.on('touchend', onTouchUp, this);
        this.m_comfirm.node.on('touchcancel', onTouchUp, this);

    },

    start () {

    },

    // update (dt) {},
});
