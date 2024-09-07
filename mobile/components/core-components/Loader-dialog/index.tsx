import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Image, View, StyleSheet, Animated, Easing, Text } from "react-native";

const LoaderDialog = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  // Função para iniciar a animação de rotação
  const startSpin = () => {
    spinValue.setValue(0); // Reinicia o valor
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1, // Vai até 1
        duration: 2000, // Duração da animação em ms
        useNativeDriver: true, // Usa o driver nativo para desempenho melhor
        easing: Easing.linear,
      })
    ).start(); // Inicia a animação
  };

  // Inicia a animação quando o componente é montado
  useEffect(() => {
    startSpin();
  }, []);

  // Define a rotação baseada no valor de animação
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Gira de 0 a 360 graus
  });

  setTimeout(() => {
    router.push('/home')
  },2000)

  return (
    <View className="bg-background" style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={[styles.image, styles.overlay]}
          source={require("@/assets/images/logo-full.png")}
        />
        <Animated.Image
          style={[styles.image2, { transform: [{ rotateY: spin }, {translateX: 0}, {translateY: 0}] }]}
          source={require("@/assets/images/logo-line.png")}
        />
      </View>
      <Text className="text-primary text-lg">Importando dados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    width: 100,
    height: 100,
    position: "relative",
  },
  image: {
    // width: '100%',
    // height: '100%',
    // resizeMode: 'contain',
    position: "absolute",
    top: "65%",
    left: "60%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  image2: {
    // width: '100%',
    // height: '100%',
    // resizeMode: 'contain',
    position: "absolute",
    top: 10,
    left: 0,
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  overlay: {
    // height: 110,
    // width: 110,
    //right: '10%'
  },
});

export default LoaderDialog;
