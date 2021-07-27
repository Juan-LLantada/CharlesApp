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
  MenuButton,
  AllPhotos,
  Favorites,
} from '../../Components/Community/index';
import {getPhotoList} from '../../Actions/uploadPhoto';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  user: state.userLoginValues,
  onUploadPhoto: state.uploadValues.onUploadPhoto,
});
class Comunidad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      favorites: false,
    };
    this.props.dispatch(getPhotoList());
  }

  tabFunction(all, fav) {
    this.setState({
      all: all,
      favorites: fav,
    });
  }

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
            <View style={styles.pics}>
              {this.state.indicator && (
                <ActivityIndicator size={'large'} color={'lightgrey'} />
              )}
              {this.state.all && <AllPhotos />}
              {this.state.favorites && <Favorites />}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Comunidad);
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
  pics: {width: '100%', height: 'auto', paddingTop: 10},
});
