import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {AllPhotos, Favorites} from '../../Components/Community/index';
import {Tab, Tabs as TabsComponent, TabHeading} from 'native-base';
import {Header} from '../../Components/Global';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [],
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={this.props.navigation} titulo={'AVER'} />
        <TabsComponent>
          <Tab
            heading={
              <TabHeading>
                <Text>Todos</Text>
              </TabHeading>
            }>
            <AllPhotos />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Los Favoritos!</Text>
              </TabHeading>
            }>
            <Favorites />
          </Tab>
        </TabsComponent>
      </SafeAreaView>
    );
  }
}
