import { View, Text, Pressable } from "react-native";
import React from "react";

const PrimaryButton = ({ text, onPress }) => {

  return (
    <Pressable
      onPress={onPress}
      className="bg-[#065A60] px-10 py-2 items-center rounded-2xl mb-4"
    >
      <Text className="text-xl text-[#F2E9E4] font-semibold capitalize">
        {text}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
