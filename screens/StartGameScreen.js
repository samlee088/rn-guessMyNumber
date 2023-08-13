import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

import Title from '../components/ui/Title';
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onConfirmNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {

            Alert.alert('Invalid number!', 
                'Number has to be a number between 1 and 99', 
                [ { text: 'Okay', style: 'destructive', onPress: resetInputHandler } ]);

            return;
        }

        onConfirmNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return(
        <ScrollView style = {styles.screen}>
            <KeyboardAvoidingView style = {styles.screen} behavior = "position" >
                <View style = {[styles.rootContainer, {marginTop : marginTopDistance} ]}>
                    <Title> Guess My Number </Title>
                    <Card>
                        <InstructionText> Enter A Number </InstructionText>
                        <TextInput 
                            style={styles.numberInput} 
                            maxLength={2} 
                            keyboardType='number-pad'
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                            </View>
                    </Card>
                </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

/* const deviceHeight = Dimensions.get('window').height; */
/* Although this method allows for dynamic resizing of the page depending on the size of the screen,
this method is limited due to it using these setting only once.  */

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        /* marginTop: deviceHeight < 380 ? 30 : 100, */
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1
    },

})