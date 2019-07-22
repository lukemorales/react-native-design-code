import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  elevation: 8;
  align-items: center;
  justify-content: center;
  margin: 12px 8px;
`;

export const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
