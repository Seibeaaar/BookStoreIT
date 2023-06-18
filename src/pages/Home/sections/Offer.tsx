import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Flex from 'src/components/ui/Flex';
import OfferImage from 'src/assets/images/offer.webp';
import Text from 'src/components/ui/Text';
import { Tick } from '../components/Home.styled';
import Button from 'src/components/ui/Button';
import ContentBox from 'src/components/ui/ContentBox';

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 36px 0;
`;

const OfferContent = styled.article`
  max-width: 670px;
`;

const OfferText = styled(Text)`
  margin: 30px 0;
`;

const HomeOffer = () => {
  const navigate = useNavigate();

  const navigateToShop = () => navigate('/shop');

  return (
    <Container>
      <ContentBox>
        <Flex alignItems="center" justifyContent="space-between">
          <OfferContent>
            <Text as="h4" size="h4" color="white" weight="700">
              Get original books today
            </Text>
            <Tick />
            <OfferText weight="300" color="grey">
              Find more than 200 books on our website and boost your software
              development skills
            </OfferText>
            <Button
              textColor="white"
              background={false}
              text="Browse books"
              onClick={navigateToShop}
            />
          </OfferContent>
          <img src={OfferImage} alt="Cup of coffee" />
        </Flex>
      </ContentBox>
    </Container>
  );
};

export default HomeOffer;
