import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
        <Bios width={270} height={270} />
      </FadeInView>
    );
  }
}
export default connect(mapStateToProps)(Splash);
const styles = StyleSheet.create({
  fadeInView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
