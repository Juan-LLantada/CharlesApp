import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Camera} from '../../Constants/Icons/design';
import {elevation10} from '../../Constants/styles';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  user: state.userLoginValues,
});
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navRedux.navigate('Upload');
          }}>
          <Text style={styles.buttont}>Compartir imagen</Text>
          <View style={styles.icon}>
            <Camera width={50} height={50} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Banner);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    backgroundColor: '#0d1a1b',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 'auto',
    margin: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d4e1d8',
    ...elevation10,
  },
  buttont: {
    color: '#121e2f',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 20,
  },
  text: {color: 'white', fontStyle: 'italic'},
  icon: {
    borderRadius: 100,
    backgroundColor: 'rgba(72,146,167,0.4)',
    padding: 10,
  },
});
