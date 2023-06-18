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
  alignItems?: FlexAlignment;
  justifyContent?: FlexAlignment;
  gap?: number;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: ${(props) => props.gap || 0}px;
`;

export default Flex;
