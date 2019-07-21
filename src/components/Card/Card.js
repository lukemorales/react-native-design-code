import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

export default function Card(props) {
  const { hero, title, logo, caption, subtitle } = props;

  return (
    <Container>
      <Cover>
        <Image source={hero} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
}

Card.propTypes = {
  hero: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  caption: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 0 0 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  elevation: 15;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  background: #3c4560;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 0 20px;
  width: 170px;
`;

const Content = styled.View`
  padding: 0 0 0 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 2px;
`;
