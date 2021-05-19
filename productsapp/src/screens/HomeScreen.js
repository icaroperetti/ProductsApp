import React from "react";
import { Text, StyleSheet, View,StatusBar} from "react-native";
import { Button } from "react-native-paper"

const HomeScreen = (props) => {
  return (

    <View style= {styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="whitesmoke"></StatusBar>
      <Text style= {styles.title}>Lista de Tarefas</Text>
      
      <View style={{marginBottom: 10}}>
        <Button style={styles.button} mode='contained' onPress={() => props.navigation.navigate('Task')}>
          <Text style={styles.button}>Tasks</Text>
        </Button>
      </View>

      <Button style={styles.button} mode='contained' onPress={() => props.navigation.navigate('Counter')}>
          <Text style={styles.button}>Counter</Text>
      </Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d1d8e0',
    paddingTop:150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'gray',
    marginTop: 50, 
    marginBottom: 50,
    borderRadius: 10,
    padding: 7
  },
  button: {
    backgroundColor: '#8854d0',
    borderRadius:10,
    fontSize:15,
    fontWeight:'bold',
    width:130
  },
})

export default HomeScreen