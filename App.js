import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './component/GoalItem';
import GoalInput from './component/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoal] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal, 
      {id: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => 
      <GoalItem
      id={itemData.item.id} 
      onDelete={removeGoalHandler} 
      title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
