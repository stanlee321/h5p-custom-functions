"use strict";
exports.__esModule = true;
var skyclick_1 = require("../src/skyclick");
var client = new skyclick_1["default"]("localhost:3000");
// case 0
var args = {
    h5pComponentID: "1234v333",
    skyclickHomeworkID: 123445,
    skyclickActivityID: 444,
    skyclickTeacherID: 1234,
    createdAt: new Date(2012, 0, 1).toDateString(),
    active: true
};
var newActiviy = client.setH5PActivity(args.h5pComponentID, args.skyclickHomeworkID, args.skyclickActivityID, args.skyclickTeacherID, args.createdAt, args.active);
console.log("newActiviy: ", newActiviy);
// case 1
var argsAssing = {
    skyclickUserID: 12344,
    skyclickActivityID: 444,
    startDate: new Date(2012, 0, 1).toDateString()
};
var newActiviyAssignation = client.setH5PAssignation(argsAssing.skyclickUserID, argsAssing.skyclickActivityID, argsAssing.startDate);
console.log("newActiviyAssignation: ", newActiviyAssignation);
// case 2 
var argsInteraction = {
    userID: 1234,
    activityID: 444,
    lastInteraction: new Date(2012, 0, 1).toDateString(),
    stayTime: 12344512,
    aproved: true,
    metadata: JSON.stringify({
        key: "val",
        key2: "val2"
    })
};
var newInteraction = client.setH5PInteraction(argsInteraction.userID, argsInteraction.activityID, argsInteraction.lastInteraction, argsInteraction.stayTime, argsInteraction.aproved, argsInteraction.metadata);
console.log("newInteraction: ", newInteraction);
// case 3
var teacherProfile = client.getTeacherProfile(123);
console.log("teacherProfile: ", teacherProfile);
// case 5
var userProfile = client.getUserProfile(123);
console.log("userProfile: ", userProfile);
// case 6
var activityProfile = client.getActivityProfile(123);
console.log("activityProfile: ", activityProfile);
