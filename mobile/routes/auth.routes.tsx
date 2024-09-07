import { Stack } from 'expo-router'

const AuthRoutes = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='home'/>
    </Stack>
  )
}

export default AuthRoutes