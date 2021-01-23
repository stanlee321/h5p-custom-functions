"use strict";
exports.__esModule = true;
var random_1 = require("./tools/random");
var Skyclick = /** @class */ (function () {
    function Skyclick(URL) {
        this.SERVER_URL = URL;
    }
    Skyclick.prototype.setActivity = function (h5pComponentID, skyclickActivityID, teacherID, createdAt, active) {
        if (active === void 0) { active = true; }
        var result = {
            activityID: 123,
            h5pComponentID: h5pComponentID,
            skyclickActivityID: skyclickActivityID,
            teacherID: teacherID,
            createdAt: createdAt,
            active: active
        };
        return result;
    };
    Skyclick.prototype.setAssignation = function (userID, activityID, startDate) {
        var result = {
            assinationID: 765,
            activityID: activityID,
            userID: userID,
            startDate: startDate
        };
        return result;
    };
    Skyclick.prototype.setInteraction = function (userID, activityID, lastInteraction, stayTime, aproved, metadata) {
        var result = {
            interactionID: 123,
            activityID: activityID,
            aproved: aproved,
            lastInteraction: lastInteraction,
            metadata: metadata,
            stayTime: stayTime,
            userID: userID
        };
        return result;
    };
    Skyclick.prototype.getActivityProfile = function (skyclickActivityID) {
        var boardName = random_1.generateName();
        var courseID = random_1.getRandomInteger(1, 10000);
        var customWeakly = random_1.generateName();
        var documentName = random_1.generateName();
        var duration = random_1.getRandomInteger(1, 10000);
        var hasBoard = random_1.randomBool();
        var hasConference = random_1.randomBool();
        var hasDocument = random_1.randomBool();
        var isScored = random_1.randomBool();
        var mandatory = random_1.randomBool();
        var name = random_1.generateName();
        var periodID = random_1.getRandomInteger(1, 10000);
        var repeat = random_1.generateName();
        var roomName = random_1.generateName();
        var startDate = random_1.randomDate(new Date(2012, 0, 1), new Date());
        var endDate = random_1.randomDate(startDate, new Date());
        var teacherID = random_1.getRandomInteger(1, 10000);
        var type = random_1.generateName();
        var unitID = random_1.getRandomInteger(1, 10000);
        var result = {
            skyclickActivityID: skyclickActivityID,
            boardName: boardName,
            courseID: courseID,
            customWeakly: customWeakly,
            documentName: documentName,
            duration: duration,
            endDate: endDate.toISOString(),
            hasBoard: hasBoard,
            hasConference: hasConference,
            hasDocument: hasDocument,
            isScored: isScored,
            mandatory: mandatory,
            name: name,
            periodID: periodID,
            repeat: repeat,
            roomName: roomName,
            startDate: startDate.toISOString(),
            startTime: startDate.toISOString(),
            teacherID: teacherID,
            type: type,
            unitID: unitID
        };
        return result;
    };
    Skyclick.prototype.getTeacherProfile = function (teacherID) {
        var billingInfoId = random_1.getRandomInteger(1, 10000);
        var email = random_1.randomEmail();
        var createdAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        var firstName = random_1.generateName();
        var gender = random_1.randomGender();
        var goals = random_1.generateName();
        var honorCode = random_1.randomBool();
        var lastName = random_1.generateName();
        var levelOfEducation = random_1.generateName();
        var locationId = random_1.getRandomInteger(1, 10000);
        var password = random_1.generateName();
        var phone = random_1.getRandomInteger(1, 100000).toString();
        var pin = random_1.getRandomInteger(1, 1000).toString();
        var preferenceId = random_1.getRandomInteger(1, 100000).toString();
        var profilePictureUrl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg";
        var secondName = random_1.generateName();
        var settingsId = random_1.getRandomInteger(1, 10000);
        var subscriptionId = random_1.getRandomInteger(1, 10000);
        var tutorId = random_1.getRandomInteger(1, 10000);
        var updatedAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        var username = random_1.generateName() + random_1.getRandomInteger(1, 100).toString();
        var yearOfBirth = random_1.getRandomInteger(1970, 2020);
        var result = {
            allowedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            bannedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            billingInfoId: billingInfoId,
            email: email,
            createdAt: createdAt.toISOString(),
            firstName: firstName,
            gender: gender,
            goals: goals,
            honorCode: honorCode,
            lastName: lastName,
            levelOfEducation: levelOfEducation,
            locationId: locationId,
            password: password,
            phone: phone,
            pin: pin,
            preferenceId: preferenceId,
            profilePictureUrl: profilePictureUrl,
            secondName: secondName,
            settingsId: settingsId,
            status: "ACTIVE",
            subscriptionId: subscriptionId,
            tutorId: tutorId,
            updatedAt: updatedAt.toISOString(),
            userID: teacherID,
            userType: "TEACHER",
            username: username,
            yearOfBirth: yearOfBirth
        };
        return result;
    };
    Skyclick.prototype.getUserProfile = function (userID) {
        var billingInfoId = random_1.getRandomInteger(1, 10000);
        var email = random_1.randomEmail();
        var createdAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        var firstName = random_1.generateName();
        var gender = random_1.randomGender();
        var goals = random_1.generateName();
        var honorCode = random_1.randomBool();
        var lastName = random_1.generateName();
        var levelOfEducation = random_1.generateName();
        var locationId = random_1.getRandomInteger(1, 10000);
        var password = random_1.generateName();
        var phone = random_1.getRandomInteger(1, 100000).toString();
        var pin = random_1.getRandomInteger(1, 1000).toString();
        var preferenceId = random_1.getRandomInteger(1, 100000).toString();
        var profilePictureUrl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg";
        var secondName = random_1.generateName();
        var settingsId = random_1.getRandomInteger(1, 10000);
        var subscriptionId = random_1.getRandomInteger(1, 10000);
        var tutorId = random_1.getRandomInteger(1, 10000);
        var updatedAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        var username = random_1.generateName() + random_1.getRandomInteger(1, 100).toString();
        var yearOfBirth = random_1.getRandomInteger(1970, 2020);
        var result = {
            allowedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            bannedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            billingInfoId: billingInfoId,
            email: email,
            createdAt: createdAt.toISOString(),
            firstName: firstName,
            gender: gender,
            goals: goals,
            honorCode: honorCode,
            lastName: lastName,
            levelOfEducation: levelOfEducation,
            locationId: locationId,
            password: password,
            phone: phone,
            pin: pin,
            preferenceId: preferenceId,
            profilePictureUrl: profilePictureUrl,
            secondName: secondName,
            settingsId: settingsId,
            status: "ACTIVE",
            subscriptionId: subscriptionId,
            tutorId: tutorId,
            updatedAt: updatedAt.toISOString(),
            userID: userID,
            userType: "STUDENT",
            username: username,
            yearOfBirth: yearOfBirth
        };
        return result;
    };
    return Skyclick;
}());
exports["default"] = Skyclick;
// let greeter: Skyclick = new Skyclick("world");
