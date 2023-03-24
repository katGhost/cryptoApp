import { View, Text, Pressable } from "react-native";
import React from "react";

const SecondaryButton = ({ text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="px-10 bg-transparent shadow-2xl shadow-[#000] border-2 mb-4 border-[#4D194D] py-2 items-center rounded-2xl"
    >
      <Text className="text-xl text-[#F2E9E4] font-semibold capitalize">
        {text}
      </Text>
    </Pressable>
  );
};

export default SecondaryButton;
