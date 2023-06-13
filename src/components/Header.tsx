import styled from 'styled-components';
import ContentBox from './ui/ContentBox';
import { ReactComponent as Logo } from 'src/assets/icons/Logo.svg';
import Flex from './ui/Flex';
import Text from './ui/Text';
import Navbar from './Navbar';

const HeaderContainer = styled.header`
  padding: 40px 0;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Header = () => (
  <HeaderContainer>
    <ContentBox>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="space-between" gap={8}>
          <Logo />
          <Text size="h5" color="white">
            BookStoreIT
          </Text>
        </Flex>
        <Navbar />
      </Flex>
    </ContentBox>
  </HeaderContainer>
);

export default Header;
