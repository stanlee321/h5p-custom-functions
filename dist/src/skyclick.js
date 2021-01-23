"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./tools/random");
class Skyclick {
    constructor(URL) {
        this.SERVER_URL = URL;
    }
    setH5PActivity(h5pComponentID, skyclickActivityID, teacherID, createdAt, active = true) {
        const result = {
            activityID: 123,
            h5pComponentID: h5pComponentID,
            skyclickActivityID: skyclickActivityID,
            teacherID: teacherID,
            createdAt: createdAt,
            active: active
        };
        return result;
    }
    setH5PAssignation(userID, activityID, startDate) {
        const result = {
            assinationID: 765,
            activityID: activityID,
            userID: userID,
            startDate: startDate,
        };
        return result;
    }
    setH5PInteraction(userID, activityID, lastInteraction, stayTime, aproved, metadata) {
        const result = {
            interactionID: 123,
            activityID: activityID,
            aproved: aproved,
            lastInteraction: lastInteraction,
            metadata: metadata,
            stayTime: stayTime,
            userID: userID,
        };
        return result;
    }
    getH5PActivityProfile(skyclickActivityID) {
        const boardName = random_1.generateName();
        const courseID = random_1.getRandomInteger(1, 10000);
        const customWeakly = random_1.generateName();
        const documentName = random_1.generateName();
        const duration = random_1.getRandomInteger(1, 10000);
        const hasBoard = random_1.randomBool();
        const hasConference = random_1.randomBool();
        const hasDocument = random_1.randomBool();
        const isScored = random_1.randomBool();
        const mandatory = random_1.randomBool();
        const name = random_1.generateName();
        const periodID = random_1.getRandomInteger(1, 10000);
        const repeat = random_1.generateName();
        const roomName = random_1.generateName();
        const startDate = random_1.randomDate(new Date(2012, 0, 1), new Date());
        const endDate = random_1.randomDate(startDate, new Date());
        const teacherID = random_1.getRandomInteger(1, 10000);
        const type = random_1.generateName();
        const unitID = random_1.getRandomInteger(1, 10000);
        const result = {
            skyclickActivityID: skyclickActivityID,
            boardName,
            courseID,
            customWeakly,
            documentName,
            duration,
            endDate: endDate.toISOString(),
            hasBoard,
            hasConference,
            hasDocument,
            isScored,
            mandatory,
            name,
            periodID,
            repeat,
            roomName,
            startDate: startDate.toISOString(),
            startTime: startDate.toISOString(),
            teacherID: teacherID,
            type,
            unitID
        };
        return result;
    }
    getH5PTeacherProfile(teacherID) {
        const billingInfoId = random_1.getRandomInteger(1, 10000);
        const email = random_1.randomEmail();
        const createdAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        const firstName = random_1.generateName();
        const gender = random_1.randomGender();
        const goals = random_1.generateName();
        const honorCode = random_1.randomBool();
        const lastName = random_1.generateName();
        const levelOfEducation = random_1.generateName();
        const locationId = random_1.getRandomInteger(1, 10000);
        const password = random_1.generateName();
        const phone = random_1.getRandomInteger(1, 100000).toString();
        const pin = random_1.getRandomInteger(1, 1000).toString();
        const preferenceId = random_1.getRandomInteger(1, 100000).toString();
        const profilePictureUrl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg";
        const secondName = random_1.generateName();
        const settingsId = random_1.getRandomInteger(1, 10000);
        const subscriptionId = random_1.getRandomInteger(1, 10000);
        const tutorId = random_1.getRandomInteger(1, 10000);
        const updatedAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        const username = random_1.generateName() + random_1.getRandomInteger(1, 100).toString();
        const yearOfBirth = random_1.getRandomInteger(1970, 2020);
        const result = {
            allowedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            bannedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            billingInfoId: billingInfoId,
            email,
            createdAt: createdAt.toISOString(),
            firstName,
            gender,
            goals,
            honorCode,
            lastName,
            levelOfEducation,
            locationId,
            password,
            phone,
            pin,
            preferenceId,
            profilePictureUrl,
            secondName,
            settingsId,
            status: "ACTIVE",
            subscriptionId,
            tutorId,
            updatedAt: updatedAt.toISOString(),
            userID: teacherID,
            userType: "TEACHER",
            username,
            yearOfBirth: yearOfBirth
        };
        return result;
    }
    getH5PUserProfile(userID) {
        const billingInfoId = random_1.getRandomInteger(1, 10000);
        const email = random_1.randomEmail();
        const createdAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        const firstName = random_1.generateName();
        const gender = random_1.randomGender();
        const goals = random_1.generateName();
        const honorCode = random_1.randomBool();
        const lastName = random_1.generateName();
        const levelOfEducation = random_1.generateName();
        const locationId = random_1.getRandomInteger(1, 10000);
        const password = random_1.generateName();
        const phone = random_1.getRandomInteger(1, 100000).toString();
        const pin = random_1.getRandomInteger(1, 1000).toString();
        const preferenceId = random_1.getRandomInteger(1, 100000).toString();
        const profilePictureUrl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg";
        const secondName = random_1.generateName();
        const settingsId = random_1.getRandomInteger(1, 10000);
        const subscriptionId = random_1.getRandomInteger(1, 10000);
        const tutorId = random_1.getRandomInteger(1, 10000);
        const updatedAt = random_1.randomDate(new Date(2012, 0, 1), new Date());
        const username = random_1.generateName() + random_1.getRandomInteger(1, 100).toString();
        const yearOfBirth = random_1.getRandomInteger(1970, 2020);
        const result = {
            allowedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            bannedMacs: [random_1.getRandomString(15), random_1.getRandomString(15), random_1.getRandomString(15)],
            billingInfoId: billingInfoId,
            email,
            createdAt: createdAt.toISOString(),
            firstName,
            gender,
            goals,
            honorCode,
            lastName,
            levelOfEducation,
            locationId,
            password,
            phone,
            pin,
            preferenceId,
            profilePictureUrl,
            secondName,
            settingsId,
            status: "ACTIVE",
            subscriptionId,
            tutorId,
            updatedAt: updatedAt.toISOString(),
            userID: userID,
            userType: "STUDENT",
            username,
            yearOfBirth: yearOfBirth
        };
        return result;
    }
}
exports.default = Skyclick;
// let greeter: Skyclick = new Skyclick("world");
//# sourceMappingURL=skyclick.js.map