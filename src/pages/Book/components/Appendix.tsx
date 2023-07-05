import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppStore } from 'src/types/redux';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';

const AppendixContainer = styled.section`
  margin-top: 48px;
`;

const WebsiteLink = styled.a`
  height: 50px;
  width: 240px;
  border: none;
  background-color: ${(props) => props.theme.colors.tertiary};
  outline: none;
  text-decoration: none;
  transition: background-color 0.25s ease;
  display: flex;
  align-items: center;
  p {
    transition: color 0.25s ease;
    text-align: center;
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    p {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const BookAppendix = () => {
  const { singleBook } = useSelector((state: AppStore) => state.books);

  const renderPDFs = () => {
    if (!singleBook?.pdf) {
      return null;
    }

    const pdfLinks = Object.entries(singleBook?.pdf);

    return (
      <Flex column gap={24} alignItems="center">
        <Text as="h5" size="h5" weight="700">
          or check out pdf files available
        </Text>
        {pdfLinks.map(([title, url]) => (
          <WebsiteLink href={url} key={title} target="_blank">
            <Text weight="700" family="Cardo">
              {title}
            </Text>
          </WebsiteLink>
        ))}
      </Flex>
    );
  };

  return (
    <AppendixContainer>
      <ContentBox>
        <Flex gap={24} column alignItems="center" justifyContent="center">
          <WebsiteLink target="_blank" href={singleBook?.url}>
            <Text weight="700" family="Cardo">
              Read more on website
            </Text>
          </WebsiteLink>
          {renderPDFs()}
        </Flex>
      </ContentBox>
    </AppendixContainer>
  );
};

export default BookAppendix;
