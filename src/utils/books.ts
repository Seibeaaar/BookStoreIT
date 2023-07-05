export const calculateBookTotal = (price: string, quantity: number) => {
  const formattedPrice = +price.replace('$', '');
  return formattedPrice * quantity;
};

export const formatPriceString = (price: number) => `$${price.toFixed(2)}`;

export const formatBookDescription = (desc: string) => {
  const sentences = desc.split('.').filter(Boolean);
  return sentences.slice(0, sentences.length - 1).join('.') + '.';
};
