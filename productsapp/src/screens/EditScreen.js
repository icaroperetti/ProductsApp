import {TextInput,Button} from "react-native-paper";
import React, { useState } from "react";
import {View,StyleSheet,Text} from "react-native";
import firebase from "../database/firebaseConfig";


const EditScreen = (props) => {
   
    let [description, setDescription] = useState(props.navigation.state.params.description);
    let [title,setTitle] =  useState(props.navigation.state.params.title);

    const updateProduct = (id) => {
      firebase.db.collection('products').doc(id).update({
        title,
        description,
      });
      props.navigation.navigate('Product', {
        taskUpdatedId: props.navigation.state.params.id,
      });
    }
  
    return (
        <View style={styles.container}>
           <Text style= {styles.text}>Atualizar produto</Text>
            <TextInput
            mode = "outlined"
            style={styles.title}
            placeholder="Novo titulo"
            // defaultValue={}
            value={title}
            onChangeText={(newValue) => setTitle(newValue)}
            />

            <TextInput
            mode = "outlined"
            style={styles.description}
            placeholder="Descrição"
            // defaultValue={}
            value={description}
            onChangeText={(newValue) => setDescription(newValue)}
            />
    
            <Button style={styles.taskBtn} mode="contained" onPress={() => updateProduct(props.navigation.state.params.id)}>
             Atualizar
            </Button>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      width:'96%',
      marginRight:'2%',
      marginLeft:'2%',
      marginTop:150
  },
  title:{
    marginTop:30,
    marginBottom:25,
    backgroundColor:'whitesmoke'
  },
    description:{
      marginTop:20,
      backgroundColor:'whitesmoke'
    },
    tasksList: {
      marginTop: 20,
    },
    taskBtn: {
      marginTop:30,
      width:130,
      alignSelf: 'flex-end'
    },
    icon:{
      marginTop:5
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
      color:'#7159C1',
      marginTop: 50, 
      marginBottom: 40,
      borderRadius: 10,
      paddingLeft:20,
    }
  });

export default EditScreen;