
//PUERTO DE SERVER
process.env.PORT = process.env.PORT || 3500;

//PUERTO DE DB DE MONGODB
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let urlDB;

// if (process.env.NODE_ENV === "dev") {
//   urlDB = "mongodb://localhost/dbfer";
// } else {
  urlDB = "mongodb+srv://abraham:jIjRdwT5uLjmCu2L@cafe.8wspk.mongodb.net/cafe";
// }

process.env.URLDB = urlDB
