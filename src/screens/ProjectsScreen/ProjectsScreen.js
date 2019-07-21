import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

export default function ProjectsScreen({ navigation }) {
  return (
    <Container>
      <Text>Projects Component</Text>
    </Container>
  );
}

ProjectsScreen.navigationOptions = {
  header: null,
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text``;
