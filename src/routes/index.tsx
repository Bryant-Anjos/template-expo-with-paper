import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CombinedDefaultTheme } from '@theme/combinedThemes'

import AppRoutes from './app.routes'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer theme={CombinedDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
