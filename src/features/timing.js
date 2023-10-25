import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/rounded-button/rounded-button";
import { spacing } from "../utils/sizes";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
        <View style={styles.timingButton}> 
          <RoundedButton 
            size={spacing.xxxl} 
            title="10min"
            onPress={() => onChangeTime(10)} />
        </View>
        <View style={styles.timingButton}> 
          <RoundedButton 
            size={spacing.xxxl} 
            title="15min"
            onPress={() => onChangeTime(15)} />
        </View>
        <View style={styles.timingButton}> 
          <RoundedButton 
            size={spacing.xxxl} 
            title="20min"
            onPress={() => onChangeTime(20)} />
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center"
  }
})