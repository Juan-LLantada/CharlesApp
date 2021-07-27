import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ImageCard} from './index';
import {Reload} from '../../Constants/Icons/design';
import {connect} from 'react-redux';
import {getPhotoList} from '../../Actions/uploadPhoto';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  level: state.uploadValues.level,
  photo: state.uploadValues.photo,
  onUploadPhoto: state.uploadValues.onUploadPhoto,
  photoList: state.uploadValues.photoList,
  user: state.userLoginValues,
});

class AllPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [],
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.dispatch(getPhotoList());
            }}
            style={styles.btn}>
            <Reload style={{width: 25, height: 25}} />
            <Text>Volver a cargar!</Text>
          </TouchableOpacity>
          {this.props.photoList.map((image, index) => (
            <View style={styles.imageV} key={index}>
              <ImageCard uri={image} />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(AllPhotos);
const styles = StyleSheet.create({
  imageV: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: 'auto',
  },
  btn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
