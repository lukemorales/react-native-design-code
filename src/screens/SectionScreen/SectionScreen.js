import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import * as Icon from '@expo/vector-icons';

export default function SectionScreen({ navigation }) {
  const section = navigation.getParam('section');

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    return () => {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  return (
    <Container>
      {/* <StatusBar /> */}
      <Cover>
        <Hero source={{ uri: section.image.url }} />
        <Wrapper>
          <Logo source={{ uri: section.logo.url }} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <CloseButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon.Ionicons name="ios-close" size={36} color="#4775f2" />
      </CloseButton>
    </Container>
  );
}

SectionScreen.navigationOptions = {
  header: null,
};

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Hero = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 48px;
  left: 20px;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-left: 6px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 300px;
`;

const CloseButton = styled(RectButton)`
  background: white;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  elevation: 15;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 20px;
`;
