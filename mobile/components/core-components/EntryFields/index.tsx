import React from 'react'
import { Text, TextInput } from 'react-native'
import { View } from 'react-native'

type EntryFieldProps = {
  placeholder: string
  label: string
  onChangeText: (e: string) => void
}

const EntryField = ({placeholder, label, onChangeText}: EntryFieldProps) => {
  return (
    <View className='w-full flex flex-col gap-2 mt-2'>
      <Text className='text-text-primary font-bold'>{label}</Text>
      <TextInput onChangeText={onChangeText} className='border-2 border-text-secondary rounded-md h-10 px-2' placeholderTextColor='#A0A0A0' placeholder={placeholder}/>
    </View>
  )
}

export default EntryField