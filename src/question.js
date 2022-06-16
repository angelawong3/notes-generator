const billQuestions = [
  {
    type: "input",
    message: "Please enter the title of the bill:",
    name: "title",
    // validate: () => {},
  },
  {
    type: "number",
    message: "Please enter the bill amount:",
    name: "amount",
    // validate: () => {},
  },
  {
    type: "input",
    message: "Please enter the payee details:",
    name: "payee",
    // validate: () => {},
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the due date:",
    default: new Date(), // default to today's date
    format: { month: "short", hour: undefined, minute: undefined },
    clearable: true,
  },
];

const appointmentQuestions = [
  {
    type: "input",
    message: "Please enter the title of the appointment",
    name: "title",
    // validate: () => {},
  },
  {
    type: "list",
    message: "Please select the type of appointment:",
    name: "type",
    choices: [
      {
        name: "Doctor",
        value: "doctor",
        short: "Doctor",
      },
      {
        name: "Dentist",
        value: "dentist",
        short: "Dentist",
      },
      {
        name: "Hair Dresser",
        value: "hairDresser",
        short: "Hair",
      },
      {
        name: "Meeting",
        value: "meeting",
        short: "Meeting",
      },
    ],
    // validate: () => {},
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the appointment date:",
    default: new Date(), // default to today's date
    format: { month: "short" },
    clearable: true,
  },
];

const appointmentAttendeesQuestions = [
  {
    type: "input",
    message: "Please enter the full name of attendee:",
    name: "attendees",
    // validate: () => {},
  },
  {
    type: "confirm",
    message: "Would you like to add another attendee?",
    name: "addAnotherAttendee",
    // validate: () => {},
  },
];

const listQuestions = [
  {
    type: "input",
    message: "Please enter the title of the list:",
    name: "title",
    // validate: () => {},
  },
  {
    type: "date",
    name: "date",
    message: "Please enter the due date for list completion:",
    default: new Date(), // default to today's date
    format: { month: "short" },
    clearable: true,
  },
];

const listItemQuestions = [
  {
    type: "input",
    message: "Please enter the list item name:",
    name: "listItem",
    // validate: () => {},
  },
  {
    type: "confirm",
    message: "Would you like to add another list item?",
    name: "addListItem",
    // validate: () => {},
  },
];
