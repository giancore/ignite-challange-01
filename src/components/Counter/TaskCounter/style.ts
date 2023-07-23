import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  description: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  counter: {
    color: '#D9D9D9',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
