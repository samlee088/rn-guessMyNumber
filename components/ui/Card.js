import { Dimensions, StyleSheet , View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   
    inputContainer: {
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        /* Elevation is an IOS property only */
        elevation: 4,
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 10 : 18,
        padding: 16,
        /* Shadow is for IOS */
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',

    },

})