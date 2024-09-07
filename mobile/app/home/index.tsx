import Card from '@/components/core-components/Card'
import Footer from '@/components/core-components/Footer'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const HomeScreen = () => {

  return (
    <SafeAreaView className='flex-1 p-4 bg-background'>
      <Card>
        <Text>Início</Text>
      </Card>
      <Footer/>
    </SafeAreaView>
  )
}

export default HomeScreen