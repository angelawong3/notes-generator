const onReady = () => {
  // find all cards
  const cards = $('div[name="note-card"]');
  const notes = [];

  const cardData = cards.map(function () {
    // get card type
    const type = $(this).attr("data-card");
    const id = $(this).attr("id");

    if (type === "bill") {
      const title = $(this).attr("data-title");
      const payee = $(this).attr("data-payee");
      const amount = $(this).attr("data-amount");
      const date = $(this).attr("data-date");
      const status = $(this).attr("data-status");

      const bill = {
        id,
        title,
        payee,
        amount,
        date,
        status,
      };

      notes.push(bill);
    }

    if (type === "appointment") {
      const title = $(this).attr("data-title");
      const type = $(this).attr("data-type");
      const attendees = [];
      const date = $(this).attr("data-date");
      const status = $(this).attr("data-status");

      const appointment = {
        id,
        title,
        type,
        attendees,
        date,
        status,
      };

      notes.push(appointment);
    }

    if (type === "list") {
      const title = $(this).attr("data-title");
      const items = [];
      const date = $(this).attr("data-date");
      const status = $(this).attr("data-status");

      const list = {
        id,
        title,
        items,
        date,
        status,
      };

      notes.push(list);
    }

    if (type === "reminder") {
      const title = $(this).attr("data-title");
      const date = $(this).attr("data-date");
      const status = $(this).attr("data-status");

      const reminder = {
        id,
        title,
        date,
        status,
      };

      notes.push(reminder);
    }
  });
};
console.log(cardData);
$(document).ready(onReady);
