import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {storeData} from '../../Constants/asyncStorage';
export function postLogin(email, password, navigation) {
  fetch('http://161.35.105.244/api/Users/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(json => {
      console.log(json);
      if (json[0] == 200) {
        getUser(json[1], navigation);
      } else {
        Alert.alert('Lo sentimos', 'Login fallido, revisa tus datos!', [
          {
            text: 'OK',
          },
        ]);
      }
    })
    .catch(err => {
      console.log(err);
    });
}
function getUser(data, navigation) {
  fetch(
    `http://161.35.105.244/api/Users/${data.userId}?access_token=${data.id}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(response => {
      _storeData(response[1], data.id, navigation);
    })
    .catch(err => {
      console.log(err);
    });
}

_storeData = async (data, access, navigation) => {
  try {
    let datos = {
      accessToken: access,
      email: data.email,
      name: data.name,
      userId: data.id,
    };
    await storeData(datos, 'Login');
    Alert.alert('Login exitoso!', 'Gracias por iniciar sesión.', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Logos'),
      },
    ]);
  } catch (error) {}
};
