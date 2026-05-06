import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ onStart }) {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" hidden />

      <Pressable style={styles.container} onPress={onStart}>
        <ImageBackground
          source={require('../../assets/home-screen.png')}
          style={styles.background}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
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
});