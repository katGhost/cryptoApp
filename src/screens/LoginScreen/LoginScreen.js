import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <SafeAreaView className="bg-[#00111C] flex-1 justify-center items-center px-6">
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
      <Pressable onPress={() => {console.warn('hey There')}} className="bg-[#065A60] px-10 w-full py-2 items-center rounded-2xl mb-4">
         <Text className="text-xl text-[#F2E9E4] font-semibold capitalize">Sign in</Text>
      </Pressable>
      <Pressable onPress={() => {console.warn('hey There')}} className="px-10 bg-transparent w-full border-2 mb-4 border-[#4D194D] py-2 items-center rounded-2xl">
         <Text className="text-xl text-[#F2E9E4] font-semibold capitalize">create an account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;
