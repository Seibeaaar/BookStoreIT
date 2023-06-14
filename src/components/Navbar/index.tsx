import Text from '../ui/Text';
import Flex from '../ui/Flex';
import { useState } from 'react';
import { ReactComponent as CartIcon } from 'src/assets/icons/Cart.svg';
import {
  NavLink,
  Cart,
  CartLabel,
  NavbarMenu,
  NavbarDrawer,
} from './Navbar.styled';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

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

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { width } = useWindowDimensions();

  const closeNavbarDrawer = () => setNavbarOpen(false);
  const toggleNavbarDrawer = () => setNavbarOpen(!navbarOpen);

  if (width < 768) {
    return (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={20}
        as="nav"
      >
        <Cart>
          <CartIcon />
          <CartLabel>
            <span>1</span>
          </CartLabel>
        </Cart>
        <NavbarMenu open={navbarOpen} onClick={toggleNavbarDrawer}>
          <div></div>
          <div></div>
          <div></div>
        </NavbarMenu>
        <NavbarDrawer open={navbarOpen} column alignItems="center">
          {NAV_LINKS.map((link) => (
            <NavLink onClick={closeNavbarDrawer} key={link.path} to={link.path}>
              <Text weight="300" color="white">
                {link.name}
              </Text>
            </NavLink>
          ))}
        </NavbarDrawer>
      </Flex>
    );
  }

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
