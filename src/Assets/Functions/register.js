import {Alert} from 'react-native';
import moment from 'moment/min/moment-with-locales';

function sendEmail(body) {
  fetch('http://161.35.105.244/api/Correos/Send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Destinatario: body.email,
      Tipo: body.user,
      Fecha: moment(),
    }),
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

export function registrar(body, navigation) {
  fetch('http://161.35.105.244/api/Users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(response => {
      console.log(response);
      console.log('REGISTRO');
      if (response[0] == 200) {
        Alert.alert('Registro exitoso!', 'Gracias por unirte a Epsilon Bios.', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]);
        sendEmail(body);
      } else {
        Alert.alert('Login fallido!', 'Algo salió mal.', [
          {
            text: 'OK',
          },
        ]);
        sendEmail(body);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
