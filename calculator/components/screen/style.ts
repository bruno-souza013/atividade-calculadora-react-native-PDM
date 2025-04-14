import { StyleSheet } from 'react-native';
import { Colors } from '@/utils/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    display: {
        flex: 1,
        backgroundColor: Colors.display,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
},
    keypad: {
        flex: 2,
        backgroundColor: Colors.background,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 32,
        padding: 32,
    },
    text_display: {
        fontSize: 72,
        color: Colors.text,
},   
        text_display_secondary: {
        fontSize: 48,
        color: Colors.text,
    },


});

export default styles;