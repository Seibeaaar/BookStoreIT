import styled from 'styled-components';

import Flex from 'src/components/ui/Flex';
import Text from 'src/components/ui/Text';
import ContentBox from 'src/components/ui/ContentBox';

import { BENEFITS } from 'src/constants/benefits';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const BenefitsSection = styled.section`
  padding: 75px 0;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const IconContainer = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 60px;
  height: 60px;
`;

const BenefitTitle = styled(Text)`
  margin: 12px 0;
`;

const BenefitsContainer = styled(Flex)`
  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
    & > div {
      width: calc(50% - 15px);
    }
    div:last-child {
      width: 100%;
      margin-top: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    & > div {
      width: 100%;
      margin-bottom: 48px;
      margin-top: 0;
    }
  }
`;

const Benefits = () => {
  const { small } = useWindowDimensions();
  return (
    <BenefitsSection>
      <ContentBox>
        <BenefitsContainer
          column={small}
          alignItems="stretch"
          justifyContent="space-between"
        >
          {BENEFITS.map((benefit) => (
            <Flex width={'30%'} column alignItems="center" key={benefit.label}>
              <IconContainer alignItems="center" justifyContent="center">
                {benefit.icon}
              </IconContainer>
              <BenefitTitle size="h4" as="h5" weight="700">
                {benefit.label}
              </BenefitTitle>
              <Text center weight="300">
                {benefit.info}
              </Text>
            </Flex>
          ))}
        </BenefitsContainer>
      </ContentBox>
    </BenefitsSection>
  );
};

export default Benefits;
