import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}) {

    function pressHandler() {
        onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] 
                        : styles.buttonInnerContainer
                } 
                    onPress={pressHandler} 
                    android_ripple={{color: Colors.primary600}}
            >
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 8,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})

