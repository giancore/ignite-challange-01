import { useState } from 'react';
import { TextInput, View } from 'react-native';

import { CreateButton } from '@components/AddTask/CreateButton';

import { styles } from './style';

type Props = {
  onAddTask: (taskDescription: string) => void;
};

export function NewTask({ onAddTask }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleAddTask() {
    onAddTask(newTaskDescription);
    setNewTaskDescription('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={newTaskDescription}
        style={isFocused ? { ...styles.input, ...styles.focused } : styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={setNewTaskDescription}
        placeholderTextColor="#808080"
        placeholder="Adicione uma nova tarefa"
      />
      <CreateButton onPress={handleAddTask} />
    </View>
  );
}
