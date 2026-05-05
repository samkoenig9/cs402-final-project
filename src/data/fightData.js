export const fightConfigs = {
  'fight-1': {
    id: 'fight-1',
    label: 'Fight 1',
    detail: 'Balanced opener',
    opponent: {
      name: 'Hamster',
      initialHealth: 2500,
      image: require('../../assets/enemies/enemy1/ham.jpg'),
      idleImage: require('../../assets/enemies/enemy1/ham.jpg'),
      windupImage: require('../../assets/enemies/enemy1/ham_wind.jpg'),
      attackImage: require('../../assets/enemies/enemy1/ham_attack.jpg'),
          vertices: [
          [0, 60, 0, 80, 0, 100, 0], // idle
          [0, 0, 100, 0, 0, 0, 0], // wind
          [100, 0, 0, 0, 0, 0, 0], // attack
          [0, 0, 0, 0, 100, 0, 0], // duckwind
          [100, 0, 0, 0, 0, 0, 0], // duckattack
          [0, 0, 0, 0, 0, 0, 100], // guardwind
          [100, 0, 0, 0, 0, 0, 0]  // guardattack
        ],
        states: [
          { // idle
          image: require('../../assets/enemies/enemy1/ham.jpg'),
          duration: 2500,
          isAttack: false,
          attackType: "both"
          },
          { // wind
          image: require('../../assets/enemies/enemy1/ham_wind.jpg'),
          duration: 1200,
          isAttack: false,
          attackType: "both"
          },
          { // attack
          image: require('../../assets/enemies/enemy1/ham_attack.jpg'),
          duration: 500,
          isAttack: true,
          attackType: "both",
          damage: 2
          },
          { // duckwind
          image: require('../../assets/enemies/enemy1/ham.jpg'),
          duration: 1200,
          isAttack: false,
          attackType: "duck"
          },
          { // duckattack
          image: require('../../assets/enemies/enemy1/ham.jpg'),
          duration: 500,
          isAttack: true,
          attackType: "duck",
          damage: 2
          },
          { // guardwind
          image: require('../../assets/enemies/enemy1/ham.jpg'),
          duration: 1200,
          isAttack: false,
          attackType: "guard"
          },
          { // guardattack
          image: require('../../assets/enemies/enemy1/ham.jpg'),
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
        cooldownMs: 100,
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
    detail: 'Quick hits and timed defense',
    opponent: {
      name: 'Boxer',
      initialHealth: 3000,
      image: require('../../assets/enemies/enemy2/2_idle.jpg'),
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
          image: require('../../assets/enemies/enemy2/2_idle.jpg'),
          duration: 2000,
          isAttack: false,
          attackType: "both"
          },
          { // wind
          image: require('../../assets/enemies/enemy2/2_wind_either.jpg'),
          duration: 1000,
          isAttack: false,
          attackType: "both"
          },
          { // attack
          image: require('../../assets/enemies/enemy2/2_attack_either.jpg'),
          duration: 400,
          isAttack: true,
          attackType: "both",
          damage: 5
          },
          { // duckwind
          image: require('../../assets/enemies/enemy2/2_wind_dodge.jpg'),
          duration: 900,
          isAttack: false,
          attackType: "duck"
          },
          { // duckattack
          image: require('../../assets/enemies/enemy2/2_attack_dodge.jpg'),
          duration: 400,
          isAttack: true,
          attackType: "duck",
          damage: 5
          },
          { // guardwind
          image: require('../../assets/enemies/enemy2/2_wind_guard.jpg'),
          duration: 900,
          isAttack: false,
          attackType: "guard"
          },
          { // guardattack
          image: require('../../assets/enemies/enemy2/2_attack_guard.jpg'),
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
        cooldownMs: 100,
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
      initialHealth: 3200,
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
          image: require('../../assets/enemies/enemy3/enemy3_idle.jpeg'),
          duration: 1800,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: require('../../assets/enemies/enemy3/enemy3_windup.jpeg'),
          duration: 900,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: require('../../assets/enemies/enemy3/enemy3_attack.jpeg'),
          duration: 350,
          isAttack: true,
          attackType: 'both',
          damage: 6,
        },
        {
          image: require('../../assets/enemies/enemy3/enemy3_windup_d.jpeg'),
          duration: 800,
          isAttack: false,
          attackType: 'duck',
        },
        {
          image: require('../../assets/enemies/enemy3/enemy3_attack.jpeg'),
          duration: 350,
          isAttack: true,
          attackType: 'duck',
          damage: 6,
        },
        {
          image: require('../../assets/enemies/enemy3/enemy3_windup_g.jpeg'),
          duration: 800,
          isAttack: false,
          attackType: 'guard',
        },
        {
          image: require('../../assets/enemies/enemy3/enemy3_attack.jpeg'),
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
        cooldownMs: 100,
        zones: {
          top: { damage: 3 },
          bottom: { damage: 4 },
        },
      },
    },
  },
  'fight-4': {
    id: 'fight-4',
    label: 'The Dental Phantom',
    detail: 'Full Of Suprises!',
    opponent: {
      name: 'Dentom',
      initialHealth: 4000,
      image: require('../../assets/enemies/enemy4/4idle.jpg'),
      vertices: [
        [0, 0, 0, 50, 0, 100, 0], // idle
        [0, 20, 100, 0, 0, 0, 0],    // wind
        [100, 50, 0, 0, 0, 0, 0],    // attack
        [0, 1, 0, 0, 100, 0, 0],    // duckwind
        [0, 100, 0, 0, 0, 10, 0],    // duckattack
        [0, 1, 0, 0, 0, 0, 100],    // guardwind
        [0, 100, 0, 0, 0, 0, 0],    // guardattack
      ],
      states: [
        {
          image: require('../../assets/enemies/enemy4/4idle.jpg'),
          duration: 1000,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: require('../../assets/enemies/enemy4/4windeither.jpg'),
          duration: 600,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: require('../../assets/enemies/enemy4/4attaeither.jpg'),
          duration: 200,
          isAttack: true,
          attackType: 'both',
          damage: 6,
        },
        {
          image: require('../../assets/enemies/enemy4/4winddodge.jpg'),
          duration: 800,
          isAttack: false,
          attackType: 'duck',
        },
        {
          image: require('../../assets/enemies/enemy4/4attadodge.jpg'),
          duration: 350,
          isAttack: true,
          attackType: 'duck',
          damage: 6,
        },
        {
          image: require('../../assets/enemies/enemy4/4windguard.jpg'),
          duration: 800,
          isAttack: false,
          attackType: 'guard',
        },
        {
          image: require('../../assets/enemies/enemy4/4attaguard.jpg'),
          duration: 350,
          isAttack: true,
          attackType: 'guard',
          damage: 6,
        },
      ],
    },
    player: {
      initialHealth: 100,
    },
  },
  'fight-5': {
    id: 'fight-5',
    label: 'Quapok',
    detail: 'My Beloved Little Freaky Ducky Darling!',
    opponent: {
      name: 'Quapok',
      initialHealth: 5000,
      image: require('../../assets/enemies/enemy5/q_idle.jpg'),
      vertices: [
        [0, 50, 0, 60, 0, 100, 0], // idle
        [0, 0, 100, 10, 0, 20, 0],    // wind
        [100, 40, 0, 20, 0, 10, 0],    // attack
        [0, 10, 0, 0, 100, 0, 0],    // duckwind
        [100, 0, 0, 20, 0, 10, 0],    // duckattack
        [0, 10, 0, 0, 0, 0, 100],    // guardwind
        [100, 40, 0, 20, 0, 10, 0],    // guardattack
      ],
      states: [
        {
          image: require('../../assets/enemies/enemy5/q_idle.jpg'),
          duration: 600,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: require('../../assets/enemies/enemy5/q_either_wind.jpg'),
          duration: 400,
          isAttack: false,
          attackType: 'both',
        },
        {
          image: require('../../assets/enemies/enemy5/q_either_att.jpg'),
          duration: 350,
          isAttack: true,
          attackType: 'both',
          damage: 6,
        },
        {
          image: require('../../assets/enemies/enemy5/q_duck_wind.jpg'),
          duration: 800,
          isAttack: false,
          attackType: 'duck',
        },
        {
          image: require('../../assets/enemies/enemy5/q_duck_att.jpg'),
          duration: 350,
          isAttack: true,
          attackType: 'duck',
          damage: 6,
        },
        {
          image: require('../../assets/enemies/enemy5/q_guard_wind.jpg'),
          duration: 600,
          isAttack: false,
          attackType: 'guard',
        },
        {
          image: require('../../assets/enemies/enemy5/q_guard_att.jpg'),
          duration: 150,
          isAttack: true,
          attackType: 'guard',
          damage: 6,
        },
      ],
    },
    player: {
      initialHealth: 100,
    },
  },
};
