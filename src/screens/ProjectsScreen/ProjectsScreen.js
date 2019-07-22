import React, { Component } from 'react';
import { PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import Project from '~/components/Project';

const projects = [
  {
    title: 'Price Tag',
    image: require('~/assets/background5.jpg'),
    author: 'Liu Yi',
    text:
      'Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China.',
  },
  {
    title: 'The DM App - Ananoumous Chat',
    image: require('~/assets/background6.jpg'),
    author: 'Chad Goodman',
    text:
      'Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. ',
  },
  {
    title: 'Nikhiljay',
    image: require('~/assets/background7.jpg'),
    author: "Nikhil D'Souza",
    text:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it.",
  },
];

export default class ProjectsScreen extends Component {
  state = {
    pan: new Animated.ValueXY(),
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44),
    thirdScale: new Animated.Value(0.8),
    thirdTranslateY: new Animated.Value(-50),
    index: 0,
  };

  componentWillMount() {
    const { pan, scale, translateY, thirdScale, thirdTranslateY } = this.state;
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        const positionY = pan.y.__getValue();
        const positionX = pan.x.__getValue();

        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();

        Animated.spring(thirdScale, {
          toValue: 0.9,
          useNativeDriver: true,
        }).start();
        Animated.spring(thirdTranslateY, {
          toValue: 44,
          useNativeDriver: true,
        }).start();
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
        const positionX = pan.x.__getValue();
        const { index } = this.state;

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
    const { pan, scale, translateY, thirdScale, thirdTranslateY, index } = this.state;
    return (
      <Container>
        <Animated.View
          style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
          {...this._panResponder.panHandlers}
        >
          <Project
            title={projects[index].title}
            image={projects[index].image}
            author={projects[index].author}
            text={projects[index].text}
          />
        </Animated.View>
        <StackCard style={{ transform: [{ scale }, { translateY }] }}>
          <Project
            title={projects[this.getNextIndex(index)].title}
            image={projects[this.getNextIndex(index)].image}
            author={projects[this.getNextIndex(index)].author}
            text={projects[this.getNextIndex(index)].text}
          />
        </StackCard>
        <ThirdStackCard style={{ transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }] }}>
          <Project
            title={projects[this.getNextIndex(index + 1)].title}
            image={projects[this.getNextIndex(index + 1)].image}
            author={projects[this.getNextIndex(index + 1)].author}
            text={projects[this.getNextIndex(index + 1)].text}
          />
        </ThirdStackCard>
      </Container>
    );
  }
}

ProjectsScreen.navigationOptions = {
  header: null,
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const StackCard = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ThirdStackCard = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
