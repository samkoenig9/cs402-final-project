import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DefenseButton({
  label,
  onPress,
  onPressIn,
  onPressOut,
  disabled,
  meter,
}) {
  const clampedMeter = typeof meter === 'number' ? Math.max(0, Math.min(100, meter)) : null;

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          disabled && styles.buttonDisabled,
          pressed && !disabled && styles.buttonPressed,
        ]}
      >
        {clampedMeter !== null && (
          <View style={styles.meterTrack}>
            <View style={[styles.meterFill, disabled && styles.meterFillDisabled, { width: `${clampedMeter}%` }]} />
          </View>
        )}
        <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 6,
  },
  button: {
    width: '100%',
    backgroundColor: '#e53935',
    borderWidth: 2,
    borderColor: '#ff8a80',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
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
    zIndex: 1,
    transform: [{ skewX: '6deg' }],
  },
  labelDisabled: {
    color: '#b8a5a0',
  },
  meterTrack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#6b4f47',
  },
  meterFill: {
    height: '100%',
    backgroundColor: '#e53935',
  },
  meterFillDisabled: {
    backgroundColor: '#8b453b',
  },
});
