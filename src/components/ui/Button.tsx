import styled from 'styled-components';
import Text from './Text';
import React from 'react';
import { Color } from 'src/types/ui';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  background?: boolean;
  text: string;
  width?: number | string;
  textColor?: Color;
  hoverTextColor?: Color;
}

const ButtonTemplate = styled.button<IButtonProps>`
  cursor: pointer;
  padding: 10px 0;
  height: 50px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  outline: none;
  transition: all 0.25s ease;
  width: ${(props) => {
    if (typeof props.width === 'string') return props.width;
    return `${props.width || 220}px`;
  }};
  p {
    transition: color 0.25s ease;
  }
  &:hover {
    p {
      color: ${(props) =>
        props.theme.colors[props.hoverTextColor || 'primary']};
    }
  }
`;

const PrimaryButton = styled(ButtonTemplate)`
  background-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background-color: transparent;
  }
`;

const BorderedButton = styled(ButtonTemplate)`
  background-color: transparent;
  &:hover {
    border-color: transparent;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const Button: React.FC<IButtonProps> = (props) => {
  const { background = true } = props;
  const RenderedButton = background ? PrimaryButton : BorderedButton;
  return (
    <RenderedButton {...props}>
      <Text center weight="300" family="Cardo" color={props.textColor}>
        {props.text}
      </Text>
    </RenderedButton>
  );
};

export default Button;
