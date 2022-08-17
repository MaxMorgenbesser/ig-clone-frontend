
import { Input, View, Text } from 'react-native';
import { loginStyles } from '../assets/Styles';

function Login(){
  return (
    <View style={loginStyles.headerBar}>
      <Text style={loginStyles.headerText}>
        IG Clone</Text>
    </View>
  )
}



export default Login;