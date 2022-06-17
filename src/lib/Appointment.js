const Note = require("./Note");

class Apppointment extends Note {
  constructor({ title, date, type, attendees }) {
    super({ title, date });

    this.type = type;
    this.attendees = attendees;
  }
}

module.exports = Apppointment;
