import {Alert, Platform} from 'react-native';
import moment from 'moment/min/moment-with-locales';

export const createFormData = (photo, body, name) => {
  const data = new FormData();
  let string1 = moment().format().replace(':', '_');
  let string2 = string1.replace('-', '_');
  let extension = photo.type.split('/');

  data.append('photo', {
    name: `&&${name}&&${string2}.${extension[1]}`,
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  });
  return data;
};

export function handleUploadPhoto(photo, name) {
  let value = fetch('http://161.35.105.244/api/archivos/imagenes/upload', {
    method: 'POST',
    body: createFormData(photo, {userId: '123'}, name),
  })
    .then(response => {
      console.log(response);
      Alert.alert('Perfecto!', 'Tu foto se ha subido con éxito!', [
        {
          text: 'OK',
        },
      ]);
      return true;
    })
    .catch(error => {
      console.log('upload error', error);
      Alert.alert('Lo sentimos', 'Ha ocurrido un error', [
        {
          text: 'OK',
        },
      ]);
      return false;
    });
  return value;
}
