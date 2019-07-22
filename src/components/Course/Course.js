import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { Container, Cover, Hero, Logo, Title, Subtitle, Content, Avatar, Caption, Author } from './Course_Styles';

const screenWidth = Dimensions.get('window').width;

export default function Course({ hero, logo, subtitle, title, avatar, caption, author }) {
  return (
    <Container screenWidth={screenWidth}>
      <Cover>
        <Hero source={hero} resizeMode="cover" />
        <Logo source={logo} />
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Avatar source={avatar} />
        <Caption>{caption}</Caption>
        <Author>Taught by: {author}</Author>
      </Content>
    </Container>
  );
}

Course.propTypes = {
  hero: PropTypes.node.isRequired,
  logo: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
  caption: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
