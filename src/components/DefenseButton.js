import { Pressable, StyleSheet, Text } from 'react-native';

export default function DefenseButton({ label, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#e53935',
    borderWidth: 2,
    borderColor: '#ff8a80',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    transform: [{ skewX: '-6deg' }],
  },
  buttonDisabled: {
    backgroundColor: '#6b4f47',
    borderColor: '#9a7a76',
  },
  buttonPressed: {
    transform: [{ skewX: '-6deg' }, { scale: 0.96 }],
    opacity: 0.6,
  },
  label: {
    color: '#f7f8fb',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    transform: [{ skewX: '6deg' }],
  },
  labelDisabled: {
    color: '#b8a5a0',
  },
});
