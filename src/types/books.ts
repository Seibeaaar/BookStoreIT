export interface BookPreview {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  url: string;
  isbn13: string;
}

export interface Book extends BookPreview {
  authors: string | string[];
  publisher: string;
  isbn10: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  pdf?: {
    [name: string]: string;
  };
}
