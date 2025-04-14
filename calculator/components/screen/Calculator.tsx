import { Text, View } from "react-native";
import React from "react";
import Button from "@/components/Button";
import styles from "./style";


const Calculator = () => {
    const [firstNumber, setFirstNumber] = React.useState('');
    const [displayNumber, setDisplayNumber] = React.useState('0');
    const [operation, setOperation] = React.useState('');

    const numberimput = (number: string) => {
       if(displayNumber == '0' || displayNumber == 'Não é possível dividir por 0!'){
        setDisplayNumber(number)
       }else{
        setDisplayNumber(displayNumber + number)
       }
    }

    const operationinput = (operation: string) => {
        setOperation(operation)
        setFirstNumber(displayNumber)
        setDisplayNumber('0')
    };
    const calculate = () => {
        const number1 = parseFloat(firstNumber);
        const number2 = parseFloat(displayNumber);
    
        if (operation == '+') {
            setDisplayNumber((number1 + number2).toString());
        } else if (operation == '-') {
            setDisplayNumber((number1 - number2).toString());
        } else if (operation == '*') {
            setDisplayNumber((number1 * number2).toString());
        } else if (operation == '/') {
            if (number2 !== 0) {
                setDisplayNumber((number1 / number2).toString());
            } else {
                setDisplayNumber('Não é possível dividir por 0!');
            }
        } else if (operation == '%') {
            setDisplayNumber((number1 % number2).toString());
        }
        setOperation('');
        setFirstNumber('');
    };

    const clear = () => {
        setDisplayNumber('0');
        setFirstNumber('');
        setOperation('');
    };
    const backspace = () => {
        if (displayNumber.length === 1) {
            setDisplayNumber('0');
        } else {
            setDisplayNumber(displayNumber.slice(0, -1));
        }
    };
    return(
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.text_display_secondary}>{firstNumber + operation}</Text>
                <Text style={styles.text_display}>{displayNumber}</Text>
            </View>
            <View style={styles.keypad}>
                <Button title='C' type="top" onPress={clear} />
                <Button title='⌫' type="top" onPress={backspace} />
                <Button title='%' type="top" onPress={() => operationinput('%')}/>
                <Button title='/' type="top" onPress={() => operationinput('/')}/>
                <Button title='7' type="number" onPress={() => numberimput('7')}/>
                <Button title='8' type="number" onPress={() => numberimput('8')} />
                <Button title='9' type="number" onPress={() => numberimput('9')}/>
                <Button title='X' type="right" onPress={() => operationinput('*')} />
                <Button title='6' type="number" onPress={() => numberimput('6')}/>
                <Button title='5' type="number" onPress={() => numberimput('5')}/>
                <Button title='4' type="number" onPress={() => numberimput('4')}/>
                <Button title='-' type="right" onPress={() => operationinput('-')}/>
                <Button title='1' type="number" onPress={() => numberimput('1')} />
                <Button title='2' type="number" onPress={() => numberimput('2')}/>
                <Button title='3' type="number" onPress={() => numberimput('3')}/>
                <Button title='+' type="right" onPress={() => operationinput('+')}/>
                <Button title='0' type="number" onPress={() => numberimput('0')}/>
                <Button title='00' type="number" onPress={() => numberimput('00')}/>
                <Button title='.' type="number" onPress={() => numberimput('.')}/>
                <Button title='=' type="right" onPress={calculate}/>
                
            </View>
        </View>
    )
}

export default Calculator;