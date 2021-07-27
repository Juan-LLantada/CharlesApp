import {User, Password} from './Icons/design';

export const inputFields = [
  {
    placeholder: 'Nombre Completo',
    key: 'name',
    secure: false,
    cap: 'sentences',
  },
  {
    placeholder: 'Nombre del producto',
    key: 'productName',
    secure: false,
    cap: 'sentences',
  },
  {
    placeholder: 'Dirección de entrega',
    key: 'address',
    secure: false,
    cap: 'sentences',
  },
  {
    placeholder: 'Correo de contacto',
    key: 'emailTransfer',
    secure: false,
    cap: 'none',
  },
];

export const regFields = [
  {placeholder: 'Nombre', key: 'name', secure: false, cap: 'sentences'},
  {placeholder: 'Email', key: 'email', secure: false, cap: 'none'},
  {placeholder: 'Contraseña', key: 'password', secure: true, cap: 'none'},
];
export const passwordRecovery = [
  {placeholder: 'Email', key: 'email', secure: false, cap: 'none'},
  {placeholder: 'Contraseña', key: 'pass', secure: true, cap: 'none'},
  {
    placeholder: 'Confirmar contraseña',
    key: 'passwordConfirm',
    secure: true,
    cap: 'none',
  },
];

export const loginInput = [
  {
    Icon: User,
    placeholder: 'ejemplo@ejemplo.com',
    secure: false,
    label: 'Usuario (Correo electrónico)',
    key: 'user',
  },
  {
    Icon: Password,
    placeholder: 'Contraseña',
    secure: true,
    label: 'Contraseña',
    key: 'password',
  },
];
