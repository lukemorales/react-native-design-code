import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import * as Icon from '@expo/vector-icons';

export default function MenuOption(props) {
  const { icon, title, text } = props;

  return (
    <Container>
      <IconView>
        <Icon.Ionicons name={icon} size={24} color="#546bfb" />
      </IconView>
      <Content>
        <Title>{title}</Title>
        <Text> {text} </Text>
      </Content>
    </Container>
  );
}

MenuOption.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0 15px 70px;
`;

const IconView = styled.View`
  width: 32;
  height: 32;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24;
  font-weight: 600;
`;

const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
