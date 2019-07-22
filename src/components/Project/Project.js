import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { connect } from 'react-redux';
import {
  AnimatedGradient,
  AnimatedContainer,
  Cover,
  Image,
  AnimatedTitle,
  Author,
  AnimatedText,
  CloseButton,
  AnimatedCloseView,
} from './Project_Styles';

const mapStateToProps = state => {
  return {
    action: state.action,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openCard: () =>
      dispatch({
        type: 'OPEN_CARD',
      }),
    closeCard: () =>
      dispatch({
        type: 'CLOSE_CARD',
      }),
  };
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('screen').height;
const tabBarHeight = 68;

function Project({ image, title, author, text, canOpen, openCard: dispatchOpenCard, closeCard: dispatchCloseCard }) {
  const [cardWidth] = useState(new Animated.Value(315));
  const [cardHeight] = useState(new Animated.Value(460));

  function openCard() {
    if (!canOpen) {
      return;
    }
    Animated.parallel([
      Animated.spring(cardWidth, {
        toValue: screenWidth,
      }),
      Animated.spring(cardHeight, {
        toValue: screenHeight - tabBarHeight,
      }),
    ]).start();
    dispatchOpenCard();
  }

  function closeCard() {
    Animated.parallel([
      Animated.spring(cardWidth, {
        toValue: 315,
        bounciness: 4,
      }),
      Animated.spring(cardHeight, {
        toValue: 460,
        bounciness: 6,
      }),
    ]).start();
    dispatchCloseCard();
  }

  return (
    <TouchableWithoutFeedback onPress={() => openCard()}>
      <AnimatedContainer
        style={{
          width: cardWidth,
          height: cardHeight,
          borderRadius: cardHeight.interpolate({
            inputRange: [460, screenHeight],
            outputRange: [14, 0],
            extrapolate: 'clamp',
          }),
        }}
      >
        <Cover>
          <Image source={image} />
          <AnimatedTitle
            style={{
              transform: [
                {
                  translateY: cardHeight.interpolate({
                    inputRange: [460, screenHeight],
                    outputRange: [0, 40],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            {title}
          </AnimatedTitle>
          <Author>by {author}</Author>
        </Cover>
        <AnimatedGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
          style={{
            position: 'absolute',
            top: 330,
            zIndex: 5,
            width: '100%',
            height: cardHeight.interpolate({
              inputRange: [460, screenHeight],
              outputRange: [100, 1000],
            }),
          }}
        />
        <AnimatedText
          style={{
            height: cardHeight.interpolate({
              inputRange: [460, screenHeight],
              outputRange: [100, 1000],
              extrapolate: 'clamp',
            }),
          }}
        >
          {text}
        </AnimatedText>
        <AnimatedCloseView
          style={{
            opacity: cardHeight.interpolate({
              inputRange: [460, screenHeight],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}
        >
          <CloseButton onPress={() => closeCard()}>
            <Icon.Ionicons name="ios-close" size={36} color="#4775f2" />
          </CloseButton>
        </AnimatedCloseView>
      </AnimatedContainer>
    </TouchableWithoutFeedback>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

Project.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  canOpen: PropTypes.bool,
  openCard: PropTypes.func.isRequired,
  closeCard: PropTypes.func.isRequired,
};

Project.defaultProps = {
  canOpen: false,
};
