import React from 'react';
import styled from 'styled-components';

interface IFloatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

const Frame = styled.div`
  position: absolute;
  z-index: 1;
  width: 350px;
  height: 450px;
  border: 4px solid ${(props) => props.theme.colors.secondary};
`;

const Image = styled.img`
  position: relative;
  z-index: 1;
  max-width: 350px;
  height: 450px;
  transform: translate(-15px, -15px);
  box-shadow: 0px 8px 30px -10px rgba(0, 0, 0, 0.75);
`;

const FloatingImage: React.FC<IFloatedImageProps> = (props) => (
  <div>
    <Frame />
    <Image src={props.image} {...props} />
  </div>
);

export default FloatingImage;
