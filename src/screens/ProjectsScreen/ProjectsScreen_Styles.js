import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const AnimatedMask = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4775f237;
  z-index: -5;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

export const AnimatedStackCard = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AnimatedThirdStackCard = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
