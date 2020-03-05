import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState([]);

  
  const goalInputHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoal => [
      ...currentGoal, 
      {key: Math.random().toString, 
      value: enteredGoal}]);
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

      <FlatList 
      keyExtractor={(item, index) => item.key}
      data={courseGoals} 
      renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>)}/>
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
    borderWidth: 1,
    marginBottom: 10
  },
  listItem : {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5
  }

});
