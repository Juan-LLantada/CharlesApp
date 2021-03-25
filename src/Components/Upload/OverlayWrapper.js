import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {width, height} from '../../Constants/styles';
import {Overlay} from 'react-native-elements';
import {connect} from 'react-redux';
import Gallery from 'react-native-image-gallery';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  level: state.uploadValues.level,
  photo: state.uploadValues.photo,
});
class OverlayWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: false,
    };
  }

  render() {
    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={this.props.level == 2 ? true : false}
        onBackdropPress={() => {
          this.props.onBack();
        }}>
        <View style={styles.innerOverlay}>
          <View style={styles.flex1}>
            <Gallery
              style={{flex: 1, backgroundColor: 'black'}}
              images={[{source: {uri: this.props.source}}]}
            />
          </View>
          {this.props.children}
        </View>
      </Overlay>
    );
  }
}
export default connect(mapStateToProps)(OverlayWrapper);
const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  innerOverlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  flex1: {
    width: '100%',
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
