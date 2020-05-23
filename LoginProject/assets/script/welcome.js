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
        m_backGround:cc.Node,
        m_LoadingPrefab:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.m_Loading = cc.instantiate(this.m_LoadingPrefab);
        
         this.m_backGround.addChild(this.m_Loading);
         this.m_Loading.y= -100;
         this.m_Loading=this.m_Loading.getComponent('loading');
         this.m_Loading.setProgress(1);
         

     },

    start () {

    },

     update (dt) {},
});
