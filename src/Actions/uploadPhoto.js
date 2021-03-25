import {Alert, Platform} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import {POST2, GET} from '../Constants/fetchFunctions';
import {uploadSucces, failedOp} from '../Constants/alerts';

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

export const setLevel = level => ({
  type: 'SET_LEVEL_UPLOAD',
  payload: level,
});
export const setPhoto = photo => ({
  type: 'SET_PHOTO_UPLOAD',
  payload: photo,
});
export const onUploadPhoto = bool => ({
  type: 'ON_UPLOAD_PHOTO',
  payload: bool,
});
export const setPhotoList = list => ({
  type: 'GET_MAIN_PHOTO_LIST',
  payload: list,
});

export const uploadPhoto = (name, photo, navigation) => {
  return async dispatch => {
    try {
      dispatch(onUploadPhoto(true));
      //POST FUNCTION IN POSTJSON.JS RETURNS API RESPONSE
      let response = await POST2(
        createFormData(photo, {userId: '123'}, name),
        'archivos/imagenes/upload',
      );
      if (response.status == 200) {
        await dispatch(setLevel(1));
        await dispatch(setPhoto(null));
        await dispatch(onUploadPhoto(false));
        uploadSucces(navigation);
      } else {
        await dispatch(setLevel(1));
        await dispatch(setPhoto(null));
        await dispatch(onUploadPhoto(false));
        failedOp();
      }
    } catch (error) {}
  };
};

export const getPhotoList = () => {
  return async dispatch => {
    try {
      dispatch(onUploadPhoto(true));
      //POST FUNCTION IN POSTJSON.JS RETURNS API RESPONSE
      let response = await GET('archivos/imagenes/files');
      if (response[0] == 200) {
        let urls = [];
        for (var i in response[1]) {
          let string = `http://161.35.105.244/imagenes/${response[1][i].name}`;
          urls.push(string);
        }
        await dispatch(setPhotoList(urls));
        dispatch(onUploadPhoto(false));
      } else {
        failedOp();
        dispatch(onUploadPhoto(false));
      }
    } catch (error) {}
  };
};
