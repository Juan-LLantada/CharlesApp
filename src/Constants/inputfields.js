import {User, Password} from './Icons/design';

export const inputFields = [
  {placeholder: 'Nombre', key: 'name'},
  {placeholder: 'Nombre del producto', key: 'productName'},
  {placeholder: 'Dirección de entrega', key: 'address'},
  {placeholder: 'Correo de contacto', key: 'emailTransfer'},
];

export const regFields = [
  {placeholder: 'Nombre', key: 'name', secure: false, cap: 'sentences'},
  {placeholder: 'Email', key: 'email', secure: false, cap: 'none'},
  {placeholder: 'Contraseña', key: 'password', secure: true, cap: 'none'},
];

export const loginInput = [
  {
    type: 'user',
    Icon: User,
    placeholder: 'Usuario',
  },
  {
    type: 'password',
    Icon: Password,
    placeholder: 'Contraseña',
  },
];
