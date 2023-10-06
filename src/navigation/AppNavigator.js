import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailScreen";
import { COLORS } from "../constants/colors";

import { AntDesign, Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <Octicons
                  name="home"
                  size={24}
                  color={focused ? COLORS.primaryColor : "#d7d6ee"}
                />
                <Octicons
                  name="dot-fill"
                  size={10}
                  color={focused ? COLORS.primaryColor : "#d7d6ee"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="details"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarIcon}>
                <Octicons
                  name="gear"
                  size={24}
                  color={focused ? COLORS.primaryColor : "#d7d6ee"}
                />
                <Octicons
                  name="dot-fill"
                  size={10}
                  color={focused ? COLORS.primaryColor : "#d7d6ee"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.whiteColor,
    paddingTop: 5,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
});

export default AppNavigator;
