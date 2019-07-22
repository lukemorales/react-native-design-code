import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

export const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

export const Cover = styled.View`
  height: 142px;
  background: black;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  font-size: 13;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;
export const CloseButton = styled(RectButton)`
  position: absolute;
  top: 115px;
  left: 50%;
  margin-left: -22px;
  z-index: 1;
  border-radius: 26px;
  background-color: white;
  elevation: 20;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const CloseView = styled.View`
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  height: ${({ screenHeight }) => screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;
