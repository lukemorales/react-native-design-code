import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import * as Icon from '@expo/vector-icons';

import Card from './src/components/Card';
import Logo from './src/components/Logo';
import Course from './src/components/Course';
import Menu from './src/components/Menu';

const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('./assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('./assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('./assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('./assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Props and Icons',
    image: require('./assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('./assets/logo-react.png'),
  },
  {
    title: 'Static Data and Loop',
    image: require('./assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('./assets/logo-react.png'),
  },
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Design an interactive prototype',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('./assets/background6.jpg'),
    logo: require('./assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Complete guide to designing a site using a collaborative design tool',
  },
];

export default function App() {
  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView style={{ height: '100%' }}>
          <TitleBar>
            <Avatar source={{ uri: 'https://avatars3.githubusercontent.com/u/14251143?v=4' }} />
            <Title>Welcome Back, </Title>
            <Name>Luke</Name>
            <Icon.Ionicons
              name="ios-notifications"
              size={32}
              color="#4775f2"
              style={{ position: 'absolute', top: 5, right: 20 }}
            />
          </TitleBar>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20, paddingBottom: 20, paddingTop: 30, paddingLeft: 12 }}
          >
            {logos.map(logo => (
              <Logo key={logo.text} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20, paddingBottom: 30, paddingTop: 30 }}
          >
            {cards.map(card => (
              <Card
                key={card.title}
                title={card.title}
                hero={card.image}
                logo={card.logo}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          {courses.map(course => (
            <Course
              key={course.title}
              hero={course.image}
              logo={course.logo}
              subtitle={course.subtitle}
              title={course.title}
              avatar={course.avatar}
              caption={course.caption}
              author={course.author}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin: 50px 0 0;
  padding: 0 0 0 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: #3c4560;
  border-radius: 22px;
  margin: 0 0 0 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin: 20px 0 0 20px;
  text-transform: uppercase;
`;
