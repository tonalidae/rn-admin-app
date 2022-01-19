import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import InitialNav from "./navigation/InitialNav";

export default function App() {
    // const flashRef = useRef(null);

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            {/* <StoreProvider> */}
            <InitialNav />
            {/* <FlashMessage position="bottom" floating={true} ref={flashRef} /> */}
            {/* </StoreProvider> */}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
