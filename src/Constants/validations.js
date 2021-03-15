import * as yup from 'yup';

export const product = yup.object({
  name: yup.string().required('Nombre completo necesario.'),
  productName: yup.string().required('Nombre del producto necesario.'),
  address: yup.string().required('Dirección de entrega necesaria.'),
  emailTransfer: yup.string().required('Correo nnecesario.'),
});

export const register = yup.object({
  name: yup.string().required('Campo necesario!'),
  password: yup.string().required('Campo necesario!'),
  email: yup.string().required('Campo necesario!'),
});
