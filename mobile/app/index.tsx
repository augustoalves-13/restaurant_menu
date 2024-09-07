import Button from "@/components/core-components/Button";
import Card from "@/components/core-components/Card";
import EntryField from "@/components/core-components/EntryFields";
import Footer from "@/components/core-components/Footer";
import LoaderDialog from "@/components/core-components/Loader-dialog";
import { AuthContext } from "@/contexts/AuthContext";
import fetcher from "@/utils/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const LoginScreen = () => {
  const {signIn} = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false)

  const authUserSession = async () => {
    //setIsLoading(true);
    Keyboard.dismiss
  
    await signIn({email, password})

    // setTimeout(async () => {
    //   try {
    //     const request = await fetcher("session", {
    //       method: "POST",
    //       token: false,
    //       body: {
    //         email: email,
    //         password: password,
    //       },
    //     });
  
    //     AsyncStorage.setItem('@user', JSON.stringify(request))
    //   } catch (error: any) {
    //     Toast.show({
    //       type: "error",
    //       text1: error?.message,
    //     });
    //   }
    //   setIsLoading(false);
    //   setIsLogged(true)
    // }, 1000);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-[1]">
          <View className="flex-[1] p-4 flex flex-col items-center justify-center bg-background">
            <StatusBar style="dark" />
            <Toast />
            <KeyboardAvoidingView
              className="w-full"
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Card>
                <Text className="text-primary font-extrabold text-3xl">
                  Bem vindo ao OrderStream
                </Text>
                <Text className="text-text-secondary text-lg">
                  Faça login para continuar
                </Text>
                <EntryField
                  onChangeText={(e: string) => setEmail(e)}
                  label="E-mail"
                  placeholder="Digite seu E-mail"
                />
                <EntryField
                  onChangeText={(e: string) => setPassword(e)}
                  label="Senha"
                  placeholder="Digite sua Senha"
                />
                <Button disabled={isLoading} onPress={authUserSession}>
                  {isLoading ? <ActivityIndicator color="#fff" /> : "Entrar"}
                </Button>
              </Card>
            </KeyboardAvoidingView>

            <Footer />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>

      {isLogged && (
        <LoaderDialog/>
      )}
    
    </>
  );
};

export default LoginScreen;
