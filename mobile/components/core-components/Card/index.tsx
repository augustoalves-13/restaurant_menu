import React, { ReactNode } from "react";
import { Platform, Text, View } from "react-native";

type CardProps = {
  children: any  
  custom?: string
}

const Card = ({children, custom}: CardProps) => {
  return (
    <View
      style={{
        ...Platform.select({
          ios: {
            shadowColor: "black",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
          android: {
            elevation: 3,
          },
        }),
      }}
      className={`bg-secondary w-full rounded-lg p-8 flex flex-col items-center ${custom ?? ''}`}
    >
      {children}
    </View>
  );
};

export default Card;
