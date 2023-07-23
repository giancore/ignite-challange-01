import { useState } from 'react';
import { FlatList, Image, Keyboard, ListRenderItem, View } from 'react-native';

import logoImg from '@assets/logo.png';
import { NewTask } from '@components/AddTask/NewTask';
import { Counter } from '@components/Counter';
import { EmptyState } from '@components/List/EmptyState';
import { TaskItem } from '@components/List/TaskItem';

import { styles } from './style';

export type Task = {
  id: number;
  description: string;
  isChecked: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasks = tasks.filter((t) => t.isChecked).length;

  function handleAddTask(newTaskDescription: string) {
    const newTask: Task = {
      id: Date.now(),
      description: newTaskDescription,
      isChecked: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);

    Keyboard.dismiss();
  }

  function handleRemoveTask(task: Task) {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);

    setTasks(filteredTasks);
  }

  function handleCheckTask(task: Task) {
    const immutableTasks = tasks.map((t) => ({ ...t }));
    const taskToBeUpdated = immutableTasks.find((t) => t.id === task.id);

    if (taskToBeUpdated) {
      taskToBeUpdated.isChecked = !taskToBeUpdated.isChecked;
      setTasks(immutableTasks);
    }
  }

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskItem
      key={item.id}
      task={item}
      onRemoveTask={() => handleRemoveTask(item)}
      onCheckTask={() => handleCheckTask(item)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} style={styles.image} />
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <NewTask onAddTask={handleAddTask} />
        </View>

        <Counter completed={completedTasks} created={tasks.length} />
      </View>

      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24 }}
        data={tasks}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyState />}
      />
    </View>
  );
}
