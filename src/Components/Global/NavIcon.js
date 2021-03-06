import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import {RightArrow} from '../../Constants/Icons/design';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {width, elevation10} from '../../Constants/styles';
import {setSelectedProduct} from '../../Actions/selectedProduct';
import {connect} from 'react-redux';
import {storeData} from '../../Constants/asyncStorage';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class NavIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.item = this.props.item;
  }
  _storeProduct = async () => {
    let datos = {
      product: this.item.title,
    };
    try {
      await this.props.dispatch(setSelectedProduct(this.item));
      await storeData(datos, 'product');
      this.props.navRedux.navigate(this.item.route);
    } catch (error) {}
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => {
          this._storeProduct();
        }}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.bg}
            imageStyle={{borderRadius: 205}}
            source={Bg}>
            <View style={styles.card}>
              <this.item.Icon style={this.item.size} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>{this.item.title}</Text>
          <RightArrow />
        </View>
      </TouchableOpacity>
    );
  }
}
export default connect(mapStateToProps)(NavIcon);
const styles = StyleSheet.create({
  view: {
    width: width / 2,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    width: width / 2.2,
    height: width / 2.2,
    borderRadius: width / 2.2,
    justifyContent: 'center',
    ...elevation10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  bg: {
    width: width / 2.3,
    height: width / 2.3,
    borderRadius: width / 2.3,
    backgroundColor: '#0d1a1b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: width / 2.4,
    height: width / 2.4,
    borderRadius: width / 2.4,
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  option: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    //backgroundColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 20,
    marginTop: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5,
  },
});
