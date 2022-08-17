import { StyleSheet, SafeAreaView } from 'react-native';
import Login from './screens/Login';
import PhotoList from './screens/PhotoList';
import { AppjsStyles } from './assets/Styles';

export default function App() {
  return (
    <SafeAreaView style={AppjsStyles.safeArea}>
      <Login/>
      <PhotoList />
    </SafeAreaView>
  );
}


