import { Image, StyleSheet, Text, View } from "react-native";

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from "react-native/Libraries/NewAppScreen";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    return(
        <View style = { styles.screenContainer }>
            <Title> Game Over ! </Title>
            <View style = { styles.imageContainer }>
                <Image 
                    source = { require('../assets/images/success.png') } 
                    style = {styles.image}
                />
            </View>
            <Text style = { styles.summaryText }>
                Your Phone needed <Text style = { styles.highlight }>{roundsNumber}</Text> rounds to guess the number <Text style = { styles.highlight }>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screenContainer: {
       flex: 1,
       padding: 24,
       justifyContent: 'center',
       alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        width: 300,
        height: 300,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
})