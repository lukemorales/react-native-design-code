import styled from 'styled-components';
import { Animated } from 'react-native';

export const Message = styled.Text``;

export const RootView = styled.View`
  background: black;
  flex: 1;
`;

export const AnimatedContainer = styled(Animated.View)`
  flex: 1;
  background: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const TitleBar = styled.View`
  width: 100%;
  margin: 50px 0 0;
  padding: 0 0 0 80px;
`;

export const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: #3c4560;
  border-radius: 22px;
  margin: 0 0 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin: 20px 0 0 20px;
  text-transform: uppercase;
`;

export const CardButton = styled.TouchableOpacity`
  border-radius: 14px;
  overflow: hidden;
  margin: 0 0 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  elevation: 15;
  background: white;
`;
