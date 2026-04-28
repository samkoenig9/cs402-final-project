import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SelectableListItem({ label, detail, selected, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, selected && styles.cardSelected, pressed && styles.cardPressed]}
    >
      <View style={styles.row}>
        <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
          <View style={[styles.radioInner, selected && styles.radioInnerSelected]} />
        </View>
        <View style={styles.textBlock}>
          <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
          <Text style={[styles.detail, selected && styles.detailSelected]}>{detail}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#2b3341',
    backgroundColor: '#161b24',
    marginBottom: 12,
    marginHorizontal: 8,
    width: '94%',
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
    overflow: 'hidden',
    transform: [{ skewX: '-8deg' }],
  },
  cardSelected: {
    borderColor: '#e53935',
    backgroundColor: '#202532',
  },
  cardPressed: {
    transform: [{ skewX: '-8deg' }, { scale: 0.99 }],
    opacity: 0.95,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ skewX: '8deg' }],
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#6d7788',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#0d1016',
    transform: [{ skewX: '-8deg' }],
  },
  radioOuterSelected: {
    borderColor: '#e53935',
  },
  radioInner: {
    width: 9,
    height: 9,
    backgroundColor: 'transparent',
  },
  radioInnerSelected: {
    backgroundColor: '#e53935',
  },
  label: {
    fontSize: 18,
    fontWeight: '900',
    color: '#f7f8fb',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  labelSelected: {
    color: '#e53935',
  },
  textBlock: {
    flex: 1,
    paddingRight: 4,
  },
  detail: {
    marginTop: 3,
    fontSize: 13,
    color: '#aab4c3',
  },
  detailSelected: {
    color: '#ff8a80',
  },
});