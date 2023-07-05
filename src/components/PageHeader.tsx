import styled from 'styled-components';
import Text from './ui/Text';
import Flex from './ui/Flex';

const FeaturedContainer = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 60px 0 120px 0;
  @media screen and (max-width: 992px) {
    height: auto;
  }
`;

const FeaturedContent = styled.div`
  max-width: 75%;
  margin: auto;
`;

const Tick = styled.div`
  width: 34px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 28px;
`;

interface IPageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, description }) => (
  <FeaturedContainer>
    <FeaturedContent>
      <Flex column alignItems="center" gap={14}>
        <Text center weight="700" as="h1" size="h1" color="white">
          {title}
        </Text>
        <Tick />
      </Flex>
      {description ? (
        <Text color="grey" center>
          {description}
        </Text>
      ) : null}
    </FeaturedContent>
  </FeaturedContainer>
);

export default PageHeader;
