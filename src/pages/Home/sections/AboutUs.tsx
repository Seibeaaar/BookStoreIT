import styled from 'styled-components';
import Flex from 'src/components/ui/Flex';
import ContentBox from 'src/components/ui/ContentBox';
import Text from 'src/components/ui/Text';
import AboutImage from 'src/assets/images/about.webp';
import { Tick } from '../components/Home.styled';
import FloatingImage from '../components/FloatedImage';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.section};
  padding: 150px 0;
  @media screen and (max-width: 768px) {
    padding: 75px 0;
  }
`;

const AboutText = styled(Text)`
  margin-top: 22px;
`;

const AboutInfo = styled.article`
  max-width: 500px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const AboutShop = () => {
  const { medium, small } = useWindowDimensions();
  return (
    <Container>
      <ContentBox>
        <Flex
          column={medium}
          reverse={medium}
          justifyContent="center"
          alignItems={medium ? 'center' : 'flex-start'}
          gap={70}
        >
          <FloatingImage image={AboutImage} alt="Man reading a book" />
          <AboutInfo>
            <Flex column alignItems={medium ? 'center' : 'flex-start'}>
              <Text weight="700" size="h4" as="h4">
                About us
              </Text>
              <Tick />
            </Flex>
            <AboutText center={small} color="grey" weight="300">
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
