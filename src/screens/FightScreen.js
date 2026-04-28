import { useState } from 'react';
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { fightConfigs } from '../data/fightData';
import HealthBar from '../components/HealthBar';
import DefenseButton from '../components/DefenseButton';

export default function FightScreen({ fightId, onExit }) {
  const fightConfig = fightConfigs[fightId] || fightConfigs['fight-1'];
  const [playerHealth, setPlayerHealth] = useState(fightConfig.player.initialHealth);
  const [enemyHealth, setEnemyHealth] = useState(fightConfig.opponent.initialHealth);

  const handlePlayerAttack = (zone) => {
    // Placeholder: log attack; no game logic yet
    console.log(`Player attacked ${zone}`);
  };

  const handleDefense = (defenseType) => {
    // Placeholder: log defense; no game logic yet
    console.log(`Player activated ${defenseType}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* Header with exit button */}
        <View style={styles.header}>
          <Pressable onPress={onExit} style={({ pressed }) => [styles.exitButton, pressed && styles.exitPressed]}>
            <Text style={styles.exitText}>✕</Text>
          </Pressable>
          <Text style={styles.opponentName}>{fightConfig.opponent.name}</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Enemy health bar */}
        <View style={styles.healthBarContainer}>
          <HealthBar label="Enemy HP" percentage={enemyHealth} isPlayer={false} />
        </View>

        {/* Sprite area with overlaid attack zones */}
        <View style={styles.spriteContainer}>
          {fightConfig.opponent.image ? (
            <Image
              source={fightConfig.opponent.image}
              style={styles.enemySprite}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.enemySprite} />
          )}
          <Pressable
            onPress={() => handlePlayerAttack('top')}
            style={({ pressed }) => [styles.overlayZone, styles.topZone, pressed && styles.zonePressed]}
          />
          <Pressable
            onPress={() => handlePlayerAttack('bottom')}
            style={({ pressed }) => [styles.overlayZone, styles.bottomZone, pressed && styles.zonePressed]}
          />
        </View>

        {/* Player health bar */}
        <View style={styles.healthBarContainer}>
          <HealthBar label="Player HP" percentage={playerHealth} isPlayer={true} />
        </View>

        {/* Defense controls */}
        <View style={styles.controlsArea}>
          <Text style={styles.controlsLabel}>HOLD TO DEFEND</Text>
          <View style={styles.buttonRow}>
            <DefenseButton label="Guard" onPress={() => handleDefense('guard')} />
            <DefenseButton label="Duck" onPress={() => handleDefense('duck')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const SPRITE_SIZE = Dimensions.get('window').width - 24;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1016',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
    height: 40,
  },
  exitButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a2030',
    borderWidth: 1,
    borderColor: '#3a4556',
  },
  exitPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  exitText: {
    color: '#f2c94c',
    fontSize: 18,
    fontWeight: '900',
  },
  opponentName: {
    color: '#f7f8fb',
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  healthBarContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    transform: [{ skewX: '-8deg' }],
  },
  spriteContainer: {
    flex: 1,
    width: SPRITE_SIZE,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: 8,
  },
  enemySprite: {
    width: SPRITE_SIZE,
    height: SPRITE_SIZE,
    backgroundColor: '#1a2030',
    borderWidth: 2,
    borderColor: '#3a4556',
  },
  overlayZone: {
    position: 'absolute',
    width: SPRITE_SIZE,
  },
  topZone: {
    top: SPRITE_SIZE * 0.075,
    height: SPRITE_SIZE * 0.5,
  },
  bottomZone: {
    bottom: SPRITE_SIZE * 0.075,
    height: SPRITE_SIZE * 0.5,
  },
  zonePressed: {
    backgroundColor: 'rgba(245, 67, 54, 0.3)',
  },
  controlsArea: {
    marginTop: 8,
    marginBottom: 4,
  },
  controlsLabel: {
    color: '#f2c94c',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.0,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
