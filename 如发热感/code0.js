gdjs._26410_21629_21517_22330_26223Code = {};
gdjs._26410_21629_21517_22330_26223Code.localVariables = [];
gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDGroundLayer2Objects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDGroundLayer2Objects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects2= [];


gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects1});
gdjs._26410_21629_21517_22330_26223Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects1[i].getBehavior("Text").setText("分数" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


};

gdjs._26410_21629_21517_22330_26223Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGroundLayer2Objects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGroundLayer2Objects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects2.length = 0;

gdjs._26410_21629_21517_22330_26223Code.eventsList0(runtimeScene);
gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewSpriteObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGroundLayer2Objects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGroundLayer2Objects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDNewTextObjects2.length = 0;


return;

}

gdjs['_26410_21629_21517_22330_26223Code'] = gdjs._26410_21629_21517_22330_26223Code;
