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
