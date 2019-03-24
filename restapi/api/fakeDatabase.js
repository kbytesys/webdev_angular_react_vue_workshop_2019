var Checkin = require('./models/checkinModel');
var Person = require('./models/personModel');
var Room = require('./models/roomModel');

function FakeDatabase() {

    var room1 = new Room(1, 'Room 1');
    var room2 = new Room(2, 'Room 2');
    var person1 = new Person("Andrea Briganti");
    var person2 = new Person("Mario Rossi");
    var person3 = new Person("Antonio Bianchi");

    this.checkins = [];
    this.checkins.push(new Checkin(1, room1, person1));
    this.checkins.push(new Checkin(2, room1, person2));
    this.checkins.push(new Checkin(3, room2, person3));

    this.checkinsLog = [];
    this.checkinsLog.push({roomId: 1, date: new Date(), message: "Andrea Briganti joined the meeting in the Room 1"});
    this.checkinsLog.push({roomId: 1, date: new Date(), message: "Mario Rossi joined the meeting in the Room 1"});
    this.checkinsLog.push({roomId: 2, date: new Date(), message: "Antonio Bianchi joined the meeting in the Room 2"});
}

module.exports = exports = new FakeDatabase();
