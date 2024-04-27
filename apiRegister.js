import books from "./api/books_api.js"
import authors from "./api/authors_api.js";

export default function (server, mongoose) {

  books(server);
  authors(server);
}