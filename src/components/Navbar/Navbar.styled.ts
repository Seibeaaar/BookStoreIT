import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Flex from '../ui/Flex';

export const NavLink = styled(Link)`
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

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Cart = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.25s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CartLabel = styled.div`
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

export const NavbarMenu = styled.div<{ open: boolean }>`
  div {
    width: 24px;
    height: 4px;
    margin-top: 4px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.75px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const NavbarDrawer = styled(Flex)<{ open: boolean }>`
  position: absolute;
  top: 10vh;
  left: 0;
  height: ${(props) => (props.open ? '90vh' : 0)};
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  transition: height 0.25s ease;
`;
