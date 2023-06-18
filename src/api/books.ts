import instance from '.';

const getNewBooks = async () => {
  const { data } = await instance.get('/new');
  return data.books;
};

const getSingleBook = async (isbn: string) => {
  const { data } = await instance.get(`/books/${isbn}`);
  return data;
};

const searchByKeyword = async (keyword: string) => {
  const { data } = await instance.get(`/search/${keyword}`);
  return data.books;
};

export default {
  getNewBooks,
  getSingleBook,
  searchByKeyword,
};

//4E0DC78374CB5976B3BF36A4D6BEF4A493155F0D23C77BD0503A99A7C0E370E291F7E47369DA7D1AF65ECFA6AD2486C3
