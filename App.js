import { Text, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/focus";
import { useState } from "react";
import Timer from "./src/features/timer-component";
import { FocusHistory } from "./src/features/focus-history";

export default function App() {
  const [ currentSubj, setCurrentSubj ] = useState(null);
  const [ history, setHistory ] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      { !currentSubj ? <>
          <Focus addSubj={setCurrentSubj} /> 
          <FocusHistory 
            history={history} 
            repeatSubj={(subj) => setCurrentSubj(subj)}
            clearHistory={() => setHistory([])}
          />
        </> : 
        <Timer 
          focusSubject={currentSubj}
          onTimerEnd={(subj) => setHistory((history) => [...history, subj])}
          clearSubject={() => setCurrentSubj(null)}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.beige,
    padding: 8,
  },
});
