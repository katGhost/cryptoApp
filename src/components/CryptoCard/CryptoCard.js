import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CoinItem from '../CoinItem/CoinItem';
import cryptocurrencies from "../../components/data/cryptocurrencies.json";

const CryptoCard = () => {
  return (
    <View>
      <FlatList
      data={cryptocurrencies}
      renderItem={({item}) => <CoinItem marketCoin={item} index={item} />}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CryptoCard