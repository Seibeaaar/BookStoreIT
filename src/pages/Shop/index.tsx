import { useEffect, useState } from 'react';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';

import {
  Tick,
  FeaturedContainer,
  FeaturedContent,
  BooksSection,
  CategorySelector,
  ToTheTop,
} from './Shop.styled';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { ReactComponent as ChveronUp } from 'src/assets/icons/ChevronUp.svg';
import NewTab from './components/NewTab';
import SearchTab from './components/SearchTab';

type StoreCategory = 'new' | 'search';

const categoryOptions = [
  {
    title: 'Newest books',
    category: 'new',
  },
  {
    title: 'Search',
    category: 'search',
  },
];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState<StoreCategory>('new');
  const [currentOffset, setCurrentOffset] = useState(0);
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (window.scrollY === 0) {
      scrollBy(0, height * 0.65);
    }
    const offsetListener = () => {
      setCurrentOffset(window.scrollY);
    };
    window.addEventListener('scroll', offsetListener);
    return () => {
      window.removeEventListener('scroll', offsetListener);
    };
  }, []);

  const changeTab = (tab: StoreCategory) => {
    setActiveCategory(tab);
    if (currentOffset === 0) {
      scrollBy(0, height * 0.65);
    }
  };

  return (
    <main>
      <ToTheTop
        visible={currentOffset > 1.3 * height}
        onClick={() => scrollTo(0, height * 0.65)}
      >
        <ChveronUp width={24} height={24} />
      </ToTheTop>
      <FeaturedContainer>
        <FeaturedContent>
          <Flex column alignItems="center" gap={14}>
            <Text weight="700" as="h1" size="h1" color="white">
              My Store
            </Text>
            <Tick />
          </Flex>
          <Text color="grey" center>
            Unlock a world of knowledge with our vast collection of e-books, and
            embark on a reading journey like never before!
          </Text>
        </FeaturedContent>
      </FeaturedContainer>
      <BooksSection>
        <ContentBox>
          <Flex justifyContent="center" gap={48}>
            {categoryOptions.map((option) => (
              <CategorySelector
                key={option.title}
                active={option.category === activeCategory}
                weight="700"
                family="Cardo"
                onClick={() => {
                  changeTab(option.category as StoreCategory);
                }}
                color={option.category === activeCategory ? 'primary' : 'grey'}
              >
                {option.title}
              </CategorySelector>
            ))}
          </Flex>
          {activeCategory === 'new' ? <NewTab /> : <SearchTab />}
        </ContentBox>
      </BooksSection>
    </main>
  );
};

export default ShopPage;
