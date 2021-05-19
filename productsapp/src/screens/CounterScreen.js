import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ProductItem from "../components/ProductItem";

const CounterScreen = (props) => {
    
    const [counter,setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.acresBtn} onPress={() => {setCounter(counter + 1) } }>
                <Text>Acrescentar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dimBtn} onPress={() => {setCounter(counter - 1) } }>
                <Text>Diminuir</Text>
            </TouchableOpacity>

            <Text style={styles.counter}>{counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    acresBtn: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderWidth:1,
        borderRadius:5
    },
    dimBtn: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderWidth:1,
        borderRadius:5
    },
    counter: {
        marginTop: 30,
        fontSize: 50,
        textAlign: 'center'
    }
});

export default CounterScreen;