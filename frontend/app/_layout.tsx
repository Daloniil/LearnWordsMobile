// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
// import {useFonts} from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import {useEffect} from 'react';
// import 'react-native-reanimated';
// import {useColorScheme} from '@/components/useColorScheme';
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import TabsLayout from "@/app/(tabs)/_layout";
// import TabsaComponent from "@/app/(tabsa)/_layout";
//
// export {ErrorBoundary} from 'expo-router';
//
// // Создаем стек навигации
// const Stack = createNativeStackNavigator();
//
// export const unstable_settings = {
//     initialRouteName: '(tabsa)',
// };
//
// SplashScreen.preventAutoHideAsync();
//
// export default function RootLayout() {
//     const colorScheme = useColorScheme();
//
//     const [loaded, error] = useFonts({
//         SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//         ...FontAwesome.font,
//     });
//
//     useEffect(() => {
//         if (error) throw error;
//     }, [error]);
//
//     useEffect(() => {
//         if (loaded) {
//             SplashScreen.hideAsync();
//         }
//     }, [loaded]);
//
//     if (!loaded) {
//         return null;
//     }
//
//     return (
//         <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//             <Stack.Navigator initialRouteName='(tabsa)' screenOptions={{headerShown: true}}>
//                 <Stack.Screen name="(tabsa)" component={TabsaComponent} options={{headerShown: false}}/>
//                 <Stack.Screen name="(tabs)" component={TabsLayout} options={{headerShown: false}}/>
//             </Stack.Navigator>
//         </ThemeProvider>
//     );
// }


import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/components/useColorScheme';

export {ErrorBoundary} from 'expo-router';

export const unstable_settings = {initialRouteName: '(tabsa)/index'};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabsa)" options={{headerShown: false}}/>
                <Stack.Screen name="modal" options={{presentation: 'modal'}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
        </ThemeProvider>
    );
}
