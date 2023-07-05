import Flex from 'src/components/ui/Flex';
import { useNavigate } from 'react-router-dom';
import Text from 'src/components/ui/Text';
import Button from 'src/components/ui/Button';
import { Container, NotFoundInfo, Content, NotFoundIcon } from './404.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <Container justifyContent="center" alignItems="center">
      <Flex column alignItems="center">
        <NotFoundIcon />
        <Content>
          <Text center as="h1" size="h1" weight="700">
            Page not found
          </Text>
          <NotFoundInfo center color="grey" weight="300" family="Inter">
            The page you are looking for doesn't exist. Please try searching for
            some other page, or return to the website's homepage to find what
            you're looking for.
          </NotFoundInfo>
          <Button text="Back to home" onClick={goToHome} />
        </Content>
      </Flex>
    </Container>
  );
};

export default NotFoundPage;
