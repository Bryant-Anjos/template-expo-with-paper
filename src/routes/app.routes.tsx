import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import * as Screens from '@screens/App'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppRoutes
