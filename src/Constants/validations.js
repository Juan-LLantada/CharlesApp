import * as yup from 'yup';

export const product = yup.object({
  name: yup.string().required('Nombre completo necesario.'),
  productName: yup.string().required('Nombre del producto necesario.'),
  address: yup.string().required('Dirección de entrega necesaria.'),
  emailTransfer: yup.string().required('Correo nnecesario.'),
});

export const register = yup.object({
  name: yup.string().required('Campo necesario!'),
  password: yup
    .string()
    .required('Campo necesario!')
    .min(5, 'Debe tener al menos 5 caracteres.'),
  email: yup
    .string()
    .required('Campo necesario!')
    .email('Tu correo debe ser válido.'),
});

export const passwordR = yup.object({
  email: yup
    .string()
    .required('Campo necesario!')
    .email('Tu correo debe ser válido.'),
  pass: yup
    .string()
    .required('Campo necesario!')
    .min(5, 'Debe tener al menos 5 caracteres.'),
  passwordConfirm: yup
    .string()
    .required('Campo necesario!')
    .test(
      'passwords-match',
      'Las contraseñas tienen que coincidir.',
      function (value) {
        return this.parent.pass === value;
      },
    ),
});
