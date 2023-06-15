import instance from '.';

const getNewBooks = async () => {
  const { data } = await instance.get('/new');
  return data;
};

const getSingleBook = async (isbn: string) => {
  const { data } = await instance.get(`/books/${isbn}`);
  return data;
};

const searchByKeyword = async (keyword: string) => {
  const { data } = await instance.get(`/search/${keyword}`);
  return data;
};

export default {
  getNewBooks,
  getSingleBook,
  searchByKeyword,
};
