import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {logos} from '../../Constants/data';
import {connect} from 'react-redux';
import {storeData} from '../../Constants/asyncStorage';
import {setSelectedProduct} from '../../Actions/selectedProduct';
import {NavIcon} from '../../Components/Global';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {logos.map((item, index) => (
          <NavIcon
            item={item}
            key={index}
            function={async () => {
              let datos = {
                product: item.title,
              };
              try {
                await this.props.dispatch(setSelectedProduct(item));
                await storeData(datos, 'product');
                this.props.navRedux.navigate(item.route);
              } catch (error) {}
            }}
          />
        ))}
      </View>
    );
  }
}
export default connect(mapStateToProps)(CardList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
