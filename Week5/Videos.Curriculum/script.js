/*
Object-Oriented Programming

DVD Player
--------------
Height
Weight
Width
Color

Play 
Fast Forward
Rewind
Pause

DVD
----
Movie Length
Image
Size
*/

//classes
class Student { //pascal case
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student('Tom', 'Sawyer', '6235555555', 'A');
let student2 = new Student('Sam', 'Smith', '4805555555', 'A');

student1.introduce();
student2.introduce();

//inheritance
class PromotionSender {
    constructor() {

    }
}

sendNotification(notification) {
    console.log('Sending: ' + notification);
}

findUsersWithStatus(status) {
    let users = getUsers(status);
    return users;
}

calculateDiscount(status) {
    if (status === 'Gold') {
        return .3;
    } else if (status === 'Silver') {
        return .15;
    }
    return 0;
}

class CollectionsSender {
    constructor() {

    }

    sendNotification(notification) {
        console.log('Sending: ' + notification)
    }
    find
}