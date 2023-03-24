import React from "react";
import { View, Text, Image } from "react-native";
import cryptocurrencies from "../../components/data/cryptocurrencies.json";
import { AntDesign } from "@expo/vector-icons";

const CoinItem = ({ marketCoin, index }) => {
  const {
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
  } = marketCoin;

  const colorize = price_change_percentage_24h < 0 ? "#DC2626" : "#16A34A";


  return (
    <View className="flex-row justify-between items-center w-full mt-2 rounded-lg px-2 py-3 bg-[#003356] shadow-xl shadow-[#081b1c]">
      <View className="flex-row space-x-2 items-center">
        <Image
          source={{uri: image}}
          className="w-10 h-10"
        />
        <View className="">
          <Text className="text-lg capitalize text-[#F2E9E4] font-semibold opacity-100">
            {name}
          </Text>
          <Text className="text-lg uppercase text-[#F2E9E4] font-light">
            {symbol}
          </Text>
        </View>
      </View>
      {/* right  view -- contains percentages, only top and bottom*/}
      <View>
        <Text className="text-lg uppercase text-[#065A60] font-normal">
          ${" "}{current_price}
        </Text>
        <View className="flex-row items-center space-x-2">
        <Text className={`${price_change_percentage_24h< 0 ? 'text-primary-500' : 'text-secondary-500'} font-semibold`} >
          {price_change_percentage_24h.toFixed(2)}%
        </Text>
        <AntDesign name={price_change_percentage_24h< 0 ? 'caretdown' : 'caretup'} size={18} color={colorize} />
        </View>
      </View>
    </View>
  );
};




export default CoinItem;
