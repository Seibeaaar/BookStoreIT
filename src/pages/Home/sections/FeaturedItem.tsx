import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppStore } from 'src/types/redux';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';
import Button from 'src/components/ui/Button';
import { Tick } from '../components/Home.styled';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { useNavigate } from 'react-router-dom';

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  height: 85vh;
  padding: 50px 0 100px 0;
  @media screen and (max-width: 1200px) {
    height: auto;
    padding-top: 0;
  }
`;

const FeaturedImage = styled.img`
  height: 100%;
  max-width: 40%;
  @media screen and (max-width: 768px) {
    margin-top: 48px;
    max-width: 100%;
  }
`;

const WebPageLink = styled.a`
  outline: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
  padding-bottom: 2px;
  text-decoration: none;
  transition: border-color 0.25s ease;
  p {
    transition: color 0.25s ease;
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.secondary};
    p {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const BookTitle = styled(Text)`
  margin: 16px 0 32px 0;
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`;

const FeaturedItem = () => {
  const featuredBook = useSelector((state: AppStore) => state.books.feed[0]);
  const { medium, small } = useWindowDimensions();
  const navigate = useNavigate();

  const navigateToBookPage = () => navigate(`/books/${featuredBook.isbn13}`);
  return (
    <Container>
      <ContentBox>
        <Flex alignItems="center" gap={15}>
          <Tick />
          <Text weight="400" size="h6" as="h6" color="white">
            Welcome to BookStoreIT
          </Text>
        </Flex>
        <Flex
          column={medium}
          reverse={medium}
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex column justifyContent="center">
            <BookTitle center={medium} as="h1" size="h1" color="white">
              {featuredBook.title}
            </BookTitle>
            <Text color="grey">{featuredBook.subtitle}</Text>
          </Flex>
          <FeaturedImage alt="Featured book" src={featuredBook.image} />
        </Flex>
        <Flex
          column={small}
          alignItems="center"
          justifyContent={medium ? 'center' : 'flex-start'}
          gap={40}
        >
          <Button
            onClick={navigateToBookPage}
            hoverTextColor="white"
            text="Add to your cart"
          />
          <WebPageLink href={featuredBook.url} target="_blank">
            <Text family="Cardo" weight="400" color="white">
              Read more on website
            </Text>
          </WebPageLink>
        </Flex>
      </ContentBox>
    </Container>
  );
};

export default FeaturedItem;
