import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { RoundedButton } from "../components/rounded-button/rounded-button";

export const Focus = ({ addSubj }) => {
  const [subj, setSubj] = useState(null);
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}> 
        <TextInput 
          label="Would would you like to focus on?" 
          placeholder="So?" 
          onChangeText={setSubj}
          style={styles.textInput}
        />
        <View  style={styles.button}> 
          <RoundedButton
            style={styles.rb}
            title="+" 
            size={50}
            onPress={() => addSubj(subj)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  button: {
    justifyContent: "center"
  },
  rb: {
    backgroundColor: colors.darkblue2
  }
})