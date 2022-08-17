
import { TextInput, View, Text } from 'react-native';
import { loginStyles } from '../assets/Styles';

function Login(){
  return (
    <View style={loginStyles.container}>
      
     
        <View style={loginStyles.LoginInput}>
        <TextInput keyboardAppearance='dark' 
        keyboardType='Email' placeholder='input here' autoCapitalize={false}/> 
       
        <TextInput keyboardAppearance='dark' 
        keyboardType='Email' placeholder='input here' autoCapitalize={false}/> 
    
        </View>
    </View>
  )
}



export default Login;