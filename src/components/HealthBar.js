import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default function HealthBar({ label, percentage, isPlayer }) {
  const barColor = isPlayer ? '#f2c94c' : '#e53935';
  const bgColor = '#1a2030';
  const shakeX = useRef(new Animated.Value(0)).current;
  const prevPercentage = useRef(percentage);

  useEffect(() => {
    if (percentage < prevPercentage.current) {
      Animated.sequence([
        Animated.timing(shakeX, { toValue: -2, duration: 35, useNativeDriver: true }),
        Animated.timing(shakeX, { toValue: 2, duration: 35, useNativeDriver: true }),
        Animated.timing(shakeX, { toValue: -2, duration: 35, useNativeDriver: true }),
        Animated.timing(shakeX, { toValue: 2, duration: 35, useNativeDriver: true }),
        Animated.timing(shakeX, { toValue: 0, duration: 35, useNativeDriver: true }),
      ]).start();
    }

    prevPercentage.current = percentage;
  }, [percentage, shakeX]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: shakeX }] }]}>
      <Text style={[styles.label, { color: barColor }]}>{label}</Text>
      <View style={[styles.barBg, { backgroundColor: bgColor }]}>
        <View
          style={[
            styles.barFill,
            { width: `${Math.max(0, Math.min(100, percentage))}%`, backgroundColor: barColor },
          ]}
        />
      </View>
      <Text style={[styles.percentage, { color: barColor }]}>{Math.round(percentage)}%</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  barBg: {
    height: 20,
    borderWidth: 1,
    borderColor: '#3a4556',
    overflow: 'hidden',
    marginBottom: 4,
  },
  barFill: {
    height: '100%',
  },
  percentage: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
  },
});
