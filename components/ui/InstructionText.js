import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";


function InstructionText({ children }) {

    return (
        <Text style = {styles.instructionContainer}> {children} </Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
  
    instructionContainer: {
        color: Colors.accent500,
        fontSize: 24,
    },
})
