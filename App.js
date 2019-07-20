import React from 'react';
import styled from 'styled-components/native';
import Card from './src/components/Card/Card';

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require('./assets/avatar.jpg')} />
        <Title>Welcome Back, </Title>
        <Name>Luke</Name>
      </TitleBar>
      <Subtitle>Continue Learning</Subtitle>
      <Card />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin: 50px 0 0;
  padding: 0 0 0 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: #3c4560;
  border-radius: 22px;
  margin: 0 0 0 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin: 50px 0 0 20px;
  text-transform: uppercase;
`;
