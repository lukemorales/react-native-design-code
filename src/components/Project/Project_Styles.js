import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export const AnimatedContainer = styled(Animated.View)`
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  elevation: 15;
`;

export const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

export const AnimatedTitle = styled(Animated.Text)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

export const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const AnimatedText = styled(Animated.Text)`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

export const CloseButton = styled.TouchableOpacity`
  background: white;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const AnimatedCloseView = styled(Animated.View)`
  border-radius: 24px;
  overflow: hidden;
  elevation: 20;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 40px;
  right: 20px;
`;
