import {Alert} from 'react-native';
import {_signOutAsync} from './asyncStorage';
export function failedLogin() {
  Alert.alert('Lo sentimos', 'Algo salió mal, intente más tarde.', [
    {
      text: 'OK',
    },
  ]);
}

export function emptyForm() {
  Alert.alert('Login fallido.', 'Favor de rellenar todos lo campos.', [
    {
      text: 'OK',
    },
  ]);
}

export function wrongData() {
  Alert.alert('Lo sentimos.', 'Usuario o contraseña incorrectos.', [
    {
      text: 'OK',
    },
  ]);
}

export function logOut() {
  Alert.alert('Cerrará sesión', 'Desea continuar?', [
    {
      text: 'Continuar',
      onPress: () => _signOutAsync(),
    },
    {
      text: 'Cancelar',
      style: 'cancel',
    },
  ]);
}

export function noSesion(navigation) {
  Alert.alert(
    'Inicia sesión!',
    'Así podrás acceder a todas las funciones de EBios',
    [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Login');
        },
      },
    ],
    {cancelable: false},
  );
}

export function uploadSucces(navigation) {
  Alert.alert(
    'Perfecto!',
    'Tu foto se ha subido con éxito!',
    [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Comunidad');
        },
      },
    ],
    {cancelable: false},
  );
}

export function orderSuccess(navigation) {
  Alert.alert(
    'Perfecto!',
    'Tu pedido ha sido creado con éxito!',
    [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Ventas');
        },
      },
    ],
    {cancelable: false},
  );
}
export function orderFailed(navigation) {
  Alert.alert(
    'Lo sentimos',
    'Algo salió mal, intente más tarde.',
    [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Ventas');
        },
      },
    ],
    {cancelable: false},
  );
}

export function failedOp() {
  Alert.alert('Lo sentimos', 'Algo salió mal, intente más tarde.', [
    {
      text: 'OK',
    },
  ]);
}

export function passChangeSucces(navigation) {
  Alert.alert(
    'Perfecto!',
    'Tu contraseña se ha cambiado con éxito!',
    [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Login');
        },
      },
    ],
    {cancelable: false},
  );
}

export function noExistingEmail() {
  Alert.alert('Lo sentimos', 'Ese correo no se encuentra registrado.', [
    {
      text: 'OK',
    },
  ]);
}
