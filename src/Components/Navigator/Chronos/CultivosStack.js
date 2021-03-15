import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {OatRight, OatLeft} from '../../../Constants/Icons/design';
import {createStackNavigator} from '@react-navigation/stack';
import {chronosCStack} from '../../../Constants/screens';
const Stack = createStackNavigator();
const options = {
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
export function CultivosCStack() {
  return (
    <Stack.Navigator>
      {chronosCStack.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({navigation}) => ({
            ...options,
            headerTitle: props => (
              <View style={styles.titleView}>
                <OatLeft />
                <Text style={styles.title}>{item.name}</Text>
                <OatRight />
              </View>
            ),
            headerLeft: props => (
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                <Icon name="menu" size={30} style={styles.icon} />
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
