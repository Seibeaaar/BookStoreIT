import styled from 'styled-components';
import Text from './Text';
import React from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  background?: boolean;
  text: string;
  width?: number;
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
    opacity: 0.85;
  }
`;

const BorderedButton = styled(ButtonTemplate)`
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

const Button: React.FC<IButtonProps> = (props) => {
  const { background = true } = props;
  const RenderedButton = background ? PrimaryButton : BorderedButton;
  return (
    <RenderedButton {...props}>
      <Text weight="700" family="Cardo">
        {props.text}
      </Text>
    </RenderedButton>
  );
};

export default Button;
