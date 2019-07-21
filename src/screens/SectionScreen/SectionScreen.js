import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export default function SectionScreen({ navigation }) {
  return (
    <Container>
      <Text>SectionScreen Component</Text>
      <RectButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Close</Text>
      </RectButton>
    </Container>
  );
}

SectionScreen.navigationOptions = {
  header: null,
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text``;
