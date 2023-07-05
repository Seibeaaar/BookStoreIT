import React from 'react';
import { BookPreview } from 'src/types/books';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/ui/Button';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';
import styled from 'styled-components';
import { Tick } from '../components/Home.styled';
import BookItem from 'src/components/BookItem';

interface IBookDemoProps {
  books: BookPreview[];
}

const Container = styled.section`
  padding: 140px 0;
  @media screen and (max-width: 768px) {
    padding: 70px 0;
  }
`;

const BooksSection = styled(Flex)`
  margin: 60px 0;
  flex-wrap: wrap;
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
            <BookItem key={book.isbn13} book={book} />
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
