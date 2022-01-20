import React, { useState, useEffect, useRef, memo, useMemo } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
// import { TextInput } from "react-native-paper";

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Dimensions,
    TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";

import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";

const { height } = Dimensions.get("screen");

const AccountScreen = () => {
    const navigation = useNavigation();
    const buttonRef = useRef();

    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

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
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 30,
                        paddingBottom: 100,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.pageTitle}>Mi cuenta</Text>
                    <Ionicons
                        name="md-person-circle"
                        size={105}
                        color="#FD53A5"
                        style={{ opacity: 0.5 }}
                    />

                    <View style={styles.containerInput}>
                        <Text style={styles.subtitleProfile}> Nombres</Text>

                        <View style={styles.input}>
                            <Text style={styles.name}> Nombres</Text>
                        </View>

                        <Text style={styles.subtitleProfile}>Apellidos</Text>

                        <View style={styles.input}>
                            <Text style={styles.name}> Apellidos</Text>
                        </View>
                        <Text style={styles.subtitleProfile}>
                            Correo electrónico
                        </Text>

                        <View style={styles.input}>
                            <Text style={styles.name}> Correo electrónico</Text>
                            <View style={styles.containerIcon}>
                                <AntDesign
                                    name="checkcircleo"
                                    size={24}
                                    color="#FD53A5"
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.subtitleProfile}>
                        Número de celular
                    </Text>

                    <View style={styles.input}>
                        <Text style={styles.name}> Número de celular</Text>
                        <View style={styles.containerIcon}>
                            <AntDesign
                                name="checkcircleo"
                                size={24}
                                color="#FD53A5"
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containerInput: {
        width: "100%",
    },
    pageTitle: {
        fontFamily: "LatoBold",
        fontSize: 24,
        color: "#8395A5",
        marginBottom: 40,
    },
    subtitleProfile: {
        color: "#7C7D7E",
        fontSize: 14,
        marginRight: "auto",
        marginLeft: "13%",
        top: 2,
        fontFamily: "DosisRegular",
    },
    input: {
        height: 60,
        width: "80%",
        backgroundColor: "#f2f2f2",
        borderWidth: 1,
        borderColor: "#f2f2f2",
        borderRadius: 100,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        padding: 20,
        paddingLeft: 30,
        fontSize: 14,
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "DosisMedium",
        color: "#7C7D7E",
    },

    profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 30,
        borderColor: "#0f788b",
        borderWidth: 1,
        //display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontFamily: "DosisMedium",
        fontSize: 17,
        color: "#4a4b4d",
    },
    button: {
        marginBottom: 20,
        marginTop: 20,
    },
    buttonText: {
        fontFamily: "CentraleSansMedium",
        fontSize: 11,
        color: "#0f788b",
        textAlign: "center",
    },
    changephone: {
        borderColor: "#0F788B",
        borderWidth: 2,
        borderRadius: 100,
        height: 60,
        width: "80%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingLeft: 30,
    },
    changephoneText: {
        fontFamily: "CentraleSansRegular",
        fontSize: 16,
        color: "#0f788b",
        textAlign: "center",
    },
    changepass: {
        backgroundColor: "#0F788B",
        borderRadius: 100,
        height: 60,
        width: "80%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingLeft: 30,
        alignSelf: "center",
    },
    changepassText: {
        fontFamily: "CentraleSansRegular",
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },

    /*MODAL*/
    titleModal: {
        color: "#4A4B4D",
        fontFamily: "CentraleSansMedium",
        fontSize: 30,
        textAlign: "center",
        color: "#4A4B4D",
        marginTop: 40,
    },
    subtitleModal: {
        color: "#7C7D7E",
        fontFamily: "CentraleSansMedium",
        fontSize: 14,
        textAlign: "center",
        width: 230,
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4A4B4D",
        marginTop: 25,
        paddingHorizontal: 20,
    },

    sheetBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 0,
        //sombra
    },
    bottomSheetContainer: {
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: (0, 0, 0), //contenedor
        height: "100%",
    },
    closeButton: {
        position: "absolute",
        top: 5,
        right: 20,
        width: 42,
        height: 42,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 5,
        borderRadius: 100,
        shadowColor: "#7C7D7E",
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        zIndex: 1,
    },
    closeButtonIcon: {
        paddingTop: 20,
        padding: 30,
        paddingLeft: 20,
    },
    pencilcontainer: {
        position: "absolute",
        bottom: -5,
        right: "10%",
        width: "25%",
        height: "25%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#0F788B",
        borderWidth: 2,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: "#fff",
    },
    pencilimage: {
        width: "65%",
        height: "65%",
        // borderRadius: 100,
    },
    containerIcon: {
        position: "absolute",
        top: 15,
        left: "102%",
        display: "flex",
    },
    containerIcon2: {
        position: "absolute",
        top: 20,
        // left: "2%",
        display: "flex",
    },
});
