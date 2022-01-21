import React, { useState, useEffect, useCallback } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
    SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import CostCenterInfo from "../components/CostCenterInfo";
import { set } from "react-native-reanimated";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CostCenterScreen = ({ route }) => {
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

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: "Amalia Central - Tunja",
            value: "Amalia Central - Tunja",
        },
        {
            label: "Cost Center 2",
            value: "Cost Center 2",
        },
        {
            label: "Cost Center 3",
            value: "Cost Center 3",
        },
        {
            label: "Cost Center 4",
            value: "Cost Center 4",
        },
        {
            label: "Cost Center 5",
            value: "Cost Center 5",
        },
        {
            label: "Cost Center 6",
            value: "Cost Center 6",
        },
        {
            label: "Cost Center 7",
            value: "Cost Center 7",
        },
    ]);

    const [show, setShow] = useState(false);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 50,
                        paddingBottom: 50,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        {/* <Text style={styles.headerText}>
                            Gestión de Centros de Costo
                        </Text> */}
                    </View>

                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <View style={styles.bodyContentRow}>
                                <Text style={styles.textSubtitle}>
                                    Selecciona el centro de costo a verificar
                                </Text>
                                <DropDownPicker
                                    items={items}
                                    value={value}
                                    open={open}
                                    headerStyle={{
                                        backgroundColor: "#f1f1f1",
                                    }}
                                    // searchable={true}
                                    textStyle={
                                        open === true
                                            ? {
                                                  fontSize: 17,
                                                  fontFamily: "DosisSemiBold",
                                                  color: "#8395A5",
                                                  textAlign: "center",
                                              }
                                            : {
                                                  fontSize: 16,
                                                  fontFamily: "DosisSemiBold",
                                                  color: "#8395A5",
                                                  textAlign: "left",
                                              }
                                    }
                                    listMode="MODAL"
                                    modalTitle="Selecciona el centro de costo"
                                    searchPlaceholder="Buscar"
                                    setOpen={setOpen}
                                    style={{
                                        borderColor: "#0325FF0A",
                                        borderWidth: 0.2,
                                        borderRadius: 5,
                                        shadowColor: "#0325FF14",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.7,
                                        shadowRadius: 3.84,
                                        elevation: 5,
                                        // marginTop: 10,
                                        // marginBottom: 10,
                                    }}
                                    // searchContainerStyle={{
                                    //     // backgroundColor: "cyan",
                                    //     borderBottomColor: "#dfdfdf",
                                    // }}
                                    setValue={setValue}
                                    setItems={setItems}
                                    placeholder="Selecciona un centro de costo"
                                    placeholderStyle={{
                                        textAlign: "center",
                                        color: "#A6BCD0",
                                        fontFamily: "DosisRegular",
                                        fontSize: 17,
                                    }}
                                    modalTitleStyle={{
                                        textAlign: "center",
                                        fontFamily: "DosisBold",
                                        color: "#fff",
                                        fontSize: 20,
                                        borderBottomColor: "transparent",
                                    }}
                                    modalContentContainerStyle={{
                                        // left: width * 0.3,
                                        width: width * 1,
                                        // height: height * 0.4,
                                        backgroundColor: "white",
                                        borderRadius: 5,
                                        shadowColor: "#0325FF14",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.7,
                                        shadowRadius: 3.84,
                                        elevation: 5,
                                    }}
                                    searchPlaceholderTextColor="#A6BCD0"
                                    containerStyle={{
                                        width: width * 0.8,
                                        height: 50,
                                        borderRadius: 5,
                                        marginTop: 20,
                                        marginBottom: 20,
                                        borderColor: "#0325FF0A",
                                        borderWidth: 1,
                                    }}
                                    dropDownContainerStyle={{
                                        // backgroundColor: "cyan",
                                        backgroundColor: "#FD53A5",
                                        width: width * 0.8,
                                        borderRadius: 10,
                                        borderColor: "#dfdfdf",
                                        borderWidth: 1,
                                        marginTop: 10,
                                        marginBottom: 10,
                                        elevation: 5,
                                    }}
                                    ArrowDownIconComponent={({ style }) => (
                                        <MaterialIcons
                                            name="keyboard-arrow-down"
                                            size={24}
                                            color="#A6BCD0"
                                        />
                                    )}
                                    TickIconComponent={({ style }) => (
                                        <Ionicons
                                            name="checkmark-circle"
                                            size={20}
                                            color="#FD53A5"
                                        />
                                    )}
                                    CloseIconComponent={({ style }) => (
                                        <Feather
                                            name="x"
                                            size={24}
                                            color="#FD53A5"
                                        />
                                    )}
                                    zIndex={3000}
                                    zIndexInverse={1000}
                                />

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() =>
                                        show === false
                                            ? setShow(true)
                                            : setShow(false)
                                    }
                                >
                                    <Text style={styles.buttonText}>
                                        Consultar
                                    </Text>
                                </TouchableOpacity>
                                {show ? <CostCenterInfo /> : null}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

export default CostCenterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingHorizontal: 20,

        // backgroundColor: "crimson",
    },
    header: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

        // backgroundColor: "crimson",
        borderBottomColor: "#0325FF14",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 8,
        borderBottomWidth: 0.5,
    },
    body: {
        // backgroundColor: "crimson",

        flex: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontFamily: "DosisBold",
        fontSize: 20,
        color: "#8395A5",
    },
    bodyContent: {
        width: width * 0.8,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    bodyContentRow: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        shadowColor: "#2C2828",
    },
    textSubtitle: {
        fontFamily: "DosisRegular",
        fontSize: 20,
        color: "#8395A5",
    },
    button: {
        top: 10,
        width: width * 0.4,
        height: 50,
        backgroundColor: "#FD53A5",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 8,
        borderBottomWidth: 0.5,
    },
    buttonText: {
        fontFamily: "DosisBold",
        fontSize: 17,
        color: "#fff",
    },
});
