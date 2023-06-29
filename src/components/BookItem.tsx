import styled from 'styled-components';
import Flex from './ui/Flex';
import Text from './ui/Text';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { BookPreview } from 'src/types/books';
import Button from './ui/Button';

interface IBookItemProps {
  book: BookPreview;
}

const BookItemContainer = styled(Flex)`
  flex-basis: calc(50% - 30px);
  @media screen and (max-width: 1200px) {
    flex-basis: 100%;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BookDescription = styled(Text)`
  margin: 14px 0 30px 0;
`;

const BookImage = styled.img`
  max-width: 400px;
  margin-right: 20px;
`;

const BookItem: React.FC<IBookItemProps> = ({ book }) => {
  const { small } = useWindowDimensions();
  return (
    <BookItemContainer key={book.isbn13} alignItems="center">
      <BookImage loading="lazy" src={book.image} alt={book.title} />
      <Flex column alignItems={small ? 'center' : 'flex-start'}>
        <Text size="h5" as="h5" weight="700">
          {book.title}
        </Text>
        <BookDescription center={small} color="grey" weight="300">
          {book.subtitle || 'No description provided'}
        </BookDescription>
        <Button width={150} text="Read more" background={false} />
      </Flex>
    </BookItemContainer>
  );
};

export default BookItem;
