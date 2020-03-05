import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal!"
          style={styles.input} />
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flexDirection:'column',
    // alignItems: 'flex-end'
  },
  inputContainer: {
    flexDirection: "row", 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1
  }
  
});
