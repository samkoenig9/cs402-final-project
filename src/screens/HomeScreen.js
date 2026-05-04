import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ onStart }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.logoCard}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.subtitle}>
          Pick your opponent, survive the attack cycle, and win the fight.
        </Text>

        <Pressable
          onPress={onStart}
          style={({ pressed }) => [
            styles.startButton,
            pressed && styles.startButtonPressed,
          ]}
        >
          <Text style={styles.startButtonText}>FIGHT SELECT</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1016',
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCard: {
    width: '100%',
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    color: '#aab4c3',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 34,
    maxWidth: 340,
  },
  startButton: {
    width: '100%',
    backgroundColor: '#f2c94c',
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#c79b16',
    shadowColor: '#0b1830',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 9 },
    shadowRadius: 14,
    elevation: 6,
    transform: [{ skewX: '-8deg' }],
  },
  startButtonPressed: {
    opacity: 0.9,
    transform: [{ skewX: '-8deg' }, { scale: 0.985 }],
  },
  startButtonText: {
    color: '#1a1a1a',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0.8,
    fontStyle: 'italic',
    transform: [{ skewX: '8deg' }],
  },
});