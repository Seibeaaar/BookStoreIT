import styled from 'styled-components';
import Text from './ui/Text';
import Flex from './ui/Flex';

const FeaturedContainer = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 60px 0 120px 0;
  height: 50vh;
  @media screen and (max-width: 992px) {
    height: auto;
  }
`;

const FeaturedContent = styled.div`
  max-width: 630px;
  margin: auto;
`;

const Tick = styled.div`
  width: 34px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 28px;
`;

const ShopHeader = () => (
  <FeaturedContainer>
    <FeaturedContent>
      <Flex column alignItems="center" gap={14}>
        <Text weight="700" as="h1" size="h1" color="white">
          My Store
        </Text>
        <Tick />
      </Flex>
      <Text color="grey" center>
        Unlock a world of knowledge with our vast collection of e-books, and
        embark on a reading journey like never before!
      </Text>
    </FeaturedContent>
  </FeaturedContainer>
);

export default ShopHeader;
