import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from './ui/Text';
import Flex from './ui/Flex';
import { ReactComponent as CartIcon } from 'src/assets/icons/Cart.svg';

const NAV_LINKS = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/shop',
    name: 'Shop',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

const NavLink = styled(Link)`
  text-decoration: none;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: all ease 0.25s;
    transform-origin: left;
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 2px;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

const Cart = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.25s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const CartLabel = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: -6px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 8px;
`;

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" gap={20} as="nav">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.path} to={link.path}>
          <Text weight="300" color="white">
            {link.name}
          </Text>
        </NavLink>
      ))}
      <Cart>
        <CartIcon />
        <CartLabel>
          <span>1</span>
        </CartLabel>
      </Cart>
    </Flex>
  );
};

export default Navbar;
