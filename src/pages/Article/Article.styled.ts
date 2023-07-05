import styled from 'styled-components';

export const Container = styled.section`
  padding: 75px 0;
`;

export const ArticleImage = styled.img`
  width: 100%;
  max-height: 450px;
`;

export const ArticleContent = styled.article`
  h6 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
    margin-top: 44px;
    margin-bottom: 8px;
  }
  p {
    font-size: 19px;
    color: ${(props) => props.theme.colors.grey};
    line-height: calc(19px * 1.3);
  }
  ol,
  ul {
    margin-top: 22px;
    padding-left: 44px;
    list-style: none;
    li {
      font-size: 19px;
      color: ${(props) => props.theme.colors.primary};
      line-height: calc(19px * 1.3);
      margin-bottom: 12px;
      &::before {
        content: '';
        background-color: ${(props) => props.theme.colors.secondary};
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-left: -2em;
        margin-right: 20px;
      }
    }
  }
`;
