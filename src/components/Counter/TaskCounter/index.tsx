import { Text, View } from 'react-native';

import { styles } from './style';

type Props = {
  text: string;
  textColor: string;
  counter: number;
};

export function TaskCounter({ text, textColor, counter }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.description, color: textColor }}>{text}</Text>

      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{counter}</Text>
      </View>
    </View>
  );
}
