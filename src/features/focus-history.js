import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import { RoundedButton } from "../components/rounded-button/rounded-button";
import { format } from 'date-fns';

export const FocusHistory = ({ history, repeatSubj, clearHistory }) => {
  if(!history || !history.length) return (<Text style={styles.title}> We havent focuset on anything yet </Text>);

  const renderListItem = ({ item }) => {
    const { subject, time } = item;
    return(
      <Text style={styles.item} onPress={() => repeatSubj(subject)}> 
       - {subject.charAt(0).toUpperCase() + subject.slice(1)}. Done at <i>{format(time, 'dd-MM-yyyy HH:mm:ss')}</i>
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we are focused on: </Text>
      <FlatList 
        style={styles.container}
        data={history.sort((a, b) => new Date(b.time) - new Date(a.time))}
        renderItem={renderListItem}
      />
      <View style={styles.clearHistoryBtn}>
        <RoundedButton 
          style={styles.btn}
          size={spacing.xxxl}
          title="clear"
          onPress={clearHistory} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.darkblue,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: "bold",
    marginTop: spacing.lg
  },
  item: {
    fontSize: spacing.md,
    color: colors.black
  },
  clearHistoryBtn: {
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    backgroundColor: colors.red
  }
});