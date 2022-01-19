import React from "react";

import * as Animatable from "react-native-animatable";
import { useNavigation, useFocusEffect } from "@react-navigation/core";
import { useFonts } from "expo-font";
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from "react-native";
const logo = require("../assets/images/logo3x.png");
const StartImg = require("../assets/images/startImg.png");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const MainScreen = ({ route }) => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        DosisBold: require("../assets/fonts/Dosis/Dosis-Bold.ttf"),
        DosisRegular: require("../assets/fonts/Dosis/Dosis-Regular.ttf"),
        DosisMedium: require("../assets/fonts/Dosis/Dosis-Medium.ttf"),
        DosisLight: require("../assets/fonts/Dosis/Dosis-Light.ttf"),
        DosisSemiBold: require("../assets/fonts/Dosis/Dosis-SemiBold.ttf"),
        DosisExtrabold: require("../assets/fonts/Dosis/Dosis-ExtraBold.ttf"),
        LatoRegular: require("../assets/fonts/Lato/Lato-Regular.ttf"),
        LatoBold: require("../assets/fonts/Lato/Lato-Bold.ttf"),
        LatoBlack: require("../assets/fonts/Lato/Lato-Black.ttf"),
        LatoItalic: require("../assets/fonts/Lato/Lato-Italic.ttf"),
        LatoLight: require("../assets/fonts/Lato/Lato-Light.ttf"),
        LatoLightItalic: require("../assets/fonts/Lato/Lato-LightItalic.ttf"),
        LatoThin: require("../assets/fonts/Lato/Lato-Thin.ttf"),
        LatoThinItalic: require("../assets/fonts/Lato/Lato-ThinItalic.ttf"),
        LatoBlackItalic: require("../assets/fonts/Lato/Lato-BlackItalic.ttf"),
        LatoBoldItalic: require("../assets/fonts/Lato/Lato-BoldItalic.ttf"),
        ArialRoundedMTBold: require("../assets/fonts/ArialRoundedMT/arial-rounded-mt-bold.ttf"),
    });

    if (!fontsLoaded) {
        return <View />;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                <View style={styles.StartImg}>
                    <Animatable.Image
                        source={StartImg}
                        duration={2000}
                        style={styles.StartImg}
                        animation="slideInUp"
                    />
                </View>
                <View style={styles.logoContainer}>
                    <Animatable.Image
                        animation="fadeIn"
                        delay={500}
                        duration={5000}
                        source={logo}
                        style={styles.logo}
                    />
                </View>
                <Animatable.View
                    style={styles.footer}
                    animation="fadeInUp"
                    delay={1000}
                >
                    <TouchableOpacity
                        onPress={() => console.log("Login")}
                        // onPress={() => navigation.navigate("Login")}
                        style={styles.StartBtn}
                    >
                        <Text style={styles.StartBtnTextBold}>
                            INICIAR SESIÓN
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
                {/* <View style={styles.btnText}>
                    <Text style={styles.StartBtnTextBold}>
                        {" "}
                        INICIAR SESIÓN{" "}
                    </Text>
                </View> */}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    StartImg: {
        width: width,
        height: height,
        resizeMode: "cover",
    },
    footer: {
        display: "flex",
        height: 100,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        opacity: 0.9,
        marginTop: -100,
    },
    StartBtn: {
        backgroundColor: "#FD53A5",
        width: width,
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
    },
    StartBtnTextBold: {
        flexGrow: 1,
        fontFamily: "DosisBold",
        fontSize: 24,
        textAlign: "center",
        paddingTop: 12,
        color: "#fff",
    },
    btnText: {
        bottom: 35,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        fontFamily: "DosisBold",
        fontSize: 24,
        textAlign: "center",
        color: "#fff",
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        left: 31,
        height: height * 0.15,
        position: "absolute",
        top: 30,
    },
    logo: {
        width: width * 0.75,
        height: width * 0.75,
        resizeMode: "contain",
    },
});

export default MainScreen;
