import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {width} from '../../Constants/styles';
import {Upload as UpIcon} from '../../Constants/Icons/design';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View style={styles.imgView}>
          <Image source={{uri: this.props.uri}} style={styles.img} />
        </View>
        <TouchableOpacity
          style={styles.buttonUpload}
          onPress={() => {
            this.props.handleUploadPhoto();
          }}>
          <UpIcon />
          <Text style={styles.btnTxt}>SUBIR!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width - 40,
    height: width - 40,
  },
  buttonUpload: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderColor: 'white',
    alignSelf: 'center',
  },
  btnTxt: {color: 'white', marginTop: 10},
  imgView: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    borderColor: 'white',
    marginVertical: 20,
  },
});
