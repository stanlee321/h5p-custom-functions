
import { TActivity, TAssignation, TInteraction, TSkyclickActivity, TSkyclickUser } from './types';
import { generateName, 
        getRandomInteger, 
        randomDate, 
        randomBool,
        getRandomString,
        randomEmail,
        randomGender
    } from './tools/random';

class Skyclick {
    SERVER_URL: string;
  
    constructor(URL: string) {
      this.SERVER_URL = URL;
    }
  
    setH5PActivity(h5pComponentID: string, 
                    skyclickActivityID: number,
                    teacherID: number,
                    createdAt: string,
                    active:boolean = true
                    ): TActivity {

        const result: TActivity = {
            activityID: 123,
            h5pComponentID: h5pComponentID,
            skyclickActivityID: skyclickActivityID,
            teacherID: teacherID,
            createdAt: createdAt,
            active: active
        }

        return result

    }

    setH5PAssignation(userID: number, activityID: number, startDate: string): TAssignation {
        
        const result: TAssignation = {
            assinationID: 765,
            activityID: activityID,
            userID: userID,
            startDate: startDate,
        }

        return result
    }

    setH5PInteraction(userID: number, 
                activityID: number,
                lastInteraction: string,
                stayTime: number,
                aproved: boolean,
                metadata: string ): TInteraction {

        const result: TInteraction = {
            interactionID: 123,
            activityID: activityID,
            aproved: aproved,
            lastInteraction: lastInteraction,
            metadata: metadata,
            stayTime: stayTime,
            userID: userID,
        }
        return result
    }
    

    getH5PActivityProfile(skyclickActivityID: number): TSkyclickActivity {

        const boardName = generateName()
        const courseID = getRandomInteger(1, 10000)
        const customWeakly = generateName()
        const documentName = generateName()
        const duration = getRandomInteger(1, 10000)
        const hasBoard = randomBool()
        const hasConference = randomBool()
        const hasDocument = randomBool()
        const isScored = randomBool()
        const mandatory = randomBool()
        const name = generateName()
        const periodID = getRandomInteger(1, 10000)
        const repeat = generateName()
        const roomName =  generateName()
        const startDate = randomDate(new Date(2012, 0, 1), new Date())
        const endDate = randomDate(startDate, new Date())
        const teacherID = getRandomInteger(1, 10000)
        const type =  generateName()
        const unitID = getRandomInteger(1, 10000)
        
        const result: TSkyclickActivity = {
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
        }

        return result
    }

    getH5PTeacherProfile(teacherID: number): TSkyclickUser {

        const billingInfoId = getRandomInteger(1, 10000)
        const email = randomEmail()
        const createdAt = randomDate(new Date(2012, 0, 1), new Date())
        const firstName =  generateName()
        const gender = randomGender()
        const goals = generateName()
        const honorCode = randomBool()
        const lastName = generateName()
        const levelOfEducation = generateName()
        const locationId = getRandomInteger(1, 10000)
        const password = generateName()
        const phone = getRandomInteger(1, 100000).toString()
        const pin = getRandomInteger(1, 1000).toString()
        const preferenceId = getRandomInteger(1, 100000).toString()
        const profilePictureUrl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
        const secondName = generateName()
        const settingsId = getRandomInteger(1, 10000)
        const subscriptionId = getRandomInteger(1, 10000)
        const tutorId = getRandomInteger(1, 10000)
        const updatedAt = randomDate(new Date(2012, 0, 1), new Date())
        const username = generateName() +  getRandomInteger(1, 100).toString()
        const yearOfBirth = getRandomInteger(1970, 2020)

        const result: TSkyclickUser = {

            allowedMacs: [getRandomString(15), getRandomString(15), getRandomString(15)],
            bannedMacs: [getRandomString(15), getRandomString(15), getRandomString(15)],
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
            updatedAt:updatedAt.toISOString() ,
            userID: teacherID,
            userType: "TEACHER",
            username,
            yearOfBirth: yearOfBirth
        }
        return result
    }

    getH5PUserProfile(userID: number):TSkyclickUser {
        const billingInfoId = getRandomInteger(1, 10000)
        const email = randomEmail()
        const createdAt = randomDate(new Date(2012, 0, 1), new Date())
        const firstName =  generateName()
        const gender = randomGender()
        const goals = generateName()
        const honorCode = randomBool()
        const lastName = generateName()
        const levelOfEducation = generateName()
        const locationId = getRandomInteger(1, 10000)
        const password = generateName()
        const phone = getRandomInteger(1, 100000).toString()
        const pin = getRandomInteger(1, 1000).toString()
        const preferenceId = getRandomInteger(1, 100000).toString()
        const profilePictureUrl = "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
        const secondName = generateName()
        const settingsId = getRandomInteger(1, 10000)
        const subscriptionId = getRandomInteger(1, 10000)
        const tutorId = getRandomInteger(1, 10000)
        const updatedAt = randomDate(new Date(2012, 0, 1), new Date())
        const username = generateName() +  getRandomInteger(1, 100).toString()
        const yearOfBirth = getRandomInteger(1970, 2020)

        const result: TSkyclickUser = {

            allowedMacs: [getRandomString(15), getRandomString(15), getRandomString(15)],
            bannedMacs: [getRandomString(15), getRandomString(15), getRandomString(15)],
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
            updatedAt:updatedAt.toISOString() ,
            userID: userID,
            userType: "STUDENT",
            username,
            yearOfBirth: yearOfBirth
        }
        return result
    }
  }
  

export default Skyclick
// let greeter: Skyclick = new Skyclick("world");