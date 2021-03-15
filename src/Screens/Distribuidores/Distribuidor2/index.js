import React, {Component} from 'react';
import {distribuidor2} from '../../../Constants/distributors';
import {DistributorCard} from '../../../Components/Distribuidores';

export default class Distribuidor2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DistributorCard
        data={distribuidor2}
        titulo1={'DIRECCIÓN'}
        titulo2={'CONTACTO'}
      />
    );
  }
}
