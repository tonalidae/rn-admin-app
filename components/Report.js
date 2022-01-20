import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
    SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Report = () => {
    data = [
        {
            id: 1,
            title: "Primer contacto",
            quantity: "0",
        },
        {
            id: 2,
            title: "Información Enviada",
            quantity: "1",
        },
        {
            id: 3,
            title: "Segundo Contacto",
            quantity: "2",
        },
        {
            id: 4,
            title: "Visita Agendada",
            quantity: "3",
        },
        {
            id: 5,
            title: "Para más adelante",
            quantity: "56",
        },
        {
            id: 6,
            title: "Para otro proyecto",
            quantity: "77",
        },
        {
            id: 7,
            title: "No contesta",
            quantity: "5",
        },
        {
            id: 8,
            title: "Sin estado",
            quantity: "3",
        },
        {
            id: 9,
            title: "Localizar proyecto",
            quantity: "4",
        },
        {
            id: 10,
            title: "Compro fuera de Tu Casa Propia",
            quantity: "8",
        },
        {
            id: 11,
            title: "Compro en Tu Casa Propia",
            quantity: "9",
        },
        {
            id: 12,
            title: "Cita en sala de ventas",
            quantity: "2",
        },
        {
            id: 13,
            title: "Interesado en otra ciudad",
            quantity: "34",
        },
        {
            id: 14,
            title: "Descartado por información errada",
            quantity: "5",
        },
        {
            id: 15,
            title: "Descartado por cliente conflictivo",
            quantity: "6",
        },
        {
            id: 16,
            title: "Cita por videollamada",
            quantity: "7",
        },
        {
            id: 17,
            title: "No cumplió la cita",
            quantity: "9",
        },
        {
            id: 18,
            title: "Asistió a la cita",
            quantity: "6",
        },
        {
            id: 19,
            title: "Lead en seguimiento",
            quantity: "7",
        },
        {
            id: 20,
            title: "Contactado",
            quantity: "2",
        },
        {
            id: 21,
            title: "Contactado - interactuado",
            quantity: "3",
        },
        {
            id: 22,
            title: "Conversación realizada",
            quantity: "1",
        },
        {
            id: 23,
            title: "Vacío",
            quantity: "0",
        },
    ];

    const totalQuantity = data.reduce(
        (acc, cur) => acc + parseInt(cur.quantity),
        0
    );

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
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Loading fonts</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.report}>
                <View style={styles.reportTitle}>
                    <View style={styles.reportRowLeft}>
                        <Text style={styles.reportRowLeftText}>
                            Nombre del estado
                        </Text>
                    </View>
                    <View style={styles.reportRowRight}>
                        <Text style={styles.reportRowRightText}>Cantidad</Text>
                    </View>
                </View>
                <View style={styles.reportInfo}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.reportRow}>
                                <View style={styles.reportInfoLeft}>
                                    <Text style={styles.reportInfoLeftText}>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={styles.reportInfoRight}>
                                    <Text style={styles.reportInfoRightText}>
                                        {item.quantity}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.reportFooter}>
                    <Text style={styles.reportFooterText}>Total</Text>
                    <Text style={styles.reportFooterText}>{totalQuantity}</Text>
                </View>
            </View>
        );
    }
};
export default Report;

const styles = StyleSheet.create({
    reportTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderBottomColor: "#0325FF14",
    },
    report: {
        marginTop: "15%",
        flexDirection: "column",
    },
    reportInfo: {
        width: width * 0.8,
        marginTop: "5%",
        flexDirection: "row",
        display: "flex",
    },
    reportRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    reportInfoLeft: {
        alignItems: "center",
    },
    reportInfoLeftText: {
        fontFamily: "DosisRegular",
        fontSize: 17,
        color: "#8898AA",
        textAlign: "left",
        // backgroundColor: "crimson",
    },
    reportInfoRight: {
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "lightgreen",
    },
    reportInfoRightText: {
        fontFamily: "DosisRegular",
        fontSize: 17,
        color: "#8898AA",
        textAlign: "center",
        // backgroundColor: "crimson",
    },
    reportFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderTopColor: "#0325FF14",
    },
    reportFooterText: {
        color: "#8395A5",
        fontFamily: "DosisSemiBold",
        fontSize: 30,
        textAlign: "left",
    },
    reportRowLeftText: {
        fontFamily: "DosisSemiBold",
        fontSize: 20,
        color: "#8395A5",
        textAlign: "left",
    },
    reportRowRightText: {
        fontFamily: "DosisSemiBold",
        fontSize: 20,
        color: "#8395A5",
        left: 25,
        textAlign: "right",
    },
});
