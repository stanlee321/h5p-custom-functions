"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyclick_1 = __importDefault(require("../src/skyclick"));
const client = new skyclick_1.default("localhost:3000");
// case 0
const args = {
    h5pComponentID: "1234v333",
    skyclickActivityID: 444,
    teacherID: 1234,
    createdAt: new Date(2012, 0, 1).toDateString(),
    active: true,
};
const newActiviy = client.setH5PActivity(args.h5pComponentID, args.skyclickActivityID, args.teacherID, args.createdAt, args.active);
console.log("newActiviy: ", newActiviy);
// case 1
const argsAssing = {
    userID: 12344,
    activityID: 444,
    startDate: new Date(2012, 0, 1).toDateString()
};
const newActiviyAssignation = client.setH5PAssignation(argsAssing.userID, argsAssing.activityID, argsAssing.startDate);
console.log("newActiviyAssignation: ", newActiviyAssignation);
// case 2 
const argsInteraction = {
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
const newInteraction = client.setH5PInteraction(argsInteraction.userID, argsInteraction.activityID, argsInteraction.lastInteraction, argsInteraction.stayTime, argsInteraction.aproved, argsInteraction.metadata);
console.log("newInteraction: ", newInteraction);
// case 3
const teacherProfile = client.getH5PTeacherProfile(123);
console.log("teacherProfile: ", teacherProfile);
// case 5
const userProfile = client.getH5PUserProfile(123);
console.log("userProfile: ", userProfile);
// case 6
const activityProfile = client.getH5PActivityProfile(123);
console.log("activityProfile: ", activityProfile);
//# sourceMappingURL=test_skyclick.js.map