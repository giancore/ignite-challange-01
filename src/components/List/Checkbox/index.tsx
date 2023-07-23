import { useState } from 'react';
import { Pressable } from 'react-native';

import CheckSvg from '@assets/check.svg';

import { styles } from './style';

type Props = {
  checked: boolean;
  onValueChange: () => void;
};

export function Checkbox({ checked, onValueChange }: Props) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onValueChange}>
      {checked && <CheckSvg />}
    </Pressable>
  );
}
