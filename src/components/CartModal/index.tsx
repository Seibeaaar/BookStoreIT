import React, { createContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notification } from 'antd';
import { AppStore } from 'src/types/redux';
import { removeFromCart } from 'src/redux/slices/cart';
import { AppDispatch } from 'src/redux/store';
import { formatPriceString } from 'src/utils/books';
import Button from '../ui/Button';
import Flex from '../ui/Flex';
import Text from '../ui/Text';
import EmptyCart from 'src/assets/images/empty-cart.webp';
import {
  ModalContainer,
  ModalCloseIcon,
  ModalOverlay,
  ModalHeader,
  CheckoutContainer,
  CartItemsSection,
  QuantityLabel,
  CartItemImage,
  RemoveButton,
  BookMeta,
  EmptyCartImage,
} from './CartModal.styled';

interface ICartModalProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openModal: () => {},
});

const CartModal: React.FC<ICartModalProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { items, total } = useSelector((state: AppStore) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [api, context] = notification.useNotification();

  const removeItemFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    api.success({
      message: 'Book removed from your cart',
    });
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
      }}
    >
      {context}
      {modalOpen ? (
        <ModalOverlay justifyContent="center" onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader alignItems="center" justifyContent="space-between">
              <Text size="h5" as="h6" weight="700">
                Your Cart
              </Text>
              <ModalCloseIcon onClick={closeModal} width={20} height={20} />
            </ModalHeader>
            <Flex height="100%">
              <CartItemsSection
                justifyContent="space-between"
                alignItems="center"
                width="65%"
                gap={24}
                column
              >
                {items.length ? (
                  <>
                    {items.map((item) => (
                      <Flex
                        width="100%"
                        key={item.book.isbn13}
                        justifyContent="space-between"
                      >
                        <Flex gap={24}>
                          <CartItemImage
                            src={item.book.image}
                            alt={item.book.title}
                          />
                          <Flex
                            height={160}
                            column
                            justifyContent="space-between"
                          >
                            <BookMeta>
                              <Text family="Cardo" weight="300">
                                {item.book.title}
                              </Text>
                              <Text color="grey">{item.book.price}</Text>
                            </BookMeta>
                            <RemoveButton
                              onClick={() =>
                                removeItemFromCart(item.book.isbn13)
                              }
                            >
                              <Text size="h6" weight="300" family="Cardo">
                                Remove
                              </Text>
                            </RemoveButton>
                          </Flex>
                        </Flex>
                        <QuantityLabel justifyContent="center">
                          <Text>{item.quantity}</Text>
                        </QuantityLabel>
                      </Flex>
                    ))}
                  </>
                ) : (
                  <div>
                    <EmptyCartImage
                      src={EmptyCart}
                      alt="Woman with an empty cart"
                    />
                    <Text family="Cardo" size="h5" weight="700" center>
                      No items in your cart
                    </Text>
                  </div>
                )}
              </CartItemsSection>
              <CheckoutContainer width="35%" column gap={48}>
                <Flex
                  width="100%"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text family="Cardo" weight="300">
                    Sub-total
                  </Text>
                  <Text weight="700">{formatPriceString(total)}</Text>
                </Flex>
                {items.length ? (
                  <Button width="100%" text="Continue to checkout" />
                ) : null}
              </CheckoutContainer>
            </Flex>
          </ModalContainer>
        </ModalOverlay>
      ) : null}
      {children}
    </ModalContext.Provider>
  );
};

export default CartModal;
