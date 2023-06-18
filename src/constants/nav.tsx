import { ReactComponent as FacebookLogo } from 'src/assets/icons/facebook.svg';
import { ReactComponent as LinkedingLogo } from 'src/assets/icons/linkedin.svg';
import { ReactComponent as TwitterLogo } from 'src/assets/icons/twitter.svg';
import { ReactComponent as InstagramLogo } from 'src/assets/icons/instagram.svg';

export const SOCIAL_LINKS = [
  {
    icon: <FacebookLogo />,
    href: 'https://facebook.com',
  },
  {
    icon: <TwitterLogo />,
    href: 'https://twitter.com',
  },
  {
    icon: <LinkedingLogo />,
    href: 'https://linkedin.com',
  },
  {
    icon: <InstagramLogo />,
    href: 'https://instagram.com',
  },
];

export const NAV_LINKS = [
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
