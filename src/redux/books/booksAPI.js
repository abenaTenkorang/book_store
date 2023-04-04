import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsRQKjqdm08s0gADKLQn/books';

const getNextItemID = (books) => {
  if (books.length) {
    const lastBookId = books.slice(-1)[0].item_id;
    const lastBookIndex = Number(lastBookId.substr(4));
    return `item${lastBookIndex + 1}`;
  }
  return 'item1';
};

export const getBooksFromAPI = async () => {
  const response = await axios(URL);

  const books = Object.entries(response.data)
    .map((entry) => ({
      item_id: entry[0],
      author: entry[1][0].author,
      title: entry[1][0].title,
      category: entry[1][0].category,
    }))
    .sort((a, b) => a.item_id.localeCompare(b.item_id, 'en', { numeric: true }));

  return books;
};

export const addBookAPI = async (bookInfo, books) => {
  const response = await axios.post(
    URL,
    {
      item_id: getNextItemID(books),
      ...bookInfo,
    },
  );
  return response.data;
};

export const deleteBookAPI = async (bookId) => {
  const response = await axios.delete(`${URL}/${bookId}`);
  return response.data;
};
