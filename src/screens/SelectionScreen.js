import { useMemo, useState } from 'react';
import { Alert, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { initialEntries } from '../data/initialEntries';
import SelectableListItem from '../components/SelectableListItem';

export default function SelectionScreen({ onFightSelected }) {
  const [selectedId, setSelectedId] = useState(null);

  const selectedEntry = useMemo(
    () => initialEntries.find((entry) => entry.id === selectedId) ?? null,
    [selectedId]
  );

  const handleContinue = () => {
    if (!selectedEntry) {
      Alert.alert('Select a fight', 'Pick a fight before continuing.');
      return;
    }

    if (onFightSelected) {
      onFightSelected(selectedEntry.id);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Fight Select</Text>
          <Text style={styles.subtitle}>Pick an opponent and jump into the ring.</Text>
        </View>

        <FlatList
          data={initialEntries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SelectableListItem
              label={item.label}
              detail={item.detail}
              selected={item.id === selectedId}
              onPress={() => setSelectedId(item.id)}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.footer}>
          <Pressable
            disabled={!selectedEntry}
            onPress={handleContinue}
            style={({ pressed }) => [
              styles.continueButton,
              !selectedEntry && styles.continueButtonDisabled,
              pressed && selectedEntry && styles.continueButtonPressed,
            ]}
          >
            <Text style={styles.continueButtonText}>FIGHT!!!</Text>
          </Pressable>
          <Text style={styles.selectionText}>
            {selectedEntry ? selectedEntry.detail : 'Choose a fight to unlock the button'}
          </Text>
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    paddingBottom: 14,
  },
  title: {
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '900',
    color: '#f7f8fb',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#aab4c3',
  },
  listContent: {
    paddingBottom: 16,
  },
  footer: {
    paddingTop: 8,
    paddingBottom: 18,
  },
  selectionText: {
    fontSize: 13,
    color: '#aab4c3',
    marginTop: 10,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#f2c94c',
    paddingVertical: 17,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c79b16',
    shadowColor: '#0b1830',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 9 },
    shadowRadius: 14,
    elevation: 6,
    transform: [{ skewX: '-8deg' }],
  },
  continueButtonDisabled: {
    backgroundColor: '#b8a15b',
    borderColor: '#9a823d',
  },
  continueButtonPressed: {
    transform: [{ skewX: '-8deg' }, { scale: 0.985 }],
    opacity: 0.96,
  },
  continueButtonText: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.6,
    transform: [{ skewX: '8deg' }],
    fontStyle: 'italic',
  },
});