import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);

  
  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoal => [...currentGoal, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal!"
          style={styles.input} 
          onChangeText={goalInputHandeler} />
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
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
