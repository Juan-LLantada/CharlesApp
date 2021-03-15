import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNav} from './src/Components/Navigator/Main';
import {Provider} from 'react-redux';
import store from './src/Store/index';
console.disableYellowBox = true;

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <MainStackNav />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
