import React from 'react';
import { BookPreview } from 'src/types/books';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/ui/Button';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';
import styled from 'styled-components';
import { Tick } from '../components/Home.styled';

interface IBookDemoProps {
  books: BookPreview[];
}

const Container = styled.section`
  padding: 140px 0;
`;

const BookItem = styled(Flex)`
  flex-basis: 50%;
`;

const BooksSection = styled(Flex)`
  margin: 60px 0;
  flex-wrap: wrap;
`;

const BookDescription = styled(Text)`
  margin: 14px 0 30px 0;
`;

const BookImage = styled.img`
  max-width: 400px;
`;

const BooksDemo: React.FC<IBookDemoProps> = ({ books }) => {
  const navigate = useNavigate();

  const navigateToShop = () => navigate('/shop');

  return (
    <Container>
      <ContentBox>
        <Flex column alignItems="center" gap={12}>
          <Text size="h2" as="h2" weight="700">
            More Books
          </Text>
          <Tick />
        </Flex>
        <BooksSection justifyContent="space-between" alignItems="stretch">
          {books.map((book) => (
            <BookItem key={book.isbn13} alignItems="center">
              <BookImage src={book.image} alt={book.title} />
              <div>
                <Text size="h5" as="h5" weight="700">
                  {book.title}
                </Text>
                <BookDescription color="grey" weight="300">
                  {book.subtitle}
                </BookDescription>
                <Button width={150} text="Read more" background={false} />
              </div>
            </BookItem>
          ))}
        </BooksSection>
        <Flex justifyContent="center">
          <Button onClick={navigateToShop} text="Explore more books" />
        </Flex>
      </ContentBox>
    </Container>
  );
};

export default BooksDemo;