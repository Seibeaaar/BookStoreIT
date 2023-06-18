import styled from 'styled-components';
import Text from './Text';
import React from 'react';
import { Color } from 'src/types/ui';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  background?: boolean;
  text: string;
  width?: number;
  textColor?: Color;
}

const ButtonTemplate = styled.button<IButtonProps>`
  cursor: pointer;
  text-align: center;
  padding: 10px 0;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  outline: none;
  transition: all 0.25s ease;
  width: ${(props) => props.width || 220}px;
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
    background-color: ${(props) => props.theme.colors.grey};
  }
`;

const Button: React.FC<IButtonProps> = (props) => {
  const { background = true } = props;
  const RenderedButton = background ? PrimaryButton : BorderedButton;
  return (
    <RenderedButton {...props}>
      <Text weight="300" family="Cardo" color={props.textColor}>
        {props.text}
      </Text>
    </RenderedButton>
  );
};

export default Button;
