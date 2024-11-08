// src/TodoItem.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define the props for the TodoItem component
type TodoItemProps = {
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
  toggleTaskCompletion: (id: string) => void;
  deleteTask: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ item, toggleTaskCompletion, deleteTask }) => {
  return (
    <View style={styles.todoItem}>
      {/* Toggle completion when the task text is pressed */}
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <Text style={[styles.todoText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      {/* Button to delete task */}
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteText: {
    color: 'red',
  },
});

export default TodoItem;
