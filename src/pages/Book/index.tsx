import { useDispatch } from 'react-redux';
import PageHeader from 'src/components/PageHeader';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppDispatch } from 'src/redux/store';
import { getSingleBook } from 'src/redux/thunks/books';
import { resetSingleBook } from 'src/redux/slices/books';
import { SHOP_HEADER_CONTENT } from 'src/constants/headers';

import BookInfo from './components/BookInfo';
import Benefits from './components/Benefits';

const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getSingleBook(id as string));
    return () => {
      dispatch(resetSingleBook());
    };
  }, [dispatch, id]);
  return (
    <main>
      <PageHeader {...SHOP_HEADER_CONTENT} />
      <BookInfo />
      <Benefits />
    </main>
  );
};

export default BookPage;
