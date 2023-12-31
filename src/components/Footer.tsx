import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContentBox from './ui/ContentBox';
import { ReactComponent as Logo } from 'src/assets/icons/Logo.svg';
import { ReactComponent as ThreeDots } from 'src/assets/icons/ThreeDots.svg';
import { SOCIAL_LINKS, NAV_LINKS } from 'src/constants/nav';
import Text from './ui/Text';
import Flex from './ui/Flex';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
`;

const FooterContent = styled(Flex)`
  padding: 64px 0;
`;

const SectionHeader = styled(Text)`
  margin-bottom: 30px;
`;

const SocialContainer = styled(Flex)`
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const ContactInfo = styled.article`
  max-width: 30%;
  @media screen and (max-width: 1064px) {
    max-width: 100%;
  }
`;

const ExploreLinkText = styled(Text)`
  transition: color 0.25s ease;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const InfoTitle = styled(Text)`
  width: 76px;
  margin-right: 14px;
`;

const Footer = () => {
  const { large, small } = useWindowDimensions();
  return (
    <Container>
      <ContentBox>
        <FooterContent
          as="section"
          alignItems={large ? 'flex-start' : 'center'}
          justifyContent="space-between"
          column={large}
          gap={large ? 48 : 0}
        >
          <Flex
            gap={small ? 40 : 100}
            as="article"
            width={large ? '100%' : 'auto'}
            column={small}
            justifyContent={large ? 'space-between' : 'flex-start'}
          >
            <div>
              <Flex alignItems="center" gap={12}>
                <Logo />
                <Text size="h6" as="h6" color="white">
                  BookStoreIT
                </Text>
              </Flex>
              <SocialContainer alignItems="center" gap={10}>
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink href={link.href} target="_blank" key={link.href}>
                    {link.icon}
                  </SocialLink>
                ))}
              </SocialContainer>
            </div>
            <div>
              <SectionHeader
                size="h6"
                family="Cardo"
                weight="700"
                color="white"
              >
                Explore:
              </SectionHeader>
              <Flex column gap={14}>
                {NAV_LINKS.map((link) => (
                  <Link to={link.path}>
                    <Flex alignItems="center" gap={12}>
                      <ThreeDots />
                      <ExploreLinkText color="grey">
                        {link.name}
                      </ExploreLinkText>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </div>
          </Flex>
          <ContactInfo>
            <SectionHeader size="h6" family="Cardo" weight="700" color="white">
              Keep in touch
            </SectionHeader>
            <Flex gap={14} column>
              <Flex>
                <InfoTitle color="white" weight="700" family="Cardo">
                  Address:
                </InfoTitle>
                <Text color="grey">
                  24A Kingston St, Las Vegas NC 28202, USA.
                </Text>
              </Flex>
              <Flex>
                <InfoTitle color="white" weight="700" family="Cardo">
                  Mail:
                </InfoTitle>
                <a href="mailto:support@bookstoreit.com">
                  <Text color="grey">support@bookstoreit.com</Text>
                </a>
              </Flex>
              <Flex>
                <InfoTitle color="white" weight="700" family="Cardo">
                  Phone:
                </InfoTitle>
                <a href="tel:(+22) 123 - 4567 - 900">
                  <Text color="grey">(+22) 123 - 4567 - 900</Text>
                </a>
              </Flex>
            </Flex>
          </ContactInfo>
        </FooterContent>
      </ContentBox>
    </Container>
  );
};

export default Footer;
