import styled from 'styled-components/native';

export const Container = styled.View`
  background: white;
  width: ${({ screenWidth }) => screenWidth - 100};
  height: 280px;
`;

export const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  background: #3c4560;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 0 20px;
  width: 170px;
`;

export const Content = styled.View`
  padding: 0 0 0 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

export const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

export const Wrapper = styled.View`
  margin-left: 10px;
`;

export const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 2px;
`;
