import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 85vw;
  margin: auto;
`;

interface IContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: React.FC<IContentBoxProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ContentBox;
