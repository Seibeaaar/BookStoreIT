export const hexToRgba = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alpha || 1) + ')';
};
