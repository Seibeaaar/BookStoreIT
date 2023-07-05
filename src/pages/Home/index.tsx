import { useEffect } from 'react';
import Loader from 'src/components/ui/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'src/types/redux';
import { AppDispatch } from 'src/redux/store';
import { getNewBooks } from 'src/redux/thunks/books';
import { getHomeContent } from 'src/redux/thunks/content';
import FeaturedItem from './sections/FeaturedItem';
import BooksDemo from './sections/BooksDemo';
import AboutShop from './sections/AboutUs';
import HomeOffer from './sections/Offer';
import HomeLearn from './sections/HomeLearn';

const HomePage = () => {
  const { pending, feed } = useSelector((state: AppStore) => state.books);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewBooks());
    dispatch(getHomeContent());
  }, []);

  if (pending || !feed?.length) return <Loader />;

  return (
    <main>
      <FeaturedItem />
      <BooksDemo books={feed.slice(1, 3)} />
      <AboutShop />
      <HomeOffer />
      <HomeLearn />
    </main>
  );
};

export default HomePage;
