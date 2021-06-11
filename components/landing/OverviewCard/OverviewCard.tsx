import React from 'react';
import Fade from 'react-reveal/Fade';
import Styles from './OverviewCard.style'

const OverviewCard: React.FC<any> = ({
  sectionHeader,
  sectionDescription,
  title,
  description,
  url,
  reverse
}) => {
  return (
    <Styles.CardWrapper reverse={reverse}>
      <Styles.HeaderContainer>
        <Fade delay={500} mirror={reverse} left>
          <Styles.Header>{sectionHeader}</Styles.Header>
          <Styles.HeaderDescription>{sectionDescription}</Styles.HeaderDescription>
        </Fade>
      </Styles.HeaderContainer>
      <Styles.Wrapper>
        <Fade delay={500} mirror={reverse} right>
          <Styles.ContentContainer>

            <Styles.Title>{title}</Styles.Title>
            <Styles.Description>{description}</Styles.Description>
          </Styles.ContentContainer>
        </Fade>
      </Styles.Wrapper>
    </Styles.CardWrapper>
  )
};

export default OverviewCard;