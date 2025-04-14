import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "@/utils/Colors";

const Button = ({ title, type, onPress }: { title: string, type: 'top' | 'right' | 'number'; onPress: () => void }) => {
    const backgroundColor = 
        type === 'top' ? Colors.operationButton :
        type === 'right' ? Colors.equalButton :
        Colors.numberButton;
        
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.text_button}>{title}</Text>
        </TouchableOpacity>
    );
};


export default Button;
