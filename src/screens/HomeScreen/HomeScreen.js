/* eslint react/forbid-prop-types: 0 */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Message,
  RootView,
  AnimatedContainer,
  TitleBar,
  Avatar,
  Title,
  Name,
  Subtitle,
  CardButton,
} from './HomeScreen_Styles';

import courses from '~/data/courses';
import logos from '~/data/logos';

import Card from '~/components/Card';
import Logo from '~/components/Logo';
import Course from '~/components/Course';
import Menu from '~/components/Menu';

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        caption
        image {
          url
        }
        logo {
          url
        }
        content
      }
    }
  }
`;

function HomeScreen({ action, openMenu, navigation }) {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  const toggleMenu = useCallback(() => {
    if (action === 'openMenu') {
      Animated.spring(opacity, {
        toValue: 0.5,
        useNativeDriver: true,
      }).start();
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true,
      }).start();

      StatusBar.setBarStyle('light-content', true);
    }

    if (action === 'closeMenu') {
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true,
      }).start();
      StatusBar.setBarStyle('dark-content', true);
    }
  }, [action, opacity, scale]);

  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);

  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <SafeAreaView>
          <ScrollView style={{ height: '100%' }}>
            <TitleBar>
              <TouchableOpacity onPress={openMenu} style={{ position: 'absolute', top: 0, left: 0 }}>
                <Avatar source={{ uri: 'https://avatars3.githubusercontent.com/u/14251143?v=4' }} />
              </TouchableOpacity>
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
              contentContainerStyle={{ paddingRight: 20, paddingBottom: 30, paddingTop: 15 }}
            >
              <Query query={CardsQuery}>
                {({ loading, error, data }) => {
                  if (loading) return <Message>Loading...</Message>;
                  if (error) return <Message>Could not fetch data =/</Message>;

                  return (
                    <>
                      {data.cardsCollection.items.map(card => (
                        <CardButton
                          key={card.title}
                          onPress={() => {
                            navigation.push('Section', {
                              section: card,
                            });
                          }}
                        >
                          <Card
                            title={card.title}
                            hero={card.image}
                            logo={card.logo}
                            caption={card.caption}
                            subtitle={card.subtitle}
                          />
                        </CardButton>
                      ))}
                    </>
                  );
                }}
              </Query>
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
      </AnimatedContainer>
    </RootView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({ action: state.action });

const mapDispatchToProps = dispatch => ({
  openMenu: () => dispatch({ type: 'OPEN_MENU' }),
});

HomeScreen.propTypes = {
  action: PropTypes.string.isRequired,
  openMenu: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
