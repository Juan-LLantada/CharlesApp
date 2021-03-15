import React, {Component} from 'react';
import {distribuidor3} from '../../../Constants/distributors';
import {DistributorCard} from '../../../Components/Distribuidores';

export default class Distribuidor3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DistributorCard
        data={distribuidor3}
        titulo1={'DIRECCIÓN'}
        titulo2={'DUDAS Y VENTAS'}
      />
    );
  }
}
