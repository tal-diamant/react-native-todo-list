import React, {useState} from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const AddTodo = ({submitTodo}) => {
    const [text, setText] = useState("");
    
    const changeHandler = (val) => {
        setText(val);
    }

    const pressHandler = (text) => {
        submitTodo(text);
        setText("");
    }

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder="Add new todo..."
            onChangeText={changeHandler}
            value={text}
            />
            <Button title="Add Todo" color="coral" onPress={() => pressHandler(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginBottom: 10,
    },
});

export default AddTodo;