export type TH5PActivity = {
    h5pActivityID : number; // PK 
    h5pComponentID: string; // Resource H5P
    skyclickHomeworkID: number; // skyclick homework ID
    skyclickActivityID: number; //  skyclick activity ID
    skyclickTeacherID : number;  // skyclick User ID who created the activity
    createdAt : string; // ISO Format datetime "2011-12-19T15:28:46.493Z"
    active : boolean;   // default true
}

export type TH5PAssignation = {
    h5pAssinationID: number; // PK
    skyclickUserID: number; // Skycklick user id
    skyclickActivityID:  number; // Skyclick ActivityID
    startDate: string //  When this activity was assigned
}

export type TH5PInteraction = {
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
