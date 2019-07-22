import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Text } from './Logo_Styles';

export default function Logo({ image, text }) {
  return (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Text> {text} </Text>
    </Container>
  );
}

Logo.propTypes = {
  image: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
