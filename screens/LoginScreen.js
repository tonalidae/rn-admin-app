import React from "react";
import * as Animatable from "react-native-animatable";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
    Image,
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    SafeAreaView,
    TextInput,
} from "react-native";
import Mail from "../assets/icons/MailIcon";
import Padlock from "../assets/icons/Padlock";
import logo from "../assets/images/logo3x.png";
import LoginImg from "../assets/images/login.png";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LoginScreen = () => {
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
    const navigation = useNavigation();

    if (!fontsLoaded) {
        return <View />;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 50,
                        // paddingBottom: 50,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <StatusBar barStyle="dark-content" />
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <Text style={styles.title}>Iniciar sesión</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.mailInput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Correo electrónico"
                                placeholderTextColor="#A6BCD0"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Ionicons
                                name="md-mail-unread-outline"
                                size={24}
                                color="#A6BCD0"
                                style={styles.inputIcon}
                            />
                            {/* <Mail
                            preserveAspectRatio="xMinYMin slice"
                            width="320"
                            height="180"
                            // viewBox={"0 0 150 150"}
                            style={{
                                position: "absolute",
                                top: 15,
                                // left: "102%",
                                display: "flex",
                            }}
                        /> */}
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#A6BCD0"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                        <MaterialCommunityIcons
                            name="lock-outline"
                            size={24}
                            color="#A6BCD0"
                            style={styles.inputIconLock}
                        />
                        {/* <Padlock
                            preserveAspectRatio="xMinYMin slice"
                            width="50"
                            height="50"
                            // viewBox={"0 0 150 150"}
                            style={{
                                backgroundColor: "aquamarine",
                                position: "absolute",
                                top: 100,
                                // left: "102%",
                                display: "flex",
                            }}
                        /> */}
                        <View style={styles.blankspace}></View>
                        <Text style={styles.forgotPassword}>
                            ¿Olvidaste tu contraseña?
                        </Text>
                        <View style={styles.blankspace}></View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() =>
                                    navigation.navigate("InitialNav")
                                }
                            >
                                <Feather
                                    name="arrow-right"
                                    size={24}
                                    color="white"
                                />

                                {/* <AntDesign
                                    name="arrowright"
                                    size={24}
                                    color="#fff"
                                /> */}
                                <Text style={styles.buttonText}>
                                    Iniciar sesión
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footerContainer}>
                        <Image source={LoginImg} style={styles.footer} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
    },
    footerContainer: {
        // backgroundColor: "lightcoral",
        bottom: 0,
        // flex: 1,
        width: width,
        zIndex: -1,
        // height: height,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        // backgroundColor: "cornflowerblue",
        position: "relative",
        bottom: 0,
        width: width,
        height: width * 0.38,
        resizeMode: "contain",
    },
    logo: {
        width: width * 0.8,
        height: height * 0.2,
        resizeMode: "contain",
    },
    logoContainer: {
        // paddingVertical: "10%",
        paddingTop: "10%",
        paddingBottom: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: 50,
        width: width * 0.8,
        height: height * 0.1,
        // backgroundColor: "aquamarine",
        // top: -200,
    },
    title: {
        paddingVertical: "10%",
        fontFamily: "LatoBold",
        fontSize: 16,
        color: "#8395A5",
        textAlign: "center",
        // marginBottom: 15,
    },
    inputContainer: {
        width: width * 0.8,
        // backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: 50,
    },
    input: {
        width: width * 0.8,
        height: height * 0.1,
        paddingHorizontal: 20,
        fontFamily: "DosisRegular",
        fontSize: 14,
        color: "#8395A5",
        paddingLeft: 50,
        textAlign: "left",
        borderWidth: 0.5,
        marginBottom: 20,

        borderRadius: 8,
        borderColor: "#0325FF0A",
    },
    forgotPassword: {
        fontFamily: "LatoBold",
        fontSize: 14,
        color: "#A6BCD0",
        textAlign: "center",
        marginBottom: 5,
    },
    button: {
        display: "flex",
        flexDirection: "row",
        // marginTop: 20,
        width: width * 0.8,
        height: height * 0.09,
        backgroundColor: "#FD53A5",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        resizeMode: "cover",
    },
    buttonText: {
        fontFamily: "LatoRegular",
        fontSize: 14,
        color: "#fff",
        marginLeft: 10,
    },
    buttonContainer: {
        position: "relative",
        width: width * 0.8,
        height: 100,
        borderRadius: 10,
        alignItems: "center",
    },
    inputIcon: {
        position: "absolute",
        top: height * 0.03,
        left: "5%",
        alignItems: "center",
    },
    inputIconLock: {
        position: "absolute",
        top: height * 0.18,
        left: "5%",
        alignItems: "center",
    },
    blankspace: {
        height: "5%",
    },
});
