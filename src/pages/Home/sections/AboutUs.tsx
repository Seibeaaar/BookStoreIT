import styled from 'styled-components';
import Flex from 'src/components/ui/Flex';
import ContentBox from 'src/components/ui/ContentBox';
import Text from 'src/components/ui/Text';
import AboutImage from 'src/assets/images/about.webp';
import { Tick } from '../components/Home.styled';
import FloatingImage from '../components/FloatedImage';

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.section};
  padding: 150px 0;
`;

const AboutText = styled(Text)`
  margin-top: 22px;
`;

const AboutInfo = styled.article`
  max-width: 500px;
`;

const AboutShop = () => {
  return (
    <Container>
      <ContentBox>
        <Flex justifyContent="center" gap={70}>
          <FloatingImage image={AboutImage} alt="Man reading a book" />
          <AboutInfo>
            <Text weight="700" size="h4" as="h4">
              About us
            </Text>
            <Tick />
            <AboutText color="grey" weight="300">
              Welcome to our online book shop! We are dedicated to bringing you
              a wide selection of books across genres. With our user-friendly
              platform, we aim to provide an enjoyable and convenient shopping
              experience. Happy reading!
            </AboutText>
          </AboutInfo>
        </Flex>
      </ContentBox>
    </Container>
  );
};

export default AboutShop;
