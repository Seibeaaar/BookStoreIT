import styled from 'styled-components';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Article } from 'src/types/firebase';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';

const Container = styled.article`
  width: calc(33% - 34px);
  margin-bottom: 50px;
  box-shadow: 0px 35px 25px 0px rgba(4, 11, 20, 0.04);
`;

const ArticleMeta = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 30px;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 300px;
`;

const ItemInfo = styled(Text)`
  margin: 14px 0 27px 0;
`;

const ReadMore = styled(NavLink)`
  outline: none;
  text-decoration: none;
  transition: border-bottom-color 0.25s ease;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  p {
    transition: color 0.25s ease;
  }
  &:hover {
    border-bottom-color: ${(props) => props.theme.colors.secondary};
    p {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

interface IArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<IArticleItemProps> = ({ article }) => {
  const publishedDate = new Date(article.createdAt.seconds * 1000);
  return (
    <Container>
      <ArticleImage src={article.image} alt="Article image" />
      <ArticleMeta>
        <Text size="h6" as="h6" weight="700">
          {article.title}
        </Text>
        <ItemInfo color="grey">{article.thumbTetx}</ItemInfo>
        <Flex alignItems="center" justifyContent="space-between">
          <ReadMore to="/">
            <Text weight="700" family="Cardo">
              Read More
            </Text>
          </ReadMore>
          <Text>{moment(publishedDate).format('DD.MM.YYYY')}</Text>
        </Flex>
      </ArticleMeta>
    </Container>
  );
};

export default ArticleItem;
