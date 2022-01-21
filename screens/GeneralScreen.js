import React from "react";

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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GeneralScreen = ({ route }) => {
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
                    {/* <View style={styles.header}> */}
                    {/* <Text style={styles.headerText}>
                            Información general
                        </Text> */}
                    {/* </View> */}

                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <View style={styles.bodyContentRow}>
                                <View style={styles.card}>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.cardText}>
                                            TOTAL LEADS LIBRES
                                        </Text>
                                        <MaterialIcons
                                            name="people-outline"
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
                                        <Text style={styles.cardText}>
                                            TOTAL LEADS EN PROCESO
                                        </Text>
                                        <MaterialIcons
                                            name="people-outline"
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
                                        <Text style={styles.cardText}>
                                            TOTAL CLIENTES MES
                                        </Text>
                                        <MaterialIcons
                                            name="people-outline"
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
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

export default GeneralScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",

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
        // backgroundColor: "crimson",

        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    bodyContentRow: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: "#2C2828",
    },
    card: {
        // backgroundColor: "coral",

        // flex: 1,
        width: width * 0.55,

        height: height * 0.25,

        marginBottom: 20,
        // paddingBottom: 25,
        backgroundColor: "#fff",
        borderRadius: 10,
        // borderWidth: 0.5,
        // borderColor: "#2C28281C",
        shadowColor: "#2C2828",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,

        elevation: 4,
    },
    cardContent: {
        flex: 1,
        paddingVertical: 10,
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-around",
        justifyContent: "space-evenly",
        // marginBottom: 100,
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
