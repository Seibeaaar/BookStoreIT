import Text from '../ui/Text';
import Flex from '../ui/Flex';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as CartIcon } from 'src/assets/icons/Cart.svg';
import {
  NavLink,
  Cart,
  CartLabel,
  NavbarMenu,
  NavbarDrawer,
} from './Navbar.styled';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { NAV_LINKS } from 'src/constants/nav';
import { AppStore } from 'src/types/redux';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { items } = useSelector((state: AppStore) => state.cart);

  const closeNavbarDrawer = () => setNavbarOpen(false);
  const toggleNavbarDrawer = () => setNavbarOpen(!navbarOpen);
  const itemsCount = items.length;

  if (width < 1024) {
    return (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={20}
        as="nav"
      >
        <Cart>
          <CartIcon />
          {itemsCount ? (
            <CartLabel>
              <span>{itemsCount}</span>
            </CartLabel>
          ) : null}
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
    <Flex justifyContent="space-between" alignItems="center" gap={64} as="nav">
      {NAV_LINKS.map((link) => (
        <NavLink key={link.path} to={link.path}>
          <Text weight="300" color="white">
            {link.name}
          </Text>
        </NavLink>
      ))}
      <Cart>
        <CartIcon />
        {itemsCount ? (
          <CartLabel>
            <span>{itemsCount}</span>
          </CartLabel>
        ) : null}
      </Cart>
    </Flex>
  );
};

export default Navbar;
