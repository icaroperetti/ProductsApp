import React from "react";
import { Text, StyleSheet, View, Image,TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { List } from "react-native-paper";
import { AntDesign,Entypo } from '@expo/vector-icons'; 


const ProductItem = (props) => {
  return (
      <List.Item 
        style={styles.list}
        title={props.task.title}
        description={props.task.description}
        //left={(paperProps) => <FontAwesome {...paperProps} name="tasks" style={styles.icon} size={24} color="black"/>}
        right={(paperProps) => 
          
        <View style={styles.close}>
          <TouchableOpacity style={styles.icon} onPress={() => props.removeProduct(props.task.id)}>

          <AntDesign {...paperProps} style={styles.close} name="close" size={24} color="black" />
             
          </TouchableOpacity>  

          <TouchableOpacity style={styles.icon} onPress={() => props.navigation.navigate('Edit',{
            description: props.task.description,
            title:props.task.title,
            id: props.task.id
          })}>
            <Entypo name="edit" {...paperProps} size={24} color="black" />
          </TouchableOpacity>  
        </View>
      }
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 20,
  },
  list:{
    marginLeft:30,
  },
  removeColumn: {
    width: '5%',
    alignItems: 'center',
    marginRight:'2%'
  },
  xColor:{
    color:'white'
  },
  icon:{
    marginTop:12,
    paddingLeft:35
  },
  close:{
    flex:1,
    flexDirection:"row",
  },
  IconSpace: {
    paddingRight:0
  },
});

export default ProductItem;