import { Text, View } from 'react-native';

import ClipboardSvg from '@assets/clipboard.svg';

import { styles } from './style';

export function EmptyState() {
  return (
    <View style={styles.container}>
      <ClipboardSvg />

      <View style={styles.content}>
        <Text style={styles.bold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.regular}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  );
}
