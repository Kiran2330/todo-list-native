import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar  } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState();
  const [courseGoals, setCourseGoals] = useState([]);
  
  function startAddGoalHandler() {
    setModalIsVisible(true);
  } 

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  } 

  return (
    <>
    <StatusBar style='inverted' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#462066" onPress={startAddGoalHandler}/>
      <GoalInput 
        onAddGoal={addGoalHandler} 
        visible={modalIsVisible} 
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={(itemData) => { 
            return(
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} 
              />
            ) 
          }} 
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false} />
      </View>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#A0A9BB'
  },
  goalsContainer: {
    flex: 5
  },
});
