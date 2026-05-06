import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ onStart }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <Pressable style={styles.container} onPress={onStart}>
        <ImageBackground
          source={require('../../assets/home-screen.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            {/* optional invisible spacer so layout behaves nicely */}
          </View>
        </ImageBackground>
      </Pressable>
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
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
  },
});
