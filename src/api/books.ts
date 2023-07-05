import instance from '.';

const getNewBooks = async () => {
  const { data } = await instance.get('/new');
  return data.books;
};

const getSingleBook = async (isbn: string) => {
  const { data } = await instance.get(`/books/${isbn}`);
  return data;
};

const searchByKeyword = async (keyword: string, page = 1) => {
  const {
    data: { books, total },
  } = await instance.get(`/search/${keyword}/${page}`);
  return {
    books,
    total,
  };
};

export default {
  getNewBooks,
  getSingleBook,
  searchByKeyword,
};
