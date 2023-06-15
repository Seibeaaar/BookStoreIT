export const calculateBookTotal = (price: string, quantity: number) => {
  const formattedPrice = +price.replace('$', '');
  return formattedPrice * quantity;
};

export const formatPriceString = (price: number) => `$${price}`;
