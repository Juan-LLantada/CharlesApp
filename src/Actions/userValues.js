import {POST, GET} from '../Constants/fetchFunctions';
import {storeData, retrieveData} from '../Constants/asyncStorage';
import {failedLogin, emptyForm, wrongData} from '../Constants/alerts';

export const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});

export const userLogin = (email, password, navigation) => {
  return async dispatch => {
    try {
      //POST FUNCTION IN POSTJSON.JS RETURNS API RESPONSE
      let response = await POST(
        {
          email: email,
          password: password,
        },
        'Users/login',
      );
      if (response[0] == 200) {
        await storeData(
          {
            token: response[1].id,
            userId: response[1].userId,
          },
          'Login',
        );
        //POST FUNCTION IN POSTJSON.JS RETURNS API RESPONSE
        let user = await GET(
          `Users/${response[1].userId}?access_token=${response[1].id}`,
        );
        if (user[0] == 200) {
          await dispatch(setUser(user[1]));
          navigation.navigate('Logos');
        } else {
          failedLogin();
        }
      } else if (response[0] == 400) {
        emptyForm();
      } else if (response[0] == 401) {
        wrongData();
      } else {
        failedLogin();
      }
    } catch (error) {}
  };
};

export const getUser = () => {
  return async dispatch => {
    try {
      let data = await retrieveData('Login');
      //POST FUNCTION IN POSTJSON.JS RETURNS API RESPONSE
      if (data) {
        let user = await GET(`Users/${data.userId}?access_token=${data.token}`);
        if (user[0] == 200) {
          await dispatch(setUser(user[1]));
        }
      }
    } catch (error) {}
  };
};
