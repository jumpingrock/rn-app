import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

    return (
      <Modal visible={true}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course goal!"
            style={styles.input} 
            onChangeText={goalInputHandeler} 
            value={enteredGoal}/>
          <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}/>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1,   
    marginBottom: 10
  }
});
export default GoalInput;