import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { Container, Cover, Image, Title, Content, Logo, Wrapper, Caption, Subtitle } from './Card_Styles';

const screenWidth = Dimensions.get('window').width;

export default function Card({ hero, title, logo, caption, subtitle }) {
  return (
    <Container screenWidth={screenWidth}>
      <Cover>
        <Image source={{ uri: hero.url }} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={{ uri: logo.url }} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
}

Card.propTypes = {
  hero: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  caption: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
