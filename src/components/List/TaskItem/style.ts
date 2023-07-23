import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#262626',
    borderRadius: 8,
    minHeight: 64,
    marginTop: 8,
  },
  checkbox: {
    color: '#5E60CE',
  },
  description: {
    flex: 1,
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginHorizontal: 8,
  },
  descriptionChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
});
