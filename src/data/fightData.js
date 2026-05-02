export const fightConfigs = {
  'fight-1': {
    id: 'fight-1',
    label: 'Fight 1',
    detail: 'Balanced opener',
    opponent: {
      name: 'Ham',
      initialHealth: 100,
      image: require('../../assets/enemies/enemy1/ham.jpg'),
      vertices: [
          [0, 100, 0, 0, 0, 0, 0], // idle
          [0, 0, 100, 0, 0, 0, 0], // wind
          [100, 0, 0, 0, 0, 0, 0], // attack
          [0, 0, 0, 0, 100, 0, 0], // duckwind
          [100, 0, 0, 0, 0, 0, 0], // duckattack
          [0, 0, 0, 0, 0, 0, 100], // guardwind
          [100, 0, 0, 0, 0, 0, 0]  // guardattack
        ],
        states: [
          { // idle
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 100,
          isAttack: false,
          attackType: "both"
          },
          { // wind
          image: '../../assets/enemies/enemy1/ham_wind.jpg',
          duration: 50,
          isAttack: false,
          attackType: "both"
          },
          { // attack
          image: '../../assets/enemies/enemy1/ham_attack.jpg',
          duration: 5,
          isAttack: true,
          attackType: "both"
          },
          { // duckwind
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 50,
          isAttack: false,
          attackType: "duck"
          },
          { // duckattack
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 5,
          isAttack: true,
          attackType: "duck"
          },
          { // guardwind
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 50,
          isAttack: false,
          attackType: "guard"
          },
          { // guardattack
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 5,
          isAttack: true,
          attackType: "guard"
          },
        ]
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
