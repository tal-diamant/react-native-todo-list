import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View>
            <Text style={styles.header}>My Todo List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        // height: 65,
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 40,
        backgroundColor: "coral",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Header;