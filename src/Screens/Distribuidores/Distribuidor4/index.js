import React, {Component} from 'react';
import {distribuidor4} from '../../../Constants/distributors';
import {DistributorCard} from '../../../Components/Distribuidores';

export default class Distribuidor4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DistributorCard
        data={distribuidor4}
        titulo1={'DIRECCIÓN'}
        titulo2={'CONTACTO'}
      />
    );
  }
}
