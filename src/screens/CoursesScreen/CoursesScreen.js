import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

export default function CoursesScreen({ navigation }) {
  return (
    <Container>
      <Text>Courses Component</Text>
    </Container>
  );
}

CoursesScreen.navigationOptions = {
  header: null,
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text``;
