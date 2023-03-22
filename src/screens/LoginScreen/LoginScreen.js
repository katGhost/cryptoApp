import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import PrimaryButton from "../../components/CustomButtons/PrimaryButton";
import SecondaryButton from "../../components/CustomButtons/SecondaryButton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

   const navigation = useNavigation();

   const onLoginPress = () => {
      navigation.navigate('Home');
   }

   const onAccountPress = () => {
      
   }

  return (
    <SafeAreaView className="bg-[#00111C] flex-1 justify-center items-center px-8">
      {/* Crypto icons */}
      <View className="mt-8 mb-10 w-full flex-row justify-around items-center">
        <FontAwesome5 name="coins" size={80} color="#065A60" />
        <FontAwesome5 name="ethereum" size={80} color="#065A60" />
        <FontAwesome5 name="bitcoin" size={80} color="#065A60" />
      </View>
      {/* 2nd section, a subtitle */}
      <Text className="text-4xl text-[#065A60] font-bold mb-4 mt-10 leading-10">Join and help build a better future</Text>
      <Text className="text-xl text-[#F2E9E4] font-semibold mb-10 leading-7">Manage all your exchange accounts and simulate your trading</Text>
      {/* buttons */}
      <PrimaryButton text={"sign in"} onPress={onLoginPress} />
      <SecondaryButton text={"create an account"} />
    </SafeAreaView>
  );
};

export default LoginScreen;
