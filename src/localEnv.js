var numberOfSiblings = 0;
var messageMap = {};
exports.messageMap = messageMap;
exports.isValidSibling = function(childId){
    return (0<childId) && (childId <= numberOfSiblings)
};
exports.execute = function(msg){
    return messageMap[msg]();
};
exports.setSiblings = function(sibs){
    numberOfSiblings=sibs;
};
exports.setMessageMap = function(msgMap){
    messageMap=msgMap;
};