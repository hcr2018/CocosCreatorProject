// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //测试item
        item_test: {
          default: null,
          type: cc.Prefab
        },
        //列表
        test_scrollView: {
          default: null,
          type: cc.ScrollView
        },
        //翻页容器
        test_pageView: {
          default: null,
          type: cc.PageView
        }
      },
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
