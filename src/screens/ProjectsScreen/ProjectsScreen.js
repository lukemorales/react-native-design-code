/* eslint react/forbid-prop-types: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PanResponder, Animated } from 'react-native';
import { connect } from 'react-redux';
import Project from '~/components/Project';
import projects from '~/data/projects';
import { AnimatedMask, Container, AnimatedStackCard, AnimatedThirdStackCard } from './ProjectsScreen_Styles';

class ProjectsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    action: PropTypes.string.isRequired,
  };

  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44),
    thirdScale: new Animated.Value(0.8),
    thirdTranslateY: new Animated.Value(-50),
    opacity: new Animated.Value(0),
    index: 0,
  };

  componentWillMount() {
    const { pan, scale, translateY, thirdScale, thirdTranslateY, opacity } = this.state;
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (event, gestureState) => {
        const { action } = this.props;
        if (gestureState.dx === 0 && gestureState.dy === 0) {
          return false;
        }
        if (action === 'openCard') {
          return false;
        }
        return true;
      },
      onPanResponderGrant: () => {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }),

          Animated.spring(thirdScale, {
            toValue: 0.9,
            useNativeDriver: true,
          }),
          Animated.spring(thirdTranslateY, {
            toValue: 44,
            useNativeDriver: true,
          }),
        ]).start();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        const positionY = pan.y.__getValue();
        const { index } = this.state;

        Animated.timing(opacity, {
          toValue: 0,
        }).start();

        if (positionY > 180) {
          Animated.timing(pan, {
            toValue: { x: 0, y: 800 },
            useNativeDriver: true,
          }).start(() => {
            pan.setValue({
              x: 0,
              y: 0,
            });
            scale.setValue(0.9);
            translateY.setValue(44);
            thirdScale.setValue(0.8);
            thirdTranslateY.setValue(-50);
            this.setState({ index: this.getNextIndex(index) });
          });
        } else {
          Animated.parallel([
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              bounciness: 6,
              useNativeDriver: true,
            }),

            Animated.timing(opacity, {
              toValue: 0,
            }),
            Animated.spring(scale, {
              toValue: 0.9,
              useNativeDriver: true,
            }),
            Animated.spring(translateY, {
              toValue: 44,
              useNativeDriver: true,
            }),

            Animated.spring(thirdScale, {
              toValue: 0.8,
              useNativeDriver: true,
            }),
            Animated.spring(thirdTranslateY, {
              toValue: -50,
              useNativeDriver: true,
            }),
          ]).start();
        }
      },
    });
  }

  getNextIndex = index => {
    const nextIndex = index + 1;

    if (nextIndex > projects.length - 1) {
      return 0;
    }

    return nextIndex;
  };

  render() {
    const { pan, scale, translateY, thirdScale, thirdTranslateY, index, opacity } = this.state;
    return (
      <Container>
        <AnimatedMask
          style={{
            opacity,
          }}
        />
        <Animated.View
          style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
          {...this._panResponder.panHandlers}
        >
          <Project
            title={projects[index].title}
            image={projects[index].image}
            author={projects[index].author}
            text={projects[index].text}
            canOpen
          />
        </Animated.View>
        <AnimatedStackCard style={{ transform: [{ scale }, { translateY }] }}>
          <Project
            title={projects[this.getNextIndex(index)].title}
            image={projects[this.getNextIndex(index)].image}
            author={projects[this.getNextIndex(index)].author}
            text={projects[this.getNextIndex(index)].text}
          />
        </AnimatedStackCard>
        <AnimatedThirdStackCard style={{ transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }] }}>
          <Project
            title={projects[this.getNextIndex(index + 1)].title}
            image={projects[this.getNextIndex(index + 1)].image}
            author={projects[this.getNextIndex(index + 1)].author}
            text={projects[this.getNextIndex(index + 1)].text}
          />
        </AnimatedThirdStackCard>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  action: state.action,
});

export default connect(mapStateToProps)(ProjectsScreen);
