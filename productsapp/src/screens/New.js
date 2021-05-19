import {TextInput,Button} from "react-native-paper";
import React, { useState } from "react";
import {View,StyleSheet,Text} from "react-native";
import firebase from "../database/firebaseConfig";


const NewProduct = (props) => {
    let [products, setProducts] = useState([]);
    let [description, setDescription] = useState('');
    let [title,setTitle] =  useState('');
    
    async function newProduct() {
    
        setDescription('');
        setTitle('');

        const res = await firebase.db.collection("products").add({
          title: title,
          description: description
        });
        setProducts(old => [...old, {
          id:res.id,
          description: description,
          title:title
        }])
        props.navigation.navigate('Product', {
        new: props.navigation.state.params,
      });
    };

    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Cadastro de produto</Text>
          <TextInput
             mode = "outlined"
             style={styles.description}
             placeholder="Nome do produto"
             value={title}
             onChangeText={(newValue) => setTitle(newValue)}
           />
     
           <TextInput
             mode = "outlined"
             style={styles.description}
             placeholder="Descrição do produto"
             value={description}
             onChangeText={(newValue) => setDescription(newValue)}
           />
           <Button style={styles.taskBtn} mode="contained" onPress={() => newProduct()}>
            Cadastrar
           </Button>
         </View>
       );
}

const styles = StyleSheet.create({
    container:{
      width:'96%',
      marginRight:'2%',
      marginLeft:'2%',
      paddingTop:140
    },
    description:{
      marginTop:20,
      marginLeft:10,
      marginRight:10
    },
    tasksList: {
      marginTop: 20,
      fontWeight:'bold'
    },
    taskBtn: {
      marginTop: 20,
      width:150,
      alignSelf:'flex-end'
    },
    icon:{
      marginTop:5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#7159C1',
        marginTop: 50, 
        marginBottom: 15,
        borderRadius: 10,
        paddingLeft:50,
    }
  });
  

export default NewProduct;