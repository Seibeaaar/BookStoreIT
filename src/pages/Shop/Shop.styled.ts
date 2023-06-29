import styled from 'styled-components';
import Text from 'src/components/ui/Text';
import Flex from 'src/components/ui/Flex';

export const FeaturedContainer = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 60px 0 120px 0;
  height: 50vh;
  @media screen and (max-width: 992px) {
    height: auto;
  }
`;

export const FeaturedContent = styled.div`
  max-width: 630px;
  margin: auto;
`;

export const Tick = styled.div`
  width: 34px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 28px;
`;

export const BooksSection = styled.section`
  padding: 150px 0;
  @media screen and (max-width: 768px) {
    padding: 75px 0;
  }
`;

export const CategorySelector = styled(Text)<{ active: boolean }>`
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: ${(props) => `scaleX(${props.active ? 1 : 0})`};
    transition: all ease 0.25s;
    transform-origin: left;
    background-color: ${(props) =>
      props.theme.colors[props.active ? 'primary' : 'grey']};
    width: 100%;
    height: 4px;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;

export const ResultsList = styled(Flex)`
  margin: 60px 0;
  flex-wrap: wrap;
`;

export const NotFoundPalceholder = styled.img`
  max-width: 300px;
  height: 300px;
`;

export const SearchRequestInfo = styled(Text)`
  margin-top: 32px;
`;

export const PaginationItem = styled.button<{ active: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : 'transparent'};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  outline: none;
  cursor: pointer;
`;

export const ToTheTop = styled.button<{ visible: boolean }>`
  outline: none;
  border: none;
  position: fixed;
  bottom: 48px;
  right: 48px;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.25s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

export const PaginationControl = styled.button<{ disabled: boolean }>`
  background-color: ${(props) =>
    props.theme.colors[props.disabled ? 'tertiary' : 'secondary']};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.25s ease;
  &:hover {
    opacity: 0.75;
  }
  outline: none;
  border: none;
`;
