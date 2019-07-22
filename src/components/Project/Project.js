import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';

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
      <Container
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
          <Title
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
          </Title>
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
        <Text
          style={{
            height: cardHeight.interpolate({
              inputRange: [460, screenHeight],
              outputRange: [100, 1000],
              extrapolate: 'clamp',
            }),
          }}
        >
          {text}
        </Text>
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
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const Container = styled(Animated.View)`
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  elevation: 15;
`;

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

const Title = styled(Animated.Text)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled(Animated.Text)`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const CloseButton = styled.TouchableOpacity`
  background: white;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

const AnimatedCloseView = styled(Animated.View)`
  border-radius: 24px;
  overflow: hidden;
  elevation: 20;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 40px;
  right: 20px;
`;
