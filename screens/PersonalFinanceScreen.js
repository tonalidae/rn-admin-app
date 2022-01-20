import React, { useState, useCallback, useEffect } from "react";

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
import Report from "../components/Report";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const PersonalFinanceScreen = ({ route }) => {
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
    const [fromDateOpen, setFromDateOpen] = useState(false);
    const [toDateOpen, setToDateOpen] = useState(false);
    const [executiveOpen, setExecutiveOpen] = useState(false);
    const [costCenterOpen, setCostCenterOpen] = useState(false);

    const onPressFromDate = useCallback(() => {
        setFromDateOpen(true);
        setToDateOpen(false);
        setExecutiveOpen(false);
        setCostCenterOpen(false);
    }, []);

    const onPressToDate = useCallback(() => {
        setFromDateOpen(false);
        setToDateOpen(true);
        setExecutiveOpen(false);
        setCostCenterOpen(false);
    }, []);

    const onPressExecutive = useCallback(() => {
        setFromDateOpen(false);
        setToDateOpen(false);
        setExecutiveOpen(true);
        setCostCenterOpen(false);
    }, []);

    const onPressCostCenter = useCallback(() => {
        setFromDateOpen(false);
        setToDateOpen(false);
        setExecutiveOpen(false);
        setCostCenterOpen(true);
    }, []);

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);

    const [fromDate, setFromDate] = useState([
        {
            label: "Amalia Central - Tunja",
            value: "Amalia Central - Tunja",
        },
        {
            label: "Cost Center 2",
            value: "Cost Center 2",
        },
    ]);

    const [toDate, setToDate] = useState([
        {
            label: "Amalia Central - Tunja",
            value: "Amalia Central - Tunja",
        },
        {
            label: "Cost Center 2",
            value: "Cost Center 2",
        },
    ]);

    const [executive, setExecutive] = useState([
        {
            label: "Amalia Central - Tunja",
            value: "Amalia Central - Tunja",
        },
        {
            label: "Cost Center 2",
            value: "Cost Center 2",
        },
    ]);

    const [costCenter, setCostCenter] = useState([
        {
            label: "Amalia Central - Tunja",
            value: "Amalia Central - Tunja",
        },
        {
            label: "Cost Center 2",
            value: "Cost Center 2",
        },
    ]);

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
                        <Text style={styles.headerText}>
                            Consolidado individual
                        </Text>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <View style={styles.bodyContentRow}>
                                <Text style={styles.textSubtitle}>
                                    Selecciona todos los campos para generar la
                                    consulta
                                </Text>
                                <DropDownPicker
                                    items={fromDate}
                                    value={value1}
                                    open={fromDateOpen}
                                    onOpen={onPressFromDate}
                                    // searchable={true}
                                    searchPlaceholder="Buscar"
                                    setOpen={setFromDateOpen}
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
                                    }}
                                    listItemLabelStyle={{
                                        fontFamily: "DosisRegular",
                                        fontSize: 16,
                                        color: "#8395A5",
                                    }}
                                    searchContainerStyle={{
                                        // backgroundColor: "cyan",
                                        borderBottomColor: "#dfdfdf",
                                    }}
                                    setValue={setValue1}
                                    setItems={setFromDate}
                                    placeholder="Fecha desde"
                                    placeholderStyle={{
                                        textAlign: "left",
                                        color: "#A6BCD0",
                                        fontFamily: "DosisRegular",
                                        fontSize: 17,
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
                                        width: width * 0.8,
                                        borderRadius: 10,
                                        borderColor: "#dfdfdf",
                                        borderWidth: 1,
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                    ArrowDownIconComponent={({ style }) => (
                                        <MaterialIcons
                                            name="keyboard-arrow-down"
                                            size={24}
                                            color="#A6BCD0"
                                        />
                                    )}
                                    zIndex={3000}
                                    zIndexInverse={1000}
                                />
                                <DropDownPicker
                                    items={toDate}
                                    value={value2}
                                    open={toDateOpen}
                                    onOpen={onPressToDate}
                                    // searchable={true}
                                    searchPlaceholder="Buscar"
                                    setOpen={setToDateOpen}
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
                                    }}
                                    listItemLabelStyle={{
                                        fontFamily: "DosisRegular",
                                        fontSize: 16,
                                        color: "#8395A5",
                                    }}
                                    searchContainerStyle={{
                                        // backgroundColor: "cyan",
                                        borderBottomColor: "#dfdfdf",
                                    }}
                                    setValue={setValue2}
                                    setItems={setToDate}
                                    placeholder="Fecha hasta"
                                    placeholderStyle={{
                                        textAlign: "left",
                                        color: "#A6BCD0",
                                        fontFamily: "DosisRegular",
                                        fontSize: 17,
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
                                        width: width * 0.8,
                                        borderRadius: 10,
                                        borderColor: "#dfdfdf",
                                        borderWidth: 1,
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                    ArrowDownIconComponent={({ style }) => (
                                        <MaterialIcons
                                            name="keyboard-arrow-down"
                                            size={24}
                                            color="#A6BCD0"
                                        />
                                    )}
                                    zIndex={2000}
                                    zIndexInverse={2000}
                                />
                                <DropDownPicker
                                    items={executive}
                                    value={value3}
                                    open={executiveOpen}
                                    onOpen={onPressExecutive}
                                    // searchable={true}
                                    searchPlaceholder="Buscar"
                                    setOpen={setExecutiveOpen}
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
                                    }}
                                    listItemLabelStyle={{
                                        fontFamily: "DosisRegular",
                                        fontSize: 16,
                                        color: "#8395A5",
                                    }}
                                    searchContainerStyle={{
                                        // backgroundColor: "cyan",
                                        borderBottomColor: "#dfdfdf",
                                    }}
                                    setValue={setValue3}
                                    setItems={setExecutive}
                                    placeholder="Ejecutivo"
                                    placeholderStyle={{
                                        textAlign: "left",
                                        color: "#A6BCD0",
                                        fontFamily: "DosisRegular",
                                        fontSize: 17,
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
                                        width: width * 0.8,
                                        borderRadius: 10,
                                        borderColor: "#dfdfdf",
                                        borderWidth: 1,
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                    ArrowDownIconComponent={({ style }) => (
                                        <MaterialIcons
                                            name="keyboard-arrow-down"
                                            size={24}
                                            color="#A6BCD0"
                                        />
                                    )}
                                    zIndex={1000}
                                    zIndexInverse={3000}
                                />
                                <DropDownPicker
                                    items={costCenter}
                                    value={value4}
                                    open={costCenterOpen}
                                    onOpen={onPressCostCenter}
                                    // searchable={true}
                                    searchPlaceholder="Buscar"
                                    setOpen={setCostCenterOpen}
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
                                    }}
                                    listItemLabelStyle={{
                                        fontFamily: "DosisRegular",
                                        fontSize: 16,
                                        color: "#8395A5",
                                    }}
                                    searchContainerStyle={{
                                        // backgroundColor: "cyan",
                                        borderBottomColor: "#dfdfdf",
                                    }}
                                    setValue={setValue4}
                                    setItems={setCostCenter}
                                    placeholder="Centro de costo"
                                    placeholderStyle={{
                                        textAlign: "left",
                                        color: "#A6BCD0",
                                        fontFamily: "DosisRegular",
                                        fontSize: 17,
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
                                        width: width * 0.8,
                                        // borderRadius: 10,
                                        borderColor: "#dfdfdf",
                                        borderWidth: 1,
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                    ArrowDownIconComponent={({ style }) => (
                                        <MaterialIcons
                                            name="keyboard-arrow-down"
                                            size={24}
                                            color="#A6BCD0"
                                        />
                                    )}
                                    zIndex={500}
                                    zIndexInverse={4000}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    // onPress={() => navigation.navigate("General")}
                                >
                                    <Text style={styles.buttonText}>
                                        Consultar
                                    </Text>
                                </TouchableOpacity>
                                <Report />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

export default PersonalFinanceScreen;

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
        height: 40,
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
    bodyCardContainer: {
        paddingVertical: 40,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: "#2C2828",
    },
    card: {
        // flex: 1,
        width: width * 0.6,
        height: height * 0.25,
        paddingBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        // borderWidth: 0.5,
        // borderColor: "#2C28281C",
        shadowColor: "#2C2828",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginBottom: 20,
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    cardText: {
        fontFamily: "DosisBold",
        fontSize: 15,
        color: "#8898AA",
    },
    cardNumbers: {
        fontFamily: "DosisRegular",
        fontSize: 30,
        color: "#4D4F5C",
    },
});
