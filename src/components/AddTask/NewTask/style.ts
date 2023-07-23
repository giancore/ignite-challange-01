import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    alignItems: 'center',

    padding: 16,
    marginRight: 4,

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',

    backgroundColor: '#262626',
    color: '#F2F2F2',

    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 22,
  },
  focused: {
    borderColor: '#5E60CE',
    borderWidth: 1,
  },
});
