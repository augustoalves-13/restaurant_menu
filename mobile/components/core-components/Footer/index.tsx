import React from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'

const Footer = () => {
  return (
    <Image className='absolute bottom-0' source={require('@/assets/images/order-logo.png')}/>
  )
}

export default Footer