import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const LoginScreen = () => {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="학번"
              //value={}
              //onChangeText={}
              style={styles.input}
            />
            <TextInput
              placeholder="비밀번호"
              //value={}
              //onChangeText={}
              style={styles.input}
              secureTextEntry                                      //비밀번호 입력시 *로 나옴
            />
        </View>
                                                      
        <View style={styles.buttonContainer}>                     
           <TouchableOpacity                                       //로그인, 회원가입 버튼
             onPress={() => {}}
             style={styles.button}
             >
              <Text style={styles.button}>Login</Text>  
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {}}
             style={styles.button, styles.buttonOutline}
            >
              <Text style={styles.button.buttonOutlineText}>Register</Text>  
           </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
}
 
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  
  