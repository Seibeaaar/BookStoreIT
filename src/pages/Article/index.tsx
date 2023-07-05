import ReactHtmlParser from 'react-html-parser';
import { useLocation } from 'react-router-dom';
import PageHeader from 'src/components/PageHeader';
import ContentBox from 'src/components/ui/ContentBox';
import { ArticleContent, ArticleImage, Container } from './Article.styled';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const ArticlePage = () => {
  const { state: article } = useLocation();
  const { medium } = useWindowDimensions();
  return (
    <main>
      {medium ? null : <PageHeader title={article.title} />}
      <Container>
        <ContentBox>
          <ArticleImage src={article.image} alt="Article image" />
          <ArticleContent>{ReactHtmlParser(article.content)}</ArticleContent>
        </ContentBox>
      </Container>
    </main>
  );
};

export default ArticlePage;
