import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import cryptologo from "../../../assets/cryptologo.png";
import SecondaryButton from "../../components/CustomButtons/SecondaryButton";
import PrimaryButton from "../../components/CustomButtons/PrimaryButton";
import CoinItem from "../../components/CoinItem/CoinItem";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#00111C] relative">
      {/* Top section, includes logo and two icons on the right */}
      <View className="w-full mt-8 px-6 flex-row justify-between">
        <View className="flex-row items-center space-x-2">
          <View className="bg-[#00111C] border-2 border-[#003356] rounded-full w-16 h-16 items-center justify-center">
            <MaterialCommunityIcons
              name="hand-coin"
              size={30}
              color="#003356"
            />
          </View>
          <Text className="text-2xl text-[#003356] font-semibold">Crypto</Text>
        </View>
        {/* ICONS */}
        <View className="flex-row items-center space-x-2">
          <View className="p-2 border-2 rounded-xl border-[#4D194D]">
            <MaterialIcons name="favorite" size={30} color="#F2E9E4" />
          </View>
          <View className="p-2 border-2 rounded-xl border-[#4D194D]">
            <MaterialIcons name="notifications" size={30} color="#F2E9E4" />
          </View>
        </View>
      </View>

      {/* Round Border Section */}
      <View className="mt-8 items-center relative">
        <View className="px-5 py-5 rounded-full bg-[#4D194D] shadow-xl shadow-[#065A60]">
          <View className="bg-[#00111C] rounded-full flex-col w-56 h-56 shadow-md shadow-black items-center justify-center">
            <Text className="text-[#F2E9E4] text-xl font-semibold capitalize mb-4">
              total balance
            </Text>
            <Text className="text-2xl text-[#065A60] font-bold mb-2">
              $ 16 000.29
            </Text>
            {/* Percentiles */}
            <View className="flex-row items-center space-x-2 text-center">
              <Text className="text-[#003356] text-base font-medium">
                +3.86%
              </Text>
              <Text className="text-[#F2E9E4] text-3xl font-medium">|</Text>
              <Text className="text-[#003356] text-base font-medium">
                -$132.55
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Mid Section, two buttons : primary and seconday*/}
      <View className="flex-row px-6 items-center justify-evenly mt-6">
        <SecondaryButton onPress={() => {}} text="trade" />
        <PrimaryButton onPress={() => {}} text="transfer" />
      </View>
      <View className="flex-1 items-center mt-4 px-6 bg-slate-300">
        {/* left View -- contains an Image, the title and a sub */}
        <CoinItem />

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
