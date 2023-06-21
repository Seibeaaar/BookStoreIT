import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Flex from 'src/components/ui/Flex';
import OfferImage from 'src/assets/images/offer.webp';
import Text from 'src/components/ui/Text';
import { Tick } from '../components/Home.styled';
import Button from 'src/components/ui/Button';
import ContentBox from 'src/components/ui/ContentBox';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 36px 0;
`;

const OfferContent = styled.article`
  max-width: 670px;
  @media screen and (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const OfferText = styled(Text)`
  margin: 30px 0;
`;

const Image = styled.img`
  max-width: 500px;
  @media screen and (max-width: 1200px) {
    max-width: 350px;
  }
`;

const HomeOffer = () => {
  const navigate = useNavigate();
  const navigateToShop = () => navigate('/shop');
  const { width } = useWindowDimensions();
  const mediumSizeScreen = width <= 768;
  const smallScreenSize = width <= 576;

  return (
    <Container>
      <ContentBox>
        <Flex
          column={mediumSizeScreen}
          alignItems="center"
          justifyContent="space-between"
        >
          <OfferContent>
            <Flex
              column
              alignItems={mediumSizeScreen ? 'center' : 'flex-start'}
              gap={12}
            >
              <Text
                center={smallScreenSize}
                as="h4"
                size="h4"
                color="white"
                weight="700"
              >
                Get original books today
              </Text>
              <Tick />
            </Flex>
            <OfferText center={mediumSizeScreen} weight="300" color="grey">
              Find more than 200 books on our website and boost your software
              development skills
            </OfferText>
            <Flex justifyContent={mediumSizeScreen ? 'center' : 'flex-start'}>
              <Button
                textColor="white"
                background={false}
                text="Browse books"
                onClick={navigateToShop}
              />
            </Flex>
          </OfferContent>
          <Image src={OfferImage} alt="Cup of coffee" />
        </Flex>
      </ContentBox>
    </Container>
  );
};

export default HomeOffer;
