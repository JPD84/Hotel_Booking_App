use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    firstName: "Jack",
    lastName: "Daniels",
    emailAddress: "J.daniels@superweb.com"
  },
  {
    firstName: "Captain",
    lastName: "Morgan",
    emailAddress: "elcapitan@bigboats.com"
  },
  {
    firstName: "Lochlann",
    lastName: "Macgill",
    emailAddress: "lmac@superweb.com"
  }
]);