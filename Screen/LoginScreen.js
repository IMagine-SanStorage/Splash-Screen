import { Keyboard,  TouchableWithoutFeedback , TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react'
// import { auth } from '../Firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    // const DismissKeyboard = ({ children }) => (
    //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //     {children}
    //   </TouchableWithoutFeedback>
    // );


    return (  
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={{flex:1, backgroundColor:'yellow'}}></View>
      
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="학번"                                   //설명
              value={email}
              onChangeText={text => setEmail(text)} 
              style={styles.input}                                //글을 쓸 수 있는 칸을 만들기
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="비밀번호"
              value={password}
              onChangeText={text => setPassword(text)}    //setPassword( )   이 괄호 안에 text 안넣으면 글이 안써짐 아마 숫자로 하면 숫자만 가능 할지도?
              style={styles.input}
              secureTextEntry                                      //비밀번호 입력시 *로 나옴
            />
        </View>
                                                      
        <View style={styles.buttonContainer}>                     
           <TouchableOpacity                                       //로그인, 회원가입 버튼
             onPress={() => {}}
             style={styles.button}
             >
              <Text style={styles.buttonText}>로그인</Text>  
           </TouchableOpacity>
             
           <TouchableOpacity
             onPress={() => {}}
             style={[styles.button, styles.buttonOutline]}                //array 이기 때문에 [ , ]에 넣어줘야함
            >
              <Text style={styles.buttonOutlineText}>회원가입</Text>  
           </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
}
 
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        // flex:1, 
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
      width: '80%',        //넓이
    },
    input: {
      backgroundColor: '#315EFF',
      paddingHorizontal: 15,  //'학번' '비밀번호' 입력칸 왼쪽으로 부터 거리
      paddingVertical: '7%',    // 박스 크기
      borderRadius: 5,       //모서리 둥굴기
      margin: 5,             //마진 위 아래 띄어짐 거리
    },
    buttonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',                //글을 중앙으로 설정
      margin: '15%'
    },
    button: {
      backgroundColor: '#315EFF',
      width: '100%',
      padding: 10,                         //박스크기
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline:{
      backgroundColor: 'white',
      marginTop: 5,
      borderColor:'#315EFF',
      borderWidth: 2,
    },
    buttonText:{
      color:'white',
      fontSize: 16,
      fontWeight: '700'
    },
    buttonOutlineText:{
      color:'#315EFF',
      fontSize: 16,
      fontWeight: '700' 
    }
  });
  
  