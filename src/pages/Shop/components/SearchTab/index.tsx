import { useSelector } from 'react-redux';
import { AppStore } from 'src/types/redux';
import BookSearch from '../BookSearch';
import Loader from 'src/components/ui/Loader';
import SearchTabContent from './Content';
import SearchPagination from './Pagination';

const SearchTab = () => {
  const { pending, totalResults } = useSelector(
    (state: AppStore) => state.search
  );
  return (
    <>
      <BookSearch />
      {pending ? <Loader /> : <SearchTabContent />}
      {totalResults ? <SearchPagination /> : null}
    </>
  );
};

export default SearchTab;
