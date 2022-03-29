const rolCharStats = [
  {name: 'fuerza', short: 'FUE'},
  {name: 'destreza', short: 'DES'},
  {name: 'constitución', short: 'CON'},
  {name: 'carisma', short: 'CAR'},
  {name: 'inteligencia', short: 'INT'},
  {name: 'percepción', short: 'PER'},
];

const rolItemTypes = [
  'Arma', 'Armadura', 'Consumible', 'Accesorio', 'Misceláneo'
];

const commonItems = [
  { type: 1, 
    name: 'Espada pro', 
    description: 'Espada olvidada', 
    mods: { dmg: 1 }
  },
  { type: 1, 
    name: 'Espada pro', 
    description: 'Espada olvidada', 
    mods: { dmg: 1 }},
  { type: 1, 
    name: 'Espada pro', 
    description: 'Espada olvidada', 
    mods: { dmg: 1 }},
]

const rolClasses = [
  { name: "Druida",
    description: "Amos de la naturaleza. Combate o conjuros tanto de ataque como apoyo.",
    advance: [
      { level: 1, mods: { atq: 1, def: 0, int: 0, pod: 2} },
      { level: 2, mods: { atq: 2, def: 0, int: 0, pod: 3} },
      { level: 3, mods: { atq: 2, def: 0, int: 1, pod: 4} },
    ],
    skills: [
      { name: "Ataques múltiples",
        description: "Puede atacar 2 veces.",
        cost: 0, 
        duration: 0
      },
      { name: "Transferir escencia",
        description: "Capacidad para transferir puntos de vida.",
        cost: 0, 
        duration: 0
      },
      { name: "Congelar",
        description: "Congela a un objetivo con un alcance de 5 metros.",
        cost: 2, 
        duration: 1
      },
      { name: "Barrera",
        description: "Una barrera que bloquea daño físico y daño mágico elemental con una salud de 20.",
        cost: 2, 
        duration: 2
      }
    ]
  },

  { name: "Hechicero",
    description: "",
    advance: [
      { level: 0, mods: { atq: 0, def: 0, ins: 0, pod: 0} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Mago",
    description: "",
    advance: [
      { level: 0, mods: { atq: 0, def: 0, ins: 0, pod: 0} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

];

export {rolClasses, rolCharStats, rolItemTypes};