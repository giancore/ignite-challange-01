import { TouchableOpacity } from 'react-native';

import TrashSvg from '@assets/trash.svg';

import { styles } from './style';

type Props = {
  onPress: () => void;
};

export function DeleteButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.6}>
      <TrashSvg />
    </TouchableOpacity>
  );
}
