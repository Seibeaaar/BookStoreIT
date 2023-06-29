import { useSelector } from 'react-redux';
import { AppStore } from 'src/types/redux';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import BookItem from 'src/components/BookItem';
import NotFound from 'src/assets/images/not-found.webp';
import { ResultsList, NotFoundPalceholder } from '../Shop.styled';

const NewTab = () => {
  const { feed, error } = useSelector((state: AppStore) => state.books);

  if (!feed.length || error) {
    return (
      <Flex column alignItems="center">
        <NotFoundPalceholder
          src={NotFound}
          alt="Man looking for missing items in a box"
        />
        <Text size="h4" family="Cardo" weight="700" center color="primary">
          Unfortunately no new items found
        </Text>
      </Flex>
    );
  }

  return (
    <ResultsList alignItems="stretch" justifyContent="space-between" gap={30}>
      {feed.map((book) => (
        <BookItem key={book.isbn13} book={book} />
      ))}
    </ResultsList>
  );
};

export default NewTab;
