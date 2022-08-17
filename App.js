import { StyleSheet, SafeAreaView } from 'react-native';
import Login from './screens/Login';
import PhotoList from './screens/PhotoList';
import { AppjsStyles } from './assets/Styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab=createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name='Home' component={PhotoList}></Tab.Screen>
  <Tab.Screen name='Login' component={Login}></Tab.Screen>
</Tab.Navigator>
    </NavigationContainer>
    /* // <SafeAreaView style={AppjsStyles.safeArea}>
    //   <Login/>
    //   <PhotoList />

    // </SafeAreaView> */
    
    
  );
}


