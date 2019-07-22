/* eslint react/forbid-prop-types: 0 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, ScrollView } from 'react-native';
import * as Icon from '@expo/vector-icons';
import Markdown from 'react-native-showdown';

import {
  htmlStyles,
  Container,
  Cover,
  Hero,
  Wrapper,
  Logo,
  Subtitle,
  Title,
  Caption,
  CloseButton,
  Content,
} from './SectionScreen_Styles';

export default function SectionScreen({ navigation }) {
  const section = navigation.getParam('section');
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    return () => {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  return (
    <ScrollView>
      <Container>
        <Cover>
          <Hero source={{ uri: section.image.url }} />
          <Wrapper>
            <Logo source={{ uri: section.logo.url }} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon.Ionicons name="ios-close" size={36} color="#4775f2" />
        </CloseButton>
        <Content>
          <Markdown body={section.content} pureCSS={htmlStyles} scalesPageToFit={false} scrollEnabled={false} />
        </Content>
      </Container>
    </ScrollView>
  );
}

SectionScreen.navigationOptions = {
  header: null,
};

SectionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
