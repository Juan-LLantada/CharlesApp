import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Bios} from '../../Constants/Icons/logos';
import {FadeInView} from '../../Constants/FadeInView';
import {setNavigation} from '../../Actions/navigation';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  state: state,
});
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigation();
  }
  navigation = async () => {
    try {
      setTimeout(async () => {
        await this.props.dispatch(setNavigation(this.props.navigation));
        this.props.navigation.navigate('Logos');
      }, 3000);
    } catch (error) {}
  };

  render() {
    return (
      <FadeInView style={styles.fadeInView}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.container3}>
            <Bios width={270} height={270} />
          </View>
        </View>
      </FadeInView>
    );
  }
}
export default connect(mapStateToProps)(Splash);
const styles = StyleSheet.create({
  img: {width: 270, height: 270, borderRadius: 270},
  fadeInView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container3: {
    width: 270,
    backgroundColor: 'white',
    height: 270,
    borderRadius: 215,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
