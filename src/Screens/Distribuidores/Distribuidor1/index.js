import React, {Component} from 'react';
import {distribuidor1} from '../../../Constants/distributors';
import {DistributorCard} from '../../../Components/Distribuidores';

export default class Distribuidor1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DistributorCard
        data={distribuidor1}
        titulo1={'DIRECCIÓN'}
        titulo2={'CONTACTO'}
      />
    );
  }
}
