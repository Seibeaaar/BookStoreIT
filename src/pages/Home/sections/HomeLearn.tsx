import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { HomeContent } from 'src/types/firebase';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';
import LearnImage from 'src/assets/images/learn.webp';
import FloatingImage from '../components/FloatedImage';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { AppStore } from 'src/types/redux';
import { Tick } from '../components/Home.styled';

const Container = styled.section`
  padding: 145px 0;
  @media screen and (max-width: 1200px) {
    padding: 75px 0;
  }
`;

const LearnContent = styled(Flex)`
  margin-top: 50px;
`;

const LearnBullets = styled(Flex)`
  flex-wrap: wrap;
`;

const LearnItem = styled(Flex)`
  padding: 40px;
  background-color: ${(props) => props.theme.colors.tertiary};
  flex-basis: calc(50% - 15px);
`;

const Bullet = styled(Flex)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 30px;
`;

const HomeLearn = () => {
  const { learnBullets } = useSelector(
    (state: AppStore) => state.content.homeContent as HomeContent
  );
  const { width } = useWindowDimensions();
  const smallSizeScreen = width <= 576;
  return (
    <Container>
      <ContentBox>
        <Flex gap={22} column alignItems="center" justifyContent="center">
          <Text center={smallSizeScreen} weight="700" size="h3" as="h3">
            What will you learn
          </Text>
          <Tick />
        </Flex>
        <LearnContent alignItems="center" gap={100}>
          <LearnBullets
            column={smallSizeScreen}
            gap={30}
            justifyContent="space-between"
            alignItems="stretch"
          >
            {learnBullets.map((lb, i) => (
              <LearnItem
                column
                alignItems={smallSizeScreen ? 'center' : 'flex-start'}
                key={lb}
              >
                <Bullet justifyContent="center" alignItems="center">
                  <Text weight="300" family="Cardo">
                    {i + 1}
                  </Text>
                </Bullet>
                <Text center={smallSizeScreen} family="Cardo" weight="700">
                  {lb}
                </Text>
              </LearnItem>
            ))}
          </LearnBullets>
          {width > 1200 ? (
            <FloatingImage image={LearnImage} alt="Lady with a book" />
          ) : null}
        </LearnContent>
      </ContentBox>
    </Container>
  );
};

export default HomeLearn;
