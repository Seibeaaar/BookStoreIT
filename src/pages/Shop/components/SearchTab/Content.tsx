import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchEmpty from 'src/assets/images/empty-search.webp';
import SearchPlaceholder from 'src/assets/images/search.webp';
import BookItem from 'src/components/BookItem';
import Flex from 'src/components/ui/Flex';
import Button from 'src/components/ui/Button';
import Text from 'src/components/ui/Text';
import { AppStore } from 'src/types/redux';
import { AppDispatch } from 'src/redux/store';
import { clearRequest } from 'src/redux/slices/search';
import {
  NotFoundPalceholder,
  ResultsList,
  SearchRequestInfo,
} from '../../Shop.styled';

const SearchTabContent = () => {
  const { items, initial, searchKeyword } = useSelector(
    (state: AppStore) => state.search
  );
  const dispatch = useDispatch<AppDispatch>();

  const showSearchInfo = useMemo(
    () => !initial && searchKeyword && items.length,
    [initial, searchKeyword, items]
  );

  const SearchFallback = () => {
    const ImageSource = initial ? SearchPlaceholder : SearchEmpty;
    if (!items.length) {
      return (
        <Flex column alignItems="center">
          <NotFoundPalceholder
            src={ImageSource}
            alt="Woman seeing no items found"
          />
          <Text size="h4" family="Cardo" weight="700" center color="primary">
            {initial
              ? 'Start looking for your books'
              : `Ohh, unfortunately no books found for "${searchKeyword}"`}
          </Text>
        </Flex>
      );
    }
    return null;
  };

  return (
    <>
      <SearchFallback />
      {showSearchInfo ? (
        <Flex column gap={16} alignItems="center">
          <SearchRequestInfo
            center
            size="h4"
            family="Cardo"
            weight="700"
          >{`Here are your results for "${searchKeyword}"`}</SearchRequestInfo>
          <Button
            onClick={() => dispatch(clearRequest())}
            text="Clear search results"
          />
        </Flex>
      ) : null}
      <ResultsList alignItems="stretch" justifyContent="space-between" gap={30}>
        {items.map((book) => (
          <BookItem key={book.isbn13} book={book} />
        ))}
      </ResultsList>
    </>
  );
};

export default SearchTabContent;
