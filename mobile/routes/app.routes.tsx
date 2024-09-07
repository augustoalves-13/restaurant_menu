import { Stack } from 'expo-router'

const AppRoutes = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='index'/>
    </Stack>
  )
}

export default AppRoutes