import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {elevation10} from '../../Constants/styles';
import {Camera, Back} from '../../Constants/Icons/design';
import {Aviso} from './index';
import {setLevel, setPhoto} from '../../Actions/uploadPhoto';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
        },
      );
      // If CAMERA Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else return true;
};
requestExternalWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        },
      );
      // If WRITE_EXTERNAL_STORAGE Permission is granted
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      alert('Write permission err', err);
    }
    return false;
  } else return true;
};
class Level1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  captureImage = async type => {
    let options = {
      mediaType: type,
      quality: 1,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert(
            'Lo sentimos, la cámara no esta disponible en este dispositivo.',
          );
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        this.set(response);
      });
    }
  };
  chooseFile = type => {
    let options = {
      mediaType: type,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('cancelado');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Lo sentimos, la cámara no esta disponible en este dispositivo.');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      this.set(response);
    });
  };

  set = async response => {
    await this.props.dispatch(setPhoto(response));
    this.props.dispatch(setLevel(2));
  };

  render() {
    return (
      <View style={styles.container}>
        <Aviso />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.chooseFile();
          }}>
          <Text style={styles.btnTxt}>ESCOGER FOTO DE LA BIBLIOTECA</Text>
          <View style={styles.icon}>
            <Camera width={50} height={50} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.captureImage();
          }}>
          <Text style={styles.btnTxt}>TOMAR UNA FOTO</Text>
          <View style={styles.icon}>
            <Camera width={50} height={50} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => {
            this.props.navRedux.navigate('Comunidad');
          }}>
          <Back width={40} height={40} />
          <Text style={styles.cancel}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Level1);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    margin: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d4e1d8',
    ...elevation10,
  },
  btnTxt: {color: '#121e2f', marginLeft: 20, fontWeight: 'bold'},
  icon: {
    borderRadius: 100,
    backgroundColor: 'rgba(72,146,167,0.4)',
    padding: 10,
  },
  buttonCancel: {
    padding: 10,
    width: '100%',
    backgroundColor: '#4e9a2d',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cancel: {color: '#ffffff', fontWeight: 'bold', marginLeft: 10},
});
