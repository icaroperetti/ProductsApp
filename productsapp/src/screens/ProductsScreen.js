import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import { TextInput,Button,List } from "react-native-paper";
import ProductItem from "../components/ProductItem";
import firebase from "../database/firebaseConfig";
import {FAB} from "react-native-paper";

const TaskScreen = (props) => {
  const params = props.navigation.state.params;
  console.log("Params:",params)
  // Quando um estado do componente ou do pai dele mudar ele atualiza.
  let [products, setProducts] = useState([]);
  let [description, setDescription] = useState('');
  let [title,setTitle] =  useState('');
  // ele executa a função quando alguma coisa no array atualiza
  

  useEffect(() => {
    // console.log('useeffectchamado');
    async function getProducts(){
      const productRef = firebase.db.collection('products');
      const snapshot = await productRef.get();
    
      let products = snapshot.docs.map(doc => {
        console.log(doc.id)
        console.log(doc.data())
        return product = {id: doc.id, ...doc.data()}
      })
      
      setProducts(products);
    }
    getProducts();
  }, [params])

  const removeProduct = (id) => {
    firebase.db.collection('products').doc(id).delete();
    setProducts(old => old.filter(item => item.id !== id));
  };

  // async function newTask() {
    
  //   setDescription('');

  //   const res = await firebase.db.collection("tasks").add({
  //     title: title,
  //     description: description
  //   });
  //   setTasks(old => [...old, {
  //     id:res.id,
  //     description: description,
  //     title:title
  //   }])
  // };

  // key -> Quando tem um loop (renderizando algo na dom)
  //Props
  
  return (
   <View>
     {/* <TextInput
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
      <Button style={styles.taskBtn} mode="contained" onPress={() => newTask()}>
        Cadastrar produto
      </Button> */}
      
      <FlatList
        style={styles.tasksList}
        data={products}
        renderItem={(element) => {
          return (
            <>
              <ProductItem key={element.index} task={element.item} removeProduct={removeProduct} navigation={props.navigation}/>
            </>
          );
        }}
      />
       <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => props.navigation.navigate('New')}
  />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width:'96%',
    marginRight:'2%',
    marginLeft:'2%'
  },
  description:{
    marginTop:20,
    marginLeft:10,
    marginRight:10
  },
  tasksList: {
    marginTop: 50,
    fontWeight:'bold'
  },
  btn: {
    marginTop: 20,
    marginRight:30,
    width:200,
    alignSelf:'flex-end'
  },
  icon:{
    marginTop:5
  },
  fab: {
    position:'absolute',
    left:320,
    top:580,
    backgroundColor:'#5b00ed',
  }
});

export default TaskScreen;