import styled from 'styled-components';
import ContentBox from './ui/ContentBox';
import { ReactComponent as Logo } from 'src/assets/icons/Logo.svg';
import Flex from './ui/Flex';
import Text from './ui/Text';
import Navbar from './Navbar';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const HeaderContainer = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary};
  height: 15vh;
  @media screen and (max-width: 768px) {
    height: 10vh;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
`;

const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <HeaderContainer as="header" alignItems="center">
      <ContentBox>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="space-between" gap={8}>
            <Logo />
            {width > 576 ? (
              <Text size="h5" color="white">
                BookStoreIT
              </Text>
            ) : null}
          </Flex>
          <Navbar />
        </Flex>
      </ContentBox>
    </HeaderContainer>
  );
};

export default Header;
