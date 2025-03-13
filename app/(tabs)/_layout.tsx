import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "./index.tsx"
import SearchScreen from "./SearchPage"
import ProfileScreen from "./ProfilePage"
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator()

export default function Layout() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 60,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#aaa",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>

      {/* Set StatusBar to Black */}
      <StatusBar backgroundColor="#161622" style="dark" />
    </>
  )
}
