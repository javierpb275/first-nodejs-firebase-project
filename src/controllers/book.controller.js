const booksRef = require("../models/book.model");

const getBooks = async (req, res) => {
  try {
    booksRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(201).json(data);
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Something went wrong, please try again" });
  }
};

module.exports = {
  getBooks,
};
