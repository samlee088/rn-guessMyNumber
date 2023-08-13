import {Dimensions, Image, StyleSheet, Text, ScrollView, useWindowDimensions, View } from "react-native";

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Colors } from "react-native/Libraries/NewAppScreen";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if( width < 380 ) {
        imageSize = 150;
    }

    if ( height < 400 ) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return(
        <ScrollView style = {styles.screen}>
            <View style = { styles.screenContainer }>
                <Title> Game Over ! </Title>
                <View style = { [styles.imageContainer, imageStyle] }>
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
        </ScrollView>
    )
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    screenContainer: {
       flex: 1,
       padding: 24,
       justifyContent: 'center',
       alignItems: 'center',
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colors.primary800,
     /*    width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150, */
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
    screen: {
        flex: 1
    },
})