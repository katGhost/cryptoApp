import React from 'react';
import { View, Text, Image } from 'react-native';
import cryptocurrencies from "../../components/data/cryptocurrencies.json";


const CoinItem = () => {
  return (
    <View className="flex-row justify-between items-center w-full mt-2 rounded-lg px-2 py-3 bg-[#003356] shadow-xl shadow-[#065A60]">
    <View className="flex-row space-x-2 items-center">
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        }}
        className="w-10 h-10"
      />
      <View className="">
        <Text className="text-lg capitalize text-[#F2E9E4] font-semibold opacity-100">
          bitcoin
        </Text>
        <Text className="text-lg uppercase text-[#F2E9E4] font-light">
          btc
        </Text>
      </View>
    </View>
    {/* right  view -- contains percentages, only top and bottom*/}
    <View>
      <Text className="text-lg uppercase text-[#065A60] font-normal">
        $47,481.08
      </Text>
      <Text className="text-lg uppercase text-[#065A60] font-normal">
        +8.02%
      </Text>
    </View>
  </View>
  );
}

export default CoinItem