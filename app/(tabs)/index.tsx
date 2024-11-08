// App.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import TodoItem from './src/TodoItem';  // Import TodoItem component

// Define the type for a task (To-Do item)
type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function App() {
  const [task, setTask] = useState<string>('');  // State for task input
  const [tasks, setTasks] = useState<Todo[]>([]); // State for list of tasks

  // Add a new task to the list
  const addTask = () => {
    if (task.trim()) {
      const newTask: Todo = { id: Date.now().toString(), text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');  // Clear input field
    }
  };

  // Toggle completion status of a task
  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task from the list
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>

      {/* Input field to add a new task */}
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={task}
        onChangeText={setTask}  // Update state on text change
      />
      <Button title="Add Task" onPress={addTask} />

      {/* List of tasks */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
