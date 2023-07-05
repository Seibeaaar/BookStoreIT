import styled from 'styled-components';

type FlexAlignment =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch';

interface IFlexProps {
  column?: boolean;
  reverse?: boolean;
  alignItems?: FlexAlignment;
  justifyContent?: FlexAlignment;
  gap?: number;
  width?: string | number;
  height?: string | number;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => {
    const direction = props.column ? 'column' : 'row';
    return `${direction}${props.reverse ? '-reverse' : ''}`;
  }};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: ${(props) => props.gap || 0}px;
  width: ${(props) => {
    const { width } = props;
    if (typeof width === 'number') {
      return `${width}px`;
    }
    return width || 'auto';
  }};
  height: ${(props) => {
    const { height } = props;
    if (typeof height === 'number') {
      return `${height}px`;
    }
    return height || 'auto';
  }};
`;

export default Flex;
