import styled from 'styled-components';
import { Color, FontWeight, Typegraphy, FontFamily } from 'src/types/ui';

interface ITextProps {
  size?: Typegraphy;
  color?: Color;
  weight?: FontWeight;
  family?: FontFamily;
}

const Text = styled.p<ITextProps>`
  color: ${(props) => props.theme.colors[props.color || 'primary']};
  font-size: ${(props) => props.theme.typography[props.size || 'base']}px;
  line-height: ${(props) =>
    props.theme.typography[props.size || 'base'] * 1.3}px;
  font-weight: ${(props) => props.weight || 'inherit'};
  font-family: ${(props) => props.family || 'inherit'};
`;

export default Text;
