import { Text, View } from 'react-native';

import { Checkbox } from '@components/List/Checkbox';
import { DeleteButton } from '@components/List/DeleteButton';
import { Task } from '@screens/Home';

import { styles } from './style';

type Props = {
  task: Task;
  onRemoveTask: (task: Task) => void;
  onCheckTask: (task: Task) => void;
};

export function TaskItem({ task, onCheckTask, onRemoveTask }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox checked={task.isChecked} onValueChange={() => onCheckTask(task)} />
      <Text
        style={
          task.isChecked
            ? {
                ...styles.description,
                ...styles.descriptionChecked,
              }
            : {
                ...styles.description,
              }
        }>
        {task.description}
      </Text>
      <DeleteButton onPress={() => onRemoveTask(task)} />
    </View>
  );
}
