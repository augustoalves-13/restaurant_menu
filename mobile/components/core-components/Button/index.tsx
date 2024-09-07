import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
  children: any
  onPress: () => void
  disabled?: boolean
}

const Button = ({children, onPress, disabled}: ButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} className={`h-10 w-full mt-5 rounded-lg ${disabled ? 'bg-text-secondary' : 'bg-primary'} flex items-center justify-center`}>
      <Text className='text-[#fff]'>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button