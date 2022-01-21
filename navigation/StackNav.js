import * as React from "react";
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import InitialNav from "./InitialNav";

const Stack = createStackNavigator();
const StackNav = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 6000);
    }, []);
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            {(!isLoading && (
                <React.Fragment>
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="InitialNav" component={InitialNav} />
                </React.Fragment>
            )) || <Stack.Screen name="Loading" component={SplashScreen} />}
        </Stack.Navigator>
    );
};
export default StackNav;
