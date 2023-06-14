import styled from 'styled-components';
import NotFoundBackground from 'src/assets/images/404.webp';
import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import { ReactComponent as Icon404 } from 'src/assets/icons/404.svg';

export const Container = styled(Flex)`
  width: 100vw;
  height: 85vh;
  background-image: ${() => `url(${NotFoundBackground})`};
  background-size: cover;
  background-position: left;
  @media screen and (max-width: 768px) {
    height: 90vh;
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 35px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const NotFoundInfo = styled(Text)`
  margin: 8px 0 35px 0;
  max-width: 580px;
`;

export const NotFoundIcon = styled(Icon404)`
  max-width: 300px;
  max-height: 200px;
`;
