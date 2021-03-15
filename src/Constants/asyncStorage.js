import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';
export async function storeData(data, key) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data), () => {
      console.log(data);
    });
  } catch (error) {}
}

export async function _signOutAsync(navigation) {
  try {
    await AsyncStorage.clear();
    RNRestart.Restart();
    navigation.navigate('Login');
  } catch (error) {}
}

export async function retrieveData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {}
}

/**
 * 
 *     let asyncData = {
          accessToken: response[1].id,
          userId: response[1].userId,
          created: response[1].created,
        };
        storeData(asyncData, 'Login');


      //GETS USER ID STORED IN ASYNC STORAGE
      let data = await retrieveData('Login');

 * 
 * 
 * 
 */
