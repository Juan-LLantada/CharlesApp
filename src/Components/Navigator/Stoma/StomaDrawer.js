import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {drawerStoma} from '../../../Constants/screens';
import {SideMenu} from '../../SideMenu/Stoma/index';
import {elevation10} from '../../../Constants/styles';
const Drawer = createDrawerNavigator();
const options = {
  activeTintColor: '#74c365',
  itemStyle: {
    ...elevation10,
    backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 15,
    textAlign: 'right',
  },
  contentContainerStyle: {
    height: '100%',
  },
};
export function StomaDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={options}
      drawerContent={props => <SideMenu {...props} />}>
      {drawerStoma.map((item, index) => (
        <Drawer.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            title: item.name,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}

/*
 drawerIcon: ({focused, tintColor}) => {
              const iconName = focused ? (
                <item.Selected width={24} height={24} />
              ) : (
                <item.Unselected width={24} height={24} />
              );
              return iconName;
            },
*/
