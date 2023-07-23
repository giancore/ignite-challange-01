import { View } from 'react-native';

import { TaskCounter } from '@components/Counter/TaskCounter';

import { styles } from './style';

type Props = {
  completed: number;
  created: number;
};

export function Counter({ completed, created }: Props) {
  return (
    <View style={styles.container}>
      <TaskCounter text="Criadas" counter={created} textColor="#4EA8DE" />
      <TaskCounter text="Concluídas" counter={completed} textColor="#8284FA" />
    </View>
  );
}
