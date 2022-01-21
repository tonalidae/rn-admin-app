import React, { useEffect, memo, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GeneralScreen from "../screens/GeneralScreen";
import CostCenterScreen from "../screens/CostCenterScreen";
import PersonalFinanceScreen from "../screens/PersonalFinanceScreen";
import ConsolidationManagerScreen from "../screens/ConsolidationManager";
import MonthlyCustomersScreen from "../screens/MonthlyCustomersScreen";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import SearchIcon from "./icons/SearchIcon";
// import HomeIcon from "./icons/HomeIcon";
// import ProfileIcon from "./icons/ProfileIcon";
// import FavoritesIcon from "./icons/FavoritesIcon";
// import MoreIcon from "./icons/MoreIcon";
import { useFocusEffect } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNav = memo(({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#0F788B",
                tabBarStyle: {
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    right: 10,
                    paddingBottom: 20,
                    paddingTop: 20,
                    height: 70,
                    elevation: 2,
                    borderWidth: 0,
                    borderRadius: 30,
                    shadowColor: "#0F788B",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.1,
                },
            }}
            initialRouteName="General"
        >
            <Tab.Screen
                name="General"
                component={GeneralScreen}
                options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="bar-chart"
                            size={20}
                            color="#748A9D"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="CostCenter"
                component={CostCenterScreen}
                options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home-city"
                            size={20}
                            color="#748A9D"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="PersonalFinance"
                component={PersonalFinanceScreen}
                options={({ navigation }) => ({
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-people" size={20} color="#748A9D" />
                    ),
                })}
            />
            <Tab.Screen
                name="ConsolidationManager"
                component={ConsolidationManagerScreen}
                options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={20} color="#748A9D" />
                    ),
                }}
            />
            <Tab.Screen
                name="MonthlyCustomers"
                component={MonthlyCustomersScreen}
                options={{
                    title: "",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="md-calendar-outline"
                            size={20}
                            color="#748A9D"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
});
export default TabNav;
