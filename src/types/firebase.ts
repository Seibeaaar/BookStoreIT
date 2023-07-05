interface Partner {
  logo: string;
  name: string;
  desc: string;
}

export interface HomeContent {
  learnBullets: string[];
  partners: Partner[];
}

export interface Article {
  title: string;
  content: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  image: string;
  thumbTetx: string;
  id: string;
}
