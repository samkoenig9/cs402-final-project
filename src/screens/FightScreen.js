import { useState, useEffect, useRef } from 'react';
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { fightConfigs } from '../data/fightData';
import HealthBar from '../components/HealthBar';
import DefenseButton from '../components/DefenseButton';

export default function FightScreen({ fightId, onExit }) {
  const fightConfig = fightConfigs[fightId] || fightConfigs['fight-1'];
  const enemySpriteSource = fightConfig.opponent.image || fightConfigs['fight-1'].opponent.image;
  // variables for player health
  const [playerHealth, setPlayerHealth] = useState(fightConfig.player.initialHealth);
  const [enemyHealth, setEnemyHealth] = useState(fightConfig.opponent.initialHealth);
  // variables for player percentage
  const [playerPercent, setPlayerPercent] = useState(100);
  const [enemyPercent, setEnemyPercent] = useState(100);
  const [fightEnded, setFightEnded] = useState(false);
  const [attackCooldownUntil, setAttackCooldownUntil] = useState(0);
  const [attackCooldownRemaining, setAttackCooldownRemaining] = useState(0);
  const [guardHeld, setGuardHeld] = useState(false);
  const [duckHeld, setDuckHeld] = useState(false);
  const [guardMeter, setGuardMeter] = useState(100);
  const [duckMeter, setDuckMeter] = useState(100);
  const [defenseFeedback, setDefenseFeedback] = useState({ id: 0, text: '' });
  const [warningInfo, setWarningInfo] = useState({ id: 0, text: '', progress: 0 });
  const guardHeldRef = useRef(guardHeld);
  const duckHeldRef = useRef(duckHeld);
  const guardMeterRef = useRef(guardMeter);
  const duckMeterRef = useRef(duckMeter);

  // PHASE 1: Graph-based state tracking
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [displayState, setDisplayState] = useState("idle");
  const currentStateIndexRef = useRef(0);
  const stateElapsedTimeRef = useRef(0);
  const stateStartTimeRef = useRef(Date.now());

  const states = fightConfig.opponent.states || getDefaultStates();
  const vertices = fightConfig.opponent.vertices || getDefaultVertices();
  const playerAttackConfig = fightConfig.player.attack || getDefaultPlayerAttackConfig();
  const cooldownMs = typeof playerAttackConfig.cooldownMs === 'number'
    ? playerAttackConfig.cooldownMs
    : 0;

  function getDefaultStates() {
    return [
      { duration: 2000, isAttack: false, attackType: "both" },
      { duration: 1200, isAttack: false, attackType: "both" },
      { duration: 300, isAttack: true, attackType: "both" },
    ];
  }

  function getDefaultVertices() {
    return [
      [0, 100, 0],
      [0, 0, 100],
      [100, 0, 0],
    ];
  }

  function getDefaultPlayerAttackConfig() {
    return {
      cooldownMs: 100,
      zones: {
        top: { damage: 1 },
        bottom: { damage: 1 },
      },
    };
  }

  const getZoneDamage = (zone) => {
    const zoneConfig = playerAttackConfig.zones?.[zone];
    if (!zoneConfig || typeof zoneConfig.damage !== 'number') {
      return 1;
    }
    return zoneConfig.damage;
  };

  function getDisplayState(stateIndex) {
    const state = states[stateIndex];
    if (!state) return "idle";
    if (state.isAttack) return "attack";
    if (stateIndex !== 0) return "windup";
    return "idle";
  }

  function nextFightState(index) {
    const transitions = vertices[index];
    if (!transitions) return 0;

    const rand = Math.floor(Math.random() * 100) + 1;
    let nextState = 0;
    let nextStatePow = 101;

    for (let i = 0; i < transitions.length; i++) {
      const statePow = transitions[i];
      if (statePow >= rand && statePow < nextStatePow) {
        nextState = i;
        nextStatePow = statePow;
      }
    }

    return nextState;
  }

  const getEnemySpriteSource = () => {
    /*if (displayState === "windup") {
      return fightConfig.opponent.windupImage || enemySpriteSource;
    }

    if (displayState === "attack") {
      return fightConfig.opponent.attackImage || enemySpriteSource;
    }

    return fightConfig.opponent.idleImage || enemySpriteSource;*/
    return fightConfig.opponent.states[currentStateIndex].image || enemySpriteSource;
  };

  useEffect(() => {
    guardHeldRef.current = guardHeld;
  }, [guardHeld]);

  useEffect(() => {
    duckHeldRef.current = duckHeld;
  }, [duckHeld]);

  useEffect(() => {
    guardMeterRef.current = guardMeter;
  }, [guardMeter]);

  useEffect(() => {
    duckMeterRef.current = duckMeter;
  }, [duckMeter]);

  // PLACEHOLDER: each tap on an attack zone reduces enemy health by 1 until it reaches 0
  const handlePlayerAttack = (zone) => {
    if (fightEnded) return;

    const now = Date.now();
    if (now < attackCooldownUntil) return;
    
    const damage = getZoneDamage(zone);
    const newEnemyHealth = Math.max(0, enemyHealth - damage);
    setEnemyHealth(newEnemyHealth);

    if (cooldownMs > 0) {
      setAttackCooldownUntil(now + cooldownMs);
      setAttackCooldownRemaining(cooldownMs);
    }
    
    // Check if fight ends
    if (newEnemyHealth <= 0) {
      setFightEnded(true);
    }
    
    console.log(`Player attacked ${zone}! Enemy health: ${newEnemyHealth}`);
    // set the percentage value for enemy health
    setEnemyPercent((enemyHealth/fightConfig.opponent.initialHealth)*100);
  };

  useEffect(() => {
    if (attackCooldownUntil <= Date.now()) {
      setAttackCooldownRemaining(0);
      return;
    }

    const interval = setInterval(() => {
      const remaining = Math.max(0, attackCooldownUntil - Date.now());
      setAttackCooldownRemaining(remaining);
      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [attackCooldownUntil]);

  useEffect(() => {
    if (fightEnded) {
      setAttackCooldownUntil(0);
      setAttackCooldownRemaining(0);
      setGuardHeld(false);
      setDuckHeld(false);
    }
  }, [fightEnded]);

  useEffect(() => {
    if (fightEnded) return;

    const guardMeterInterval = setInterval(() => {
      setGuardMeter((prev) => Math.min(100, prev + 10)); // Guard refill rate (prev + _)
    }, 100);

    return () => clearInterval(guardMeterInterval);
  }, [fightEnded]);

  useEffect(() => {
    if (fightEnded) return;

    const duckMeterInterval = setInterval(() => {
      setDuckMeter((prev) => {
        if (duckHeld) {
          const next = Math.max(0, prev - 4); // Duck depletion rate (prev - _)
          if (next <= 0) {
            setDuckHeld(false);
          }
          return next;
        }
        return Math.min(100, prev + 1); // Duck refill rate (prev + _)
      });
    }, 100);

    return () => clearInterval(duckMeterInterval);
  }, [fightEnded, duckHeld]);

  useEffect(() => {
    if (!defenseFeedback.text) return;

    const timeout = setTimeout(() => {
      setDefenseFeedback((prev) => ({ ...prev, text: '' }));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [defenseFeedback.id, defenseFeedback.text]);

  const showDefenseFeedback = (text) => {
    setDefenseFeedback({ id: Date.now(), text });
  };

  const updateWarning = (text, progress) => {
    setWarningInfo({ id: Date.now(), text, progress });
  };

  useEffect(() => {
    if (fightEnded) return;

    const interval = setInterval(() => {
      const currentIndex = currentStateIndexRef.current;
      const currentState = states[currentIndex];

      if (!currentState || currentState.isAttack || currentIndex === 0) {
        if (warningInfo.text) {
          updateWarning('', 0);
        }
        return;
      }

      const elapsed = Date.now() - stateStartTimeRef.current;
      const progress = Math.min(1, elapsed / currentState.duration);
      const attackTypeUpper = currentState.attackType.toUpperCase();
      updateWarning(`INCOMING: ${attackTypeUpper}`, progress);
    }, 50);

    return () => clearInterval(interval);
  }, [fightEnded, states, warningInfo.text]);

  // PHASE 1: Main game loop using graph-based state machine
  useEffect(() => {
    if (fightEnded) return;

    const interval = setInterval(() => {      
      const currentIndex = currentStateIndexRef.current;
      const currentState = states[currentIndex];

      if (!currentState) return;

      stateElapsedTimeRef.current += 100;

      if (stateElapsedTimeRef.current >= currentState.duration) {
        stateElapsedTimeRef.current = 0;

        const nextIndex = nextFightState(currentIndex);
        currentStateIndexRef.current = nextIndex;
        setCurrentStateIndex(nextIndex);
        stateStartTimeRef.current = Date.now();

        const nextState = states[nextIndex];
        setDisplayState(getDisplayState(nextIndex));

        if (nextState.isAttack || nextIndex === 0) {
          updateWarning('', 0);
        }

        if (nextState.isAttack) {
          const attackType = nextState.attackType;
          const attackDamage = typeof nextState.damage === 'number' ? nextState.damage : 1;
          let wasBlocked = false;

          if (attackType === "guard" && guardHeldRef.current && guardMeterRef.current >= 100) {
            wasBlocked = true;
            showDefenseFeedback("BLOCKED!");
            setGuardMeter(0);
            setGuardHeld(false);
          } else if (attackType === "duck" && duckHeldRef.current && duckMeterRef.current > 0) {
            wasBlocked = true;
            showDefenseFeedback("DODGED!");
          } else if (
            attackType === "both" &&
            (
              (guardHeldRef.current && guardMeterRef.current >= 100) ||
              (duckHeldRef.current && duckMeterRef.current > 0)
            )
          ) {
            wasBlocked = true;
            showDefenseFeedback("DEFENDED!");

            if (guardHeldRef.current && guardMeterRef.current >= 100) {
              setGuardMeter(0);
              setGuardHeld(false);
            }
          }

          if (!wasBlocked) {
            setPlayerHealth((prev) => {
              const newHealth = Math.max(0, prev - attackDamage);
              // set player health percentage
              setPlayerPercent((newHealth/fightConfig.player.initialHealth)*100);
              if (newHealth <= 0) setFightEnded(true);
              return newHealth;
            });
          }
        }
      }

    }, 100);
    return () => clearInterval(interval);
  }, [fightEnded]);

  const handleRematch = () => {
    setPlayerHealth(fightConfig.player.initialHealth);
    setEnemyHealth(fightConfig.opponent.initialHealth);
    setFightEnded(false);
    setGuardHeld(false);
    setDuckHeld(false);
    setGuardMeter(100);
    setDuckMeter(100);
    setDefenseFeedback({ id: 0, text: '' });
    setCurrentStateIndex(0);
    setDisplayState("idle");
    currentStateIndexRef.current = 0;
    stateElapsedTimeRef.current = 0;
  };

  const isVictory = enemyHealth <= 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      {fightEnded ? (
        /* Fight End Screen */
        <View style={styles.container}>
          <View style={styles.fightEndContainer}>
            <Text style={[styles.fightEndTitle, isVictory ? styles.victoryText : styles.defeatText]}>
              {isVictory ? 'VICTORY!' : 'DEFEAT'}
            </Text>
            <Text style={styles.fightEndSubtitle}>
              {isVictory
                ? `Enemy defeated after ${fightConfig.opponent.initialHealth - enemyHealth} attacks`
                : `You were defeated after ${fightConfig.player.initialHealth - playerHealth} damage taken`
              }
            </Text>
            {isVictory ? (
              <Pressable
                onPress={() => onExit()}
                style={({ pressed }) => [styles.returnButton, pressed && styles.returnButtonPressed]}
              >
                <Text style={styles.returnButtonText}>RETURN TO MAIN MENU</Text>
              </Pressable>
            ) : (
              <View style={styles.endButtonsRow}>
                <Pressable
                  onPress={handleRematch}
                  style={({ pressed }) => [styles.rematchButton, pressed && styles.rematchButtonPressed]}
                >
                  <Text style={styles.rematchButtonText}>REMATCH</Text>
                </Pressable>
                <Pressable
                  onPress={() => onExit()}
                  style={({ pressed }) => [styles.returnButton, pressed && styles.returnButtonPressed]}
                >
                  <Text style={styles.returnButtonText}>RETURN TO MAIN MENU</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      ) : (
        /* Fight Screen */
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
            <HealthBar label="Enemy HP" percentage={enemyPercent} isPlayer={false} />
          </View>

          {/* Sprite area with overlaid attack zones */}
          <View style={styles.spriteContainer}>
            {enemySpriteSource ? (
              <Image
                source={getEnemySpriteSource()}
                style={[styles.enemySprite, attackCooldownRemaining > 0 && styles.enemySpriteCooldown]}
                resizeMode="contain"
              />
            ) : (
              <View style={[styles.enemySprite, attackCooldownRemaining > 0 && styles.enemySpriteCooldown]} />
            )}
            <Pressable
              onPress={() => handlePlayerAttack('top')}
              disabled={attackCooldownRemaining > 0}
              style={({ pressed }) => [
                styles.overlayZone,
                styles.topZone,
                pressed && attackCooldownRemaining <= 0 && styles.zonePressed,
              ]}
            />
            <Pressable
              onPress={() => handlePlayerAttack('bottom')}
              disabled={attackCooldownRemaining > 0}
              style={({ pressed }) => [
                styles.overlayZone,
                styles.bottomZone,
                pressed && attackCooldownRemaining <= 0 && styles.zonePressed,
              ]}
            />
            {!!warningInfo.text && !defenseFeedback.text && (
              <View style={styles.warningOverlay}>
                <View style={styles.warningMeterTrack}>
                  <View style={[styles.warningMeterFill, { width: `${Math.round(warningInfo.progress * 100)}%` }]} />
                </View>
                <Text key={warningInfo.id} style={styles.feedbackText}>{warningInfo.text}</Text>
              </View>
            )}
            {!!defenseFeedback.text && (
              <View style={styles.feedbackOverlay}>
                <Text key={defenseFeedback.id} style={styles.feedbackText}>{defenseFeedback.text}</Text>
              </View>
            )}
          </View>

          {/* Player health bar */}
          <View style={styles.healthBarContainer}>
            <HealthBar label="Player HP" percentage={playerPercent} isPlayer={true} />
          </View>

          {/* Defense controls */}
          <View style={styles.controlsArea}>
            <Text style={styles.controlsLabel}>HOLD TO DEFEND</Text>
            <View style={styles.buttonRow}>
              <DefenseButton
                label="Guard"
                disabled={guardMeter < 100}
                onPressIn={() => {
                  if (guardMeter >= 100 && !duckHeld) {
                    setGuardHeld(true);
                  }
                }}

                onPressOut={() => setGuardHeld(false)}
                meter={guardMeter}
              />
              <DefenseButton
                label="Duck"
                disabled={duckMeter <= 0}
                onPressIn={() => {
                  if (duckMeter > 0 && !guardHeld) {
                    setDuckHeld(true);
                  }
                }}
                onPressOut={() => setDuckHeld(false)}
                meter={duckMeter}
              />
            </View>
          </View>
        </View>
      )}
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
  enemySpriteCooldown: {
    borderColor: '#e53935',
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
  feedbackOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 16, 22, 0.55)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#f2c94c',
  },
  warningOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 16, 22, 0.55)',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#f2c94c',
    minWidth: 220,
    overflow: 'hidden',
  },
  feedbackText: {
    color: '#f7f8fb',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  warningMeterTrack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(13, 16, 22, 0.0)',
  },
  warningMeterFill: {
    height: '100%',
    backgroundColor: 'rgba(242, 201, 76, 0.35)',
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
  fightEndContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  fightEndTitle: {
    fontSize: 48,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 16,
    textAlign: 'center',
  },
  fightEndSubtitle: {
    color: '#f7f8fb',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 32,
  },
  victoryText: {
    color: '#f2c94c',
  },
  defeatText: {
    color: '#e53935',
  },
  endButtonsRow: {
    width: '100%',
    gap: 12,
  },
  rematchButton: {
    backgroundColor: '#e53935',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#b71c1c',
    transform: [{ skewX: '-6deg' }],
  },
  rematchButtonPressed: {
    opacity: 0.8,
    transform: [{ skewX: '-6deg' }, { scale: 0.96 }],
  },
  rematchButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  returnButton: {
    backgroundColor: '#f2c94c',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#d4a017',
    transform: [{ skewX: '-6deg' }],
  },
  returnButtonPressed: {
    opacity: 0.8,
    transform: [{ skewX: '-6deg' }, { scale: 0.96 }],
  },
  returnButtonText: {
    color: '#0d1016',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
