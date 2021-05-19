import {TextInput,Button} from "react-native-paper";
import firebase from "../database/firebaseConfig";
import {View,StyleSheet,Text} from "react-native";
import React, { useState } from "react";
import SnackBar from 'react-native-snackbar-component'


const Login = (props) => {
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

    let [snackbar,snackbarState] = useState(false)


    // let hashedPassword = crypto.createHash("sha512").update(password).digest()
    // console.log("SHA",hashedPassword);
    
    async function signIn(){
        const userRef = firebase.db.collection('users');
        const snapshot = await userRef.get();

        let users = snapshot.docs.map(doc => {

            if(doc.id == email && doc.data().password ==  password){
                props.navigation.navigate('Product')
            }else{
                snackbarState(true);
            }

        })
    }

    return (
        <>
            <View style={styles.container}>
                
            <Text style= {styles.title}>Faça login para continuar</Text>
                <TextInput
                    mode = "flat"
                    style={styles.input}
                    placeholder="E-mail"
                    // defaultValue={}
                    onChangeText={(email) => setEmail(email)}
                />

                <TextInput 
                    mode = "flat"
                    style={styles.input}
                    placeholder="Senha"
                    // defaultValue={}
                    onChangeText={(password) => setPassword(password)}  
                    secureTextEntry={true}
                />       
                    
                <Button style={styles.loginBtn} mode="contained" onPress={() => {signIn()}}>
                    Entrar
                </Button>
            
            </View>
            <SnackBar visible={snackbar}  textMessage="Erro ao fazer login" actionHandler={() => snackbarState(false)} actionText="Ok"/>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
      width:'94%',
      marginRight:'2%',
      marginLeft:'2%',
      paddingTop:100
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#7159C1',
        marginTop: 50, 
        marginBottom: 40,
        borderRadius: 10,
        paddingLeft:20,
    },
    input:{
      marginTop:20,
      paddingLeft:10,
      backgroundColor:'whitesmoke',
    },
    loginBtn:{
        marginTop:30,
        width:150,
        alignSelf: 'flex-end'
    },

  });

export default Login;