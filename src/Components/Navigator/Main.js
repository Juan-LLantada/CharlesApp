import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {OatRight, OatLeft, Back} from '../../Constants/Icons/design';
import {createStackNavigator} from '@react-navigation/stack';
import {mainStack} from '../../Constants/screens';
const Stack = createStackNavigator();
const options = {
  gestureEnabled: true,
  headerStyle: {
    backgroundColor: '#111d2c',
  },
  headerLeftContainerStyle: {
    paddingHorizontal: 20,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
// OCUPAS MYTAB, FIELDTAB & STORAGE TAB
export function MainStackNav() {
  return (
    <Stack.Navigator>
      {mainStack.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({navigation}) => ({
            ...options,
            headerShown: item.shown,
            headerTitle: props => (
              <View style={styles.titleView}>
                <OatLeft />
                <Text style={styles.title}>{item.label}</Text>
                <OatRight />
              </View>
            ),
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Logos');
                }}>
                <Back width={30} height={30} />
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    fontSize: 15,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
