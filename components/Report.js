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
    return (
        <View style={styles.report}>
            <View style={styles.reportTitle}>
                <View style={styles.reportRowLeft}>
                    <Text style={styles.reportRowLeftText}>
                        Nombre del estado
                    </Text>
                </View>
                <View style={styles.reportRowRight}>
                    <Text style={styles.reportRowText}>Cantidad</Text>
                </View>
            </View>
            <View style={styles.reportInfo}>
                <View style={styles.reportInfoLeft}>
                    <Text style={styles.reportInfoLeftText}>
                        Primer contacto
                        {"\n"}
                        Informacion Enviada
                        {"\n"}
                        Segundo contacto
                        {"\n"}
                        Visita{"\n"}
                        agendada{"\n"} Para más adelante {"\n"}Para otro
                        proyecto{"\n"} No contesta {"\n"}Sin estado {"\n"}
                        Localizar proyecto{"\n"} Compro fuera de Tu Casa Propia{" "}
                        {"\n"}Compro en Tu Casa Propia
                        {"\n"} Cita en sala de ventas
                        {"\n"} Interesado en otra ciudad
                        {"\n"} Descartado por información errada{"\n"}{" "}
                        Descartado por cliente conflictivo{"\n"} Cita por
                        videollamada{"\n"} No cumplió la cita{"\n"}
                        Asistió a la cita {"\n"}Lead en seguimiento{"\n"}{" "}
                        Contactado
                        {"\n"}
                        Contactado - interactuado{"\n"}
                        Conversación realizada (Vacío)
                    </Text>
                </View>
                <View style={styles.reportInfoRight}>
                    <Text style={styles.reportInfoRightText}>
                        0{"\n"}1{"\n"}2{"\n"}3{"\n"}
                        56{"\n"}77{"\n"}5{"\n"}3{"\n"}4{"\n"}8{"\n"}9{"\n"}2
                        {"\n"}34
                        {"\n"}5{"\n"}6{"\n"}7{"\n"}9 {"\n"}6{"\n"}7{"\n"}2{"\n"}
                        3{"\n"}1{"\n"}0{"\n"}
                    </Text>
                </View>
            </View>
        </View>
    );
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
    reportRowLeft: { alignItems: "center" },
    reportRowLeftText: {
        fontFamily: "DosisSemiBold",
        fontSize: 15,
        color: "#8898AA",
        textAlign: "right",
    },
    reportRowRight: {
        alignItems: "center",
    },
    reportRowText: {
        fontFamily: "DosisSemiBold",
        fontSize: 15,
        color: "#8898AA",
    },
    reportInfo: {
        width: width * 0.8,
        marginTop: "5%",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    reportInfoLeft: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    reportInfoLeftText: {
        fontFamily: "DosisRegular",
        fontSize: 17,
        color: "#8898AA",
        textAlign: "left",
        // backgroundColor: "crimson",
    },
    reportInfoRight: {
        // flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "flex-start",
    },
    reportInfoRightText: {
        fontFamily: "DosisRegular",
        fontSize: 17,
        color: "#8898AA",
        textAlign: "center",
        // backgroundColor: "crimson",
    },
});
