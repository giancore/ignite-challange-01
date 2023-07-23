import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 48,
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
  content: {
    alignItems: 'center',
    marginVertical: 16,
  },
  bold: {
    color: '#808080',
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
  },
  regular: {
    color: '#808080',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
});
