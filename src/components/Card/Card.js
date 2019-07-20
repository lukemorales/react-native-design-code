import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export default function Card() {
  return (
    <Container>
      <Cover>
        <Image source={require('../../../assets/background2.jpg')} />
        <Title>Styled Components</Title>
      </Cover>
      <Content>
        <Logo source={require('../../../assets/logo-react.png')} />
        <Wrapper>
          <Caption>React Native</Caption>
          <Subtitle>5 of 12 sections</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
}

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin: 20px 0 0 20px;
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
