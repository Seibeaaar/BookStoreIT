import { useDispatch } from 'react-redux';
import ShopHeader from 'src/components/ShopHeader';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppDispatch } from 'src/redux/store';
import { getSingleBook } from 'src/redux/thunks/books';
import { resetSingleBook } from 'src/redux/slices/books';

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
      <ShopHeader />
      <BookInfo />
      <Benefits />
    </main>
  );
};

export default BookPage;
