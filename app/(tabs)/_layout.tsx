import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabBar() {
    return <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Hjem",
                tabBarIcon: ({ color }) => (
                    <AntDesign name="home" size={24} color={color} />

                )
            }} />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Profil",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="person-outline" size={24} color={color} />
                )
            }} />
    </Tabs>
}