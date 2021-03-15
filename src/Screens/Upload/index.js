import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {Aviso, Upload as UploadComp, Level1} from '../../Components/Upload';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {height, width} from '../../Constants/styles';
import {handleUploadPhoto} from '../../Assets/Functions/upload';
import {retrieveData} from '../../Constants/asyncStorage';
import {setLevel, setPhoto} from '../../Actions/uploadPhoto';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  level: state.uploadValues.level,
  photo: state.uploadValues.photo,
});
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
    this._retrieveData();
  }
  _retrieveData = async () => {
    try {
      let data = await retrieveData('Login');
      this.setState({
        values: JSON.parse(data),
      });
    } catch (error) {}
  };
  uploadPhoto = async () => {
    let value = await handleUploadPhoto(
      this.props.navigation,
      this.props.photo,
      this.state.values.name,
    );
    if (value) {
      await this.props.dispatch(setLevel(1));
      await this.props.dispatch(setPhoto(null));
      this.props.navigation.navigate('Comunidad');
    } else {
      await this.props.dispatch(setLevel(1));
      await this.props.dispatch(setPhoto(null));
      this.props.navigation.navigate('Comunidad');
    }
  };
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ImageBackground source={Bg} style={styles.bg}>
          <View style={styles.containter}>
            {this.props.level == 1 && <Level1 />}
            {this.props.level == 2 && (
              <UploadComp
                handleUploadPhoto={this.uploadPhoto.bind(this)}
                uri={this.state.photo.uri}
              />
            )}
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(Upload);
const styles = StyleSheet.create({
  bg: {
    height: height,
    width: width,
  },
  containter: {
    width: '100%',
    padding: 10,
  },
});
