import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {elevation5} from '../../Constants/styles';
import {OverlayWrapper} from '.';
import {connect} from 'react-redux';
import {setLevel, setPhoto, uploadPhoto} from '../../Actions/uploadPhoto';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  level: state.uploadValues.level,
  photo: state.uploadValues.photo,
  onUploadPhoto: state.uploadValues.onUploadPhoto,
  user: state.userLoginValues,
});
//A VER ESTA MADRE NO ESTA FUNCIONANDO COMO DEBERIA PAPI
class ImageOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  hidePic() {
    this.props.dispatch(setLevel(1));
    this.props.dispatch(setPhoto(null));
  }
  uploadPhoto = async () => {
    this.props.dispatch(
      uploadPhoto(this.props.user.name, this.props.photo, this.props.navRedux),
    );
  };
  render() {
    return (
      <OverlayWrapper
        isVisible={this.props.viewPhoto}
        onBack={() => {
          this.hidePic();
        }}
        source={this.props.photo.uri}>
        {!this.props.onUploadPhoto ? (
          <View style={styles.flex2}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.hidePic();
              }}>
              <Text>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.uploadPhoto();
              }}>
              <Text>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator size={'large'} color={'green'} />
        )}
      </OverlayWrapper>
    );
  }
}
export default connect(mapStateToProps)(ImageOverlay);
const styles = StyleSheet.create({
  flex2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: '100%',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    borderColor: 'lightgrey',
    ...elevation5,
    backgroundColor: '#ffffff',
  },
});
