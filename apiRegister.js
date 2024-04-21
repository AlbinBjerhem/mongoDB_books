import users from "./api/users.js";
import books from "./api/books_api.js"
import authors from "./api/authors_api.js";

export default function (server, mongoose) {

  users(server, mongoose);
  books(server);
  authors(server);
}