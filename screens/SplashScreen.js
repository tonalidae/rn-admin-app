import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
    const [splash, setSplash] = useState("Admin");

    useEffect(() => {
        setTimeout(() => {
            setSplash("UTD");
        }, 2500);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setSplash("CasaPropia");
        }, 4000);
    }, []);

    return (
        <View style={styles.container}>
            {splash === "Admin" && (
                <Image
                    source={require("../assets/images/adminsplash.png")}
                    style={styles.logo}
                />
            )}
            {splash === "UTD" && (
                <Image
                    source={require("../assets/images/UTD3x.png")}
                    style={styles.utd}
                />
            )}
            {splash === "CasaPropia" && (
                <Image
                    source={require("../assets/images/TCPx3.png")}
                    style={styles.tcp}
                />
            )}
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    utd: {
        width: "60%",
        height: "60%",
        resizeMode: "contain",
    },
    tcp: {
        width: "45%",
        height: "45%",
        resizeMode: "contain",
    },
});
