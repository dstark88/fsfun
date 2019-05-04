import axios from "axios";

export default {
  // Gets all books
  getBrands: function() {
    return axios.get("https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/");
  },
  // Gets the book with the given id
  getBrand: function(id) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
