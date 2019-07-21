import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Course(props) {
  const { hero, logo, subtitle, title, avatar, caption, author } = props;

  return (
    <Container>
      <Cover>
        <Hero source={hero} />
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

const Container = styled.View`
  width: ${screenWidth - 40};
  height: 335px;
  border-radius: 14px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  elevation: 10;
  margin: 15px 20px;
`;

const Cover = styled.View`
  height: 260px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Hero = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  width: 170px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 20px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  max-width: 260px;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
