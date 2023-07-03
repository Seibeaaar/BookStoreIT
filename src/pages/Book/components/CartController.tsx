import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from 'src/types/redux';
import { AppDispatch } from 'src/redux/store';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import Button from 'src/components/ui/Button';
import { addToCart, removeFromCart } from 'src/redux/slices/cart';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const QuantityController = styled(Flex)`
  height: 50px;
  padding: 0 15px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  width: 175px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

const ControllerButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 19px;
`;

const CartController = () => {
  const { singleBook } = useSelector((state: AppStore) => state.books);
  const { items } = useSelector((state: AppStore) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState<number>(1);
  const [api, contextHolder] = notification.useNotification();
  const { extraLarge, small } = useWindowDimensions();

  const toggleBookInCart = () => {
    dispatch(
      inCart
        ? removeFromCart(singleBook?.isbn13)
        : addToCart({
            book: singleBook,
            quantity,
          })
    );
    api.success({
      message: !inCart
        ? "You've added the book to your cart"
        : 'Book removed from your cart',
      placement: 'topRight',
    });
    setQuantity(1);
  };

  const inCart = useMemo(
    () =>
      !!items.find((cartItem) => {
        const { book } = cartItem;
        return singleBook?.isbn13 === book.isbn13;
      }),
    [items, singleBook]
  );

  return (
    <Flex
      column={small}
      width="100%"
      justifyContent={extraLarge ? 'center' : 'flex-start'}
      alignItems="center"
      gap={24}
    >
      {contextHolder}
      <QuantityController
        gap={48}
        alignItems="center"
        justifyContent="space-between"
      >
        <ControllerButton
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 1 || inCart}
        >
          -
        </ControllerButton>
        <Text color="grey">{quantity}</Text>
        <ControllerButton
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity === 99 || inCart}
        >
          +
        </ControllerButton>
      </QuantityController>
      <Button
        onClick={toggleBookInCart}
        width={small ? '100%' : 0}
        text={`${inCart ? 'Remove from' : 'Add to'} Cart`}
      />
    </Flex>
  );
};

export default CartController;
