import { useState } from 'react';
import SelectionScreen from './src/screens/SelectionScreen';
import FightScreen from './src/screens/FightScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('selection');
  const [selectedFightId, setSelectedFightId] = useState(null);

  if (currentScreen === 'fight' && selectedFightId) {
    return (
      <FightScreen
        fightId={selectedFightId}
        onExit={() => {
          setCurrentScreen('selection');
          setSelectedFightId(null);
        }}
      />
    );
  }

  return (
    <SelectionScreen
      onFightSelected={(fightId) => {
        setSelectedFightId(fightId);
        setCurrentScreen('fight');
      }}
    />
  );
}
