import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import GeneralScreen from "../screens/GeneralScreen";
import CostCenterScreen from "../screens/CostCenterScreen";
import PersonalFinanceScreen from "../screens/PersonalFinanceScreen";
import MonthlyCustomersScreen from "../screens/MonthlyCustomersScreen";

const Stack = createStackNavigator();
const InitialNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="MonthlyCustomers"
        >
            <Stack.Screen
                name="PersonalFinance"
                component={PersonalFinanceScreen}
            />
            <Stack.Screen
                name="MonthlyCustomers"
                component={MonthlyCustomersScreen}
            />
            <Stack.Screen name="CostCenter" component={CostCenterScreen} />
            <Stack.Screen name="General" component={GeneralScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
    );
};

export default InitialNav;
