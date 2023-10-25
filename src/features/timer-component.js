import { View, Text, StyleSheet, Platform, Vibration } from "react-native";
import { useState, useEffect } from "react";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { Countdown } from "../components/countdown/countdown";
import { RoundedButton } from "../components/rounded-button/rounded-button";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { PATTERN } from "../utils/vibration-pattern";
import { Timing } from "./timing"

const INTIALTIME = 5;

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(INTIALTIME);

  const startPauseHandler = () => {
    Vibration.cancel();
    setIsStarted((boolstate) => !boolstate);
  }

  const endHandler = () => {
    Vibration.vibrate(PATTERN, true);
    setIsStarted(false);
    onTimerEnd({ 
      "subject": focusSubject, 
      "time": new Date()
    });
  }

  const clearHandler = () => {
    clearSubject();
    Vibration.cancel();
  }

  return (
    <View style={ styles.container }> 
      <View style={ styles.countdown }> 
        <Countdown
          minutes={minutes}
          isPaused={!isStarted} 
          onProgress={setProgress} 
          onEnd={endHandler} 
        />
        <View style={styles.indication}>
          <Text style={styles.title}>Focusing on  </Text>
          <Text style={styles.task}> {focusSubject} </Text>
        </View>
      </View>
      <View style={styles.progress}> 
        <ProgressBar 
          style={styles.progressBar}
          color={colors.darkblue2} 
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}> 
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton 
          title={ !isStarted ? "start" : "pause"}
          onPress={startPauseHandler} />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton 
          size={50}
          title="Back"
          onPress={clearHandler} />
      </View>
    </View>
  )
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  indication: {
    paddingTop: spacing.xxl
  },
  title: {
    textAlign: "center",
    fontWeight: "bold"
  },
  task: {
    textAlign: "center",
  },
  progress: {
    paddingTop: spacing.sm,
  },
  progressBar: {
    height: spacing.sm
  },
  timingWrapper: {
    flex:0.3,
    paddingTop: spacing.lg,
    flexDirection: "row"
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  }
})

