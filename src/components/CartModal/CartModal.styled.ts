import styled from 'styled-components';
import Flex from '../ui/Flex';
import { hexToRgba } from 'src/utils/ui';
import { ReactComponent as CrossIcon } from 'src/assets/icons/Cross.svg';

export const ModalOverlay = styled(Flex)`
  position: fixed;
  width: 100vw;
  background-color: ${(props) => hexToRgba(props.theme.colors.primary, 0.75)};
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  padding-top: 48px;
  overflow: hidden;
`;

export const ModalContainer = styled.div`
  width: 85%;
  background-color: ${(props) => props.theme.colors.white};
  height: calc(100% - 48px);
  overflow: hidden;
`;

export const ModalHeader = styled(Flex)`
  padding: 24px 48px;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const RemoveButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  p {
    transition: color 0.25s ease;
  }
  &:hover {
    p {
      color: ${(props) => props.theme.colors.danger};
    }
  }
`;

export const CartItemsSection = styled(Flex)`
  padding: 48px;
  overflow: auto;
  height: calc(100% - 48px);
`;

export const ModalCloseIcon = styled(CrossIcon)`
  cursor: pointer;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 0.5;
  }
`;

export const CheckoutContainer = styled(Flex)`
  padding: 24px 48px 0;
  border-left: 1px solid ${(props) => props.theme.colors.grey};
  height: 100%;
`;

export const QuantityLabel = styled(Flex)`
  background-color: ${(props) => props.theme.colors.tertiary};
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 6px 0;
  width: 120px;
`;

export const CartItemImage = styled.img`
  width: 130px;
  height: 180px;
`;

export const BookMeta = styled.div`
  margin-top: 10px;
`;

export const EmptyCartImage = styled.img`
  max-width: 250px;
  height: 250px;
  margin-bottom: 24px;
`;
