export const fightConfigs = {
  'fight-1': {
    id: 'fight-1',
    label: 'Fight 1',
    detail: 'Balanced opener',
    opponent: {
      name: 'Hamster',
      initialHealth: 100,
      image: require('../../assets/enemies/enemy1/ham.jpg'),
      idleImage: require('../../assets/enemies/enemy1/ham.jpg'),
      windupImage: require('../../assets/enemies/enemy1/ham_wind.jpg'),
      attackImage: require('../../assets/enemies/enemy1/ham_attack.jpg'),
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
          duration: 2500,
          isAttack: false,
          attackType: "both"
          },
          { // wind
          image: '../../assets/enemies/enemy1/ham_wind.jpg',
          duration: 1200,
          isAttack: false,
          attackType: "both"
          },
          { // attack
          image: '../../assets/enemies/enemy1/ham_attack.jpg',
          duration: 500,
          isAttack: true,
          attackType: "both",
          damage: 2
          },
          { // duckwind
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 1200,
          isAttack: false,
          attackType: "duck"
          },
          { // duckattack
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 500,
          isAttack: true,
          attackType: "duck",
          damage: 2
          },
          { // guardwind
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 1200,
          isAttack: false,
          attackType: "guard"
          },
          { // guardattack
          image: '../../assets/enemies/enemy1/ham.jpg',
          duration: 500,
          isAttack: true,
          attackType: "guard",
          damage: 2
          },
        ]
    },
    player: {
      initialHealth: 100,
      attack: {
        cooldownMs: 1000,
        zones: {
          top: { damage: 2 },
          bottom: { damage: 10 },
        },
      },
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
      vertices: [
          [0, 55, 0, 75, 0, 100, 0], // idle
          [0, 0, 100, 0, 0, 0, 0], // wind
          [100, 0, 0, 0, 0, 0, 0], // attack
          [0, 0, 0, 0, 100, 0, 0], // duckwind
          [100, 0, 0, 0, 0, 0, 0], // duckattack
          [0, 0, 0, 0, 0, 0, 100], // guardwind
          [100, 0, 0, 0, 0, 0, 0]  // guardattack
        ],
        states: [
          { // idle
          image: '../../assets/enemies/enemy2/enemy2_idle.jpg',
          duration: 2000,
          isAttack: false,
          attackType: "both"
          },
          { // wind
          image: '../../assets/enemies/enemy2/enemy2_windup.jpg',
          duration: 1000,
          isAttack: false,
          attackType: "both"
          },
          { // attack
          image: '../../assets/enemies/enemy2/enemy2_attack.jpg',
          duration: 400,
          isAttack: true,
          attackType: "both",
          damage: 5
          },
          { // duckwind
          image: '../../assets/enemies/enemy2/enemy2_windup.jpg',
          duration: 900,
          isAttack: false,
          attackType: "duck"
          },
          { // duckattack
          image: '../../assets/enemies/enemy2/enemy2_attack.jpg',
          duration: 400,
          isAttack: true,
          attackType: "duck",
          damage: 5
          },
          { // guardwind
          image: '../../assets/enemies/enemy2/enemy2_windup.jpg',
          duration: 900,
          isAttack: false,
          attackType: "guard"
          },
          { // guardattack
          image: '../../assets/enemies/enemy2/enemy2_attack.jpg',
          duration: 400,
          isAttack: true,
          attackType: "guard",
          damage: 5
          },
        ]
    },
    player: {
      initialHealth: 200,
      attack: {
        cooldownMs: 500,
        zones: {
          top: { damage: 2 },
          bottom: { damage: 5 },
        },
      },
    },
  },
  'fight-3': {
    id: 'fight-3',
    label: 'Dodgeballer',
    detail: 'Fast throws with tricky timing',
    opponent: {
      name: 'Dodgeballer',
      initialHealth: 120,
      image: require('../../assets/enemies/enemy3/enemy3_idle.jpeg'),
      idleImage: require('../../assets/enemies/enemy3/enemy3_idle.jpeg'),
      windupImage: require('../../assets/enemies/enemy3/enemy3_windup.jpeg'),
      attackImage: require('../../assets/enemies/enemy3/enemy3_attack.jpeg'),
      vertices: [
        [0, 50, 0, 75, 0, 100, 0], // idle
        [0, 0, 100, 0, 0, 0, 0],    // wind
        [100, 0, 0, 0, 0, 0, 0],    // attack
        [0, 0, 0, 0, 100, 0, 0],    // duckwind
        [100, 0, 0, 0, 0, 0, 0],    // duckattack
        [0, 0, 0, 0, 0, 0, 100],    // guardwind
        [100, 0, 0, 0, 0, 0, 0],    // guardattack
      ],
      states: [
        {
          image: '../../assets/enemies/enemy3/enemy3_idle.jpeg',
          duration: 1800,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: '../../assets/enemies/enemy3/enemy3_windup.jpeg',
          duration: 900,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: '../../assets/enemies/enemy3/enemy3_attack.jpeg',
          duration: 350,
          isAttack: true,
          attackType: 'both',
          damage: 6,
        },
        {
          image: '../../assets/enemies/enemy3/enemy3_windup.jpeg',
          duration: 800,
          isAttack: false,
          attackType: 'duck',
        },
        {
          image: '../../assets/enemies/enemy3/enemy3_attack.jpeg',
          duration: 350,
          isAttack: true,
          attackType: 'duck',
          damage: 6,
        },
        {
          image: '../../assets/enemies/enemy3/enemy3_windup.jpeg',
          duration: 800,
          isAttack: false,
          attackType: 'guard',
        },
        {
          image: '../../assets/enemies/enemy3/enemy3_attack.jpeg',
          duration: 350,
          isAttack: true,
          attackType: 'guard',
          damage: 6,
        },
      ],
    },
    player: {
      initialHealth: 120,
      attack: {
        cooldownMs: 650,
        zones: {
          top: { damage: 3 },
          bottom: { damage: 4 },
        },
      },
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
