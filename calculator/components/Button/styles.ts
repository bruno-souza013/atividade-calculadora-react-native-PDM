import { StyleSheet } from "react-native";
import { Colors } from "@/utils/Colors";

export const styles = StyleSheet.create({
    button: {
        height:72,
        width:'18%',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.button,
    },
    text_button: {
        fontSize: 32,
        color: Colors.text,
    }
})