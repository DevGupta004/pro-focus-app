import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation.js'
import { theme } from "./src/themes/dark.js";
import { ThemeProvider } from "styled-components";


const App = () => {
	return (
		<ThemeProvider theme={theme}>
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
		</ThemeProvider>
	)
}

export default App