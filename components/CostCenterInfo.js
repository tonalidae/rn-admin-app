import React, { useState, useEffect } from "react";

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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CostCenterInfo = () => {
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
        return <Text>Loading...</Text>;
    } else {
        return (
            <View style={styles.bodyCardContainer}>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            TOTAL LEADS EN PROCESO
                        </Text>
                        <Feather
                            name="loader"
                            size={60}
                            color="#FD53A5"
                            style={{ opacity: 0.5 }}
                        />
                        <Text style={styles.cardNumbers}>
                            {/* {route.params.leads} */}
                            123.456
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>TOTAL LEADS LIBRES</Text>
                        <Feather
                            name="loader"
                            size={60}
                            color="#FD53A5"
                            style={{ opacity: 0.5 }}
                        />
                        <Text style={styles.cardNumbers}>
                            {/* {route.params.leads} */}
                            123.456
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
};

export default CostCenterInfo;

const styles = StyleSheet.create({
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
