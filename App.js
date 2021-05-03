import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import Item from "./components/Item";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {text: "buy milk", id: "1"},
    {text: "workout", id: "2"},
    {text: "study", id: "3"},
    {text: "shave", id: "4"},
  ]);

  const deleteItem = (id) => {
    setTodos(prev => {
      return prev.filter(item => item.id !== id);
    })
  }

  const submitTodo = (text) => {
    if(text.length > 3) {
      setTodos(prev => [
        {text, id: Math.random().toString()},
        ...prev
      ]);
    } else {
      Alert.alert("OOPS!", "Todo items must be 4 characters long", [
        {text: "Ok", onPress: () =>  console.log("closed alert")}
      ]);
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo} />
          <View style={styles.todos}>
            <FlatList 
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({item}) => (
              <Item text={item.text} deleteItem={deleteItem} id={item.id} />
            )}
            />
          </View>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  todos: {
    flex: 1,
  },
});
