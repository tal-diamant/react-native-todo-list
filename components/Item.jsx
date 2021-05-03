import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({text, deleteItem, id}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{text}</Text>
            <View style={styles.spacer}></View>
            <TouchableOpacity style={styles.btn} onPress={() => {deleteItem(id)} }>
                {/* <Text>Delete</Text> */}
                <MaterialIcons name="delete" size={20} color="#222" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "gray",
        marginTop: 10,
        borderWidth: 1,
        overflow: "hidden",
    },
    item: {
        padding: 10,
    },
    btn: {
        padding: 10,
        borderLeftColor: "gray",
        borderLeftWidth: 1,
        backgroundColor: "#f08080",
    },
    spacer: {
        flexGrow: 1,
    },
});

export default Item;