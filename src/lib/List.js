const Note = require("./Note");

class list extends Note {
  constructor({ title, date, items }) {
    super({ title, date });

    this.items = items;
  }
}

module.exports = list;
