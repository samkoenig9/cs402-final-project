import { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SelectionScreen from './src/screens/SelectionScreen';
import FightScreen from './src/screens/FightScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
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

  if (currentScreen === 'selection') {
    return (
      <SelectionScreen
        onFightSelected={(fightId) => {
          setSelectedFightId(fightId);
          setCurrentScreen('fight');
        }}
      />
    );
  }

  return (
    <HomeScreen
      onStart={() => {
        setCurrentScreen('selection');
      }}
    />
  );
}