import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import GeneralScreen from "../screens/GeneralScreen";
import CostCenterScreen from "../screens/CostCenterScreen";
import PersonalFinanceScreen from "../screens/PersonalFinanceScreen";
import MonthlyCustomersScreen from "../screens/MonthlyCustomersScreen";
import AccountScreen from "../screens/AccountScreen";
import ConsolidationManagerScreen from "../screens/ConsolidationManager";
import TabNav from "../navigation/TabNav";

import { useFonts } from "expo-font";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Drawer = createDrawerNavigator();

const InitialNav = () => {
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
            <Drawer.Navigator
                initialRouteName="Información general"
                // header={(headerTitle) => (
                //     <View style={styles.header}>
                //         <Text style={styles.headerTitle}>{headerTitle}</Text>
                //     </View>
                // )}
                screenOptions={{
                    drawerContentStyle: {
                        // width: width * 0.8,
                        backgroundColor: "#FD53A5",
                    },
                    drawerContentContainerStyle: {
                        width: width * 0.8,
                        // backgroundColor: "coral",
                    },
                    headerStyle: {
                        backgroundColor: "#fff",
                        height: height * 0.1,
                    },
                    headerTintColor: "#000",
                    headerTitleStyle: {
                        fontFamily: "DosisSemiBold",
                        fontSize: width * 0.05,
                    },
                }}
            >
                <Drawer.Screen
                    name="Mi cuenta"
                    component={AccountScreen}
                    options={{
                        drawerLabel: "Mi cuenta",

                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <Ionicons
                                    name="md-rocket-sharp"
                                    size={24}
                                    color="#fff"
                                />
                            </View>
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Información general"
                    component={TabNav}
                    options={{
                        drawerLabel: "Información general",

                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <MaterialIcons
                                    name="bar-chart"
                                    size={24}
                                    color="white"
                                />
                            </View>
                        ),
                    }}
                />
                {/* <Drawer.Screen
                    name="Información general"
                    component={GeneralScreen}
                    options={{
                        drawerLabel: "Información general",

                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <MaterialIcons
                                    name="bar-chart"
                                    size={24}
                                    color="white"
                                />
                            </View>
                        ),
                    }}
                /> */}
                <Drawer.Screen
                    name="Gestión centros"
                    component={CostCenterScreen}
                    options={{
                        drawerLabel: "Gestión centros",

                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <MaterialCommunityIcons
                                    name="home-city"
                                    size={24}
                                    color="white"
                                />
                            </View>
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Consolidado individual"
                    component={PersonalFinanceScreen}
                    options={{
                        drawerLabel: "Consolidado individual",

                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <Ionicons
                                    name="md-people"
                                    size={24}
                                    color="white"
                                />
                            </View>
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Consolidados Centro"
                    component={ConsolidationManagerScreen}
                    options={{
                        drawerLabel: "Consolidados centro",
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <Ionicons name="home" size={24} color="#fff" />
                            </View>
                        ),
                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                    }}
                />

                <Drawer.Screen
                    name="Clientes mes"
                    component={MonthlyCustomersScreen}
                    options={{
                        drawerLabel: "Clientes mes",

                        drawerLabelStyle: {
                            color: "#fff",
                            fontFamily: "DosisSemiBold",
                            fontSize: 17,
                        },
                        drawerIcon: ({ focused, color, size }) => (
                            <View>
                                <Ionicons
                                    name="md-calendar-outline"
                                    size={24}
                                    color="white"
                                />
                            </View>
                        ),
                    }}
                />
            </Drawer.Navigator>
        );
    }
};

// <Stack.Navigator
//     screenOptions={{
//         headerShown: false,
//     }}
//     initialRouteName="Account"
// >
//     <Stack.Screen
//         name="PersonalFinance"
//         component={PersonalFinanceScreen}
//     />
//     <Stack.Screen
//         name="MonthlyCustomers"
//         component={MonthlyCustomersScreen}
//     />
//     <Stack.Screen name="Account" component={AccountScreen} />
//     <Stack.Screen name="CostCenter" component={CostCenterScreen} />
//     <Stack.Screen name="General" component={GeneralScreen} />
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Splash" component={SplashScreen} />
//     <Stack.Screen name="Main" component={MainScreen} />
// </Stack.Navigator>

export default InitialNav;
