export type TActivity = {
    activityID : number; // PK 
    h5pComponentID: string;
    skyclickActivityID: number; //  skyclick activity ID
    teacherID : number;  // skyclick User ID who created the activity
    createdAt : string; // ISO Format datetime "2011-12-19T15:28:46.493Z"
    active : boolean;   // default true
}

export type TAssignation = {
    assinationID: number; // PK
    userID: number; // Skycklick user id
    activityID:  number; // Skyclick ActivityID
    startDate: string //  When this activity was assigned
}

export type TInteraction = {
    interactionID : number; // PK
    userID: number, // Skycklick user id
    activityID:  number; // Skyclick ActivityID
    lastInteraction: string; // ISO Format datetime "2011-12-19T15:28:46.493Z"
    stayTime: number // total seconds for the activity
    aproved : boolean // if the Interaction ( activity to user) was approved
    metadata : string // JSON data
}

export type TSkyclickActivity = {
    skyclickActivityID: number;
    unitID: number;
    courseID: number;
    periodID: number;
    teacherID: number;
    name: string;
    type: string;
    repeat: string;
    customWeakly: string;
    startTime: string;
    duration: number;
    mandatory: boolean;
    isScored: boolean;
    hasConference: boolean;
    hasBoard: boolean;
    hasDocument: boolean;
    roomName: string;
    boardName: string;
    documentName: string
    startDate: string;
    endDate: string;
} 


export type TSkyclickUser = {
    userID : number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    secondName: string;
    lastName: string;
    levelOfEducation: string;
    gender: string;
    yearOfBirth:number;
    goals: string;
    honorCode: boolean;
    createdAt: string;
    // Optional Data
    phone : string;
    // Complementary Data
    profilePictureUrl: string;
    userType: string;
    status: string;
    settingsId : number;
    billingInfoId : number;
    subscriptionId : number;
    locationId: number;
    // Inhereted from Access
    tutorId : number;
    pin: string;
    preferenceId: number;
    bannedMacs :  Array<string>;
    allowedMacs : Array<string>;
    updatedAt: string;
}
