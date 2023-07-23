import { TouchableOpacity } from 'react-native';

import PlusSvg from '@assets/plus.svg';

import { styles } from './style';

type Props = {
  onPress: () => void;
};

export function CreateButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.6}>
      <PlusSvg />
    </TouchableOpacity>
  );
}
