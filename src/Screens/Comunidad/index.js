import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {
  Welcome,
  Banner,
  MenuButton,
  AllPhotos,
  Favorites,
} from '../../Components/Community/index';
import {getPhotoList} from '../../Assets/Functions/community';
export default class Comunidad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [],
      all: true,
      favorites: false,
      indicator: true,
    };
    this.getPhotos();
  }

  tabFunction(all, fav) {
    this.setState({
      all: all,
      favorites: fav,
    });
  }

  getPhotos = async () => {
    this.setState({
      indicator: true,
    });
    try {
      const value = await getPhotoList();
      if (value !== null) {
        this.setState(
          {
            url: value,
          },
          () => {
            console.log(this.state.url);
            this.setState({
              indicator: false,
            });
          },
        );
      } else {
        this.setState({
          indicator: false,
        });
      }
    } catch (error) {}
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.container}>
            <Welcome navigation={this.props.navigation} />
            <View style={styles.banner}>
              <Text style={styles.text}>Checa nuestros cultivos!</Text>
            </View>
            <MenuButton tabFunction={this.tabFunction.bind(this)} />
            <View style={{width: '100%', height: 'auto', paddingTop: 10}}>
              {this.state.indicator && (
                <ActivityIndicator size={'large'} color={'lightgrey'} />
              )}
              {this.state.all && !this.state.indicator && (
                <AllPhotos
                  url={this.state.url}
                  getPhotos={this.getPhotos.bind(this)}
                />
              )}
              {this.state.favorites && <Favorites />}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
/**
 *
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  banner: {
    width: '100%',
    backgroundColor: '#121e2f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontWeight: 'bold'},
});
