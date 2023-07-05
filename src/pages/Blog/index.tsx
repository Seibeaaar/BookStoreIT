import { useEffect } from 'react';
import PageHeader from 'src/components/PageHeader';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/redux/store';
import { AppStore } from 'src/types/redux';
import { getArticles } from 'src/redux/thunks/content';
import { BLOG_HEADER_CONTENT } from 'src/constants/headers';

import ContentBox from 'src/components/ui/ContentBox';
import ArticleItem from './components/ArticleItem';
import { BlogContainer } from './Blog.styled';

const BlogPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles } = useSelector((state: AppStore) => state.content);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  return (
    <main>
      <PageHeader {...BLOG_HEADER_CONTENT} />
      <BlogContainer>
        <ContentBox>
          {articles.map((article) => (
            <ArticleItem article={article} key={article.id} />
          ))}
        </ContentBox>
      </BlogContainer>
    </main>
  );
};

export default BlogPage;
