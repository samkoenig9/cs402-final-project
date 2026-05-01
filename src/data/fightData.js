export const fightConfigs = {
  'fight-1': {
    id: 'fight-1',
    label: 'Fight 1',
    detail: 'Balanced opener',
    opponent: {
      name: 'Ham',
      initialHealth: 100,
      image: require('../../assets/enemies/enemy1/ham.jpg'),
    },
    player: {
      initialHealth: 100,
    },
  },
  'fight-2': {
    id: 'fight-2',
    label: 'Boxer',
    detail: 'Quick punches and timed defense',
    opponent: {
      name: 'Boxer',
      initialHealth: 100,
      image: require('../../assets/enemies/enemy2/enemy2_idle.jpg'),
      idleImage: require('../../assets/enemies/enemy2/enemy2_idle.jpg'),
      windupImage: require('../../assets/enemies/enemy2/enemy2_windup.jpg'),
      attackImage: require('../../assets/enemies/enemy2/enemy2_attack.jpg'),
    },
    player: {
      initialHealth: 100,
    },
  },
  'fight-3': {
    id: 'fight-3',
    label: 'Fight 3',
    detail: 'Guard pressure test',
    opponent: {
      name: 'Opponent 3',
      initialHealth: 100,
      // image: require('../assets/opponent3.png'),
    },
    player: {
      initialHealth: 100,
    },
  },
  'fight-4': {
    id: 'fight-4',
    label: 'Fight 4',
    detail: 'Mixed timing mix-up',
    opponent: {
      name: 'Opponent 4',
      initialHealth: 100,
      // image: require('../assets/opponent4.png'),
    },
    player: {
      initialHealth: 100,
    },
  },
  'fight-5': {
    id: 'fight-5',
    label: 'Fight 5',
    detail: 'Late round challenge',
    opponent: {
      name: 'Opponent 5',
      initialHealth: 100,
      // image: require('../assets/opponent5.png'),
    },
    player: {
      initialHealth: 100,
    },
  },
};
