import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {elevation10} from '../../Constants/styles';
import {Camera, Back} from '../../Constants/Icons/design';
import {Aviso} from './index';
import ImagePicker from 'react-native-image-picker';
import {setLevel, setPhoto} from '../../Actions/uploadPhoto';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
const photoPickerOptions = {
  title: 'Seleccionar foto',
  takePhotoButtonTitle: 'Tomar una foto',
  chooseFromLibraryButtonTitle: 'Elegir de la biblioteca',
  cancelButtonTitle: 'Cancelar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Level1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  chooseOption = async () => {
    //DISPLAYS DE IMAGE PICKER TO TAKE O CHOOSE A PICTURE
    try {
      ImagePicker.showImagePicker(photoPickerOptions, response => {
        console.log('Response = ', response);
        if (response.error) {
          //log error
          console.log('ImagePicker Error: ', response.error);
        } else if (response.didCancel) {
        } else {
          this.set(response);
        }
      });
    } catch (error) {}
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
            this.chooseOption();
          }}>
          <Text style={styles.btnTxt}>ESCOGE UNA FOTO!</Text>
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
