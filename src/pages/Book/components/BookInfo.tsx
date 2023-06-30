import { useSelector } from 'react-redux';
import styled from 'styled-components';
import he from 'he';
import { AppStore } from 'src/types/redux';

import ContentBox from 'src/components/ui/ContentBox';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import { useMemo } from 'react';
import CartController from './CartController';
import { formatBookDescription } from 'src/utils/books';
import BookAppendix from './Appendix';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const BookInfoSection = styled.section`
  padding: 150px 0;
  @media screen and (max-width: 1200px) {
    padding: 75px 0;
  }
`;

const BookImage = styled.img`
  width: 580px;
  height: 580px;
  @media screen and (max-width: 576px) {
    height: 350px;
    width: 300px;
  }
`;

const InfoLabel = styled(Text)`
  width: 120px;
`;

const BookInfo = () => {
  const { singleBook } = useSelector((state: AppStore) => state.books);
  const { extraLarge } = useWindowDimensions();

  const infoItems = useMemo(
    () => [
      {
        label: 'Authors',
        value: singleBook?.authors,
      },
      {
        label: 'Publisher',
        value: singleBook?.publisher,
      },
      {
        label: 'Pages',
        value: singleBook?.pages,
      },
      {
        value: singleBook?.year,
        label: 'Year',
      },
    ],
    [singleBook]
  );

  const bookDescription = useMemo(
    () => formatBookDescription(singleBook?.desc || 'No description provided.'),
    [singleBook]
  );

  return (
    <BookInfoSection>
      <ContentBox>
        <Flex
          column={extraLarge}
          alignItems="center"
          justifyContent="space-between"
        >
          <BookImage src={singleBook?.image} />
          <Flex column as="article" gap={32}>
            <div>
              <Text size="h4" as="h4" weight="700">
                {singleBook?.title}
              </Text>
              <Text color="secondary" size="h5" weight="700">
                {singleBook?.price}
              </Text>
            </div>
            <Flex column gap={48}>
              {/* Sometimes server sends description with HTML special characters */}
              <Text weight="300" color="grey">
                {he.decode(bookDescription)}
              </Text>
              <Flex column gap={24}>
                {infoItems.map((item) => (
                  <Flex alignItems="center" key={item.label}>
                    <InfoLabel weight="300" color="grey" key={item.label}>
                      {item.label}:
                    </InfoLabel>
                    <Text weight="300" color="grey" key={item.label}>
                      {item.value || 'No info'}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <CartController />
          </Flex>
        </Flex>
        <BookAppendix />
      </ContentBox>
    </BookInfoSection>
  );
};

export default BookInfo;
