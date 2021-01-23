import Skyclick from '../src/skyclick';

const client: Skyclick  = new Skyclick("localhost:3000")

// case 0
const args = {
    h5pComponentID: "1234v333",
    skyclickHomeworkID : 123445,
    skyclickActivityID: 444,
    skyclickTeacherID: 1234,
    createdAt: new Date(2012, 0, 1).toDateString(),
    active : true,
}


const newActiviy = client.setH5PActivity(args.h5pComponentID,
                                    args.skyclickHomeworkID,
                                    args.skyclickActivityID,
                                    args.skyclickTeacherID,
                                    args.createdAt,
                                    args.active)

console.log("newActiviy: ", newActiviy)

// case 1
const argsAssing = {
    skyclickUserID: 12344,
    skyclickActivityID: 444,
    startDate: new Date(2012, 0, 1).toDateString()
}

const newActiviyAssignation = client.setH5PAssignation(argsAssing.skyclickUserID,
                                    argsAssing.skyclickActivityID,
                                    argsAssing.startDate)

console.log("newActiviyAssignation: ", newActiviyAssignation)

// case 2 
const argsInteraction = {
    skyclickUserID: 1234,
    skyclickActivityID: 444,
    lastInteraction: new Date(2012, 0, 1).toDateString(),
    stayTime : 12344512,
    aproved: true,
    metadata: JSON.stringify({
        key: "val",
        key2: "val2"
    })
}

const newInteraction = client.setH5PInteraction(argsInteraction.skyclickUserID,
    argsInteraction.skyclickActivityID,
    argsInteraction.lastInteraction,
    argsInteraction.stayTime,
    argsInteraction.aproved,
    argsInteraction.metadata
)

console.log("newInteraction: ", newInteraction)


// case 3
const teacherProfile = client.getTeacherProfile(123)
console.log("teacherProfile: ", teacherProfile)

// case 5
const userProfile = client.getUserProfile(123)
console.log("userProfile: ", userProfile)

// case 6
const activityProfile = client.getActivityProfile(123)
console.log("activityProfile: ", activityProfile)
