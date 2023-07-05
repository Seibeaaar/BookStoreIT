import styled from 'styled-components';
import { ReactComponent as Logo } from 'src/assets/icons/Logo.svg';

const Container = styled.div`
  height: 85vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animated = styled.div`
  @keyframes loading {
    0% {
      opacity: 0;
      transform: translateX(-50vw) scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(2.5);
    }
    100% {
      transform: translateX(50vw) scale(1);
      opacity: 0;
    }
  }
  animation: 2.5s linear infinite forwards loading;
`;

const Loader = () => (
  <Container>
    <Animated>
      <Logo width={120} height={120} />
    </Animated>
  </Container>
);

export default Loader;
