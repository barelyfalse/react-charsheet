const rolCharStats = [
  {name: 'fuerza', short: 'FUE'},
  {name: 'destreza', short: 'DES'},
  {name: 'constitución', short: 'CON'},
  {name: 'carisma', short: 'CAR'},
  {name: 'inteligencia', short: 'INT'},
  {name: 'percepción', short: 'PER'},
];

const rolCharSkillStats = [
  {name: 'Ataque', short: 'ATQ'},
  {name: 'Defensa', short: 'DEF'},
  {name: 'Instinto', short: 'INS'},
  {name: 'Poder', short: 'POD'},
]

 const rolCharBasicStats = [
   {name: 'Puntos de vida', short: 'PV'},
   {name: 'Daño', short: 'DMG'},
 ]

const rolItemTypes = [
  'Arma', 'Accesorio', 'Consumible', 'Misceláneo'
];

const commonItems = [
  { id: '1',
    type: 0, 
    name: 'Espada pro', 
    description: 'Una espada olvidada por los antiguos ocupantes de la ciudad.', 
    mods: { dmg: 1 }},
  { id: '2',
    type: 1, 
    name: 'Peto del tonto', 
    description: 'Peto mágico oxidado.', 
    mods: { def: 1, per: 1, des: -1 }},
  { id: '3',
    type: 2, 
    name: 'Poción de fuerza', 
    description: 'Poción que mejora la fuerza del que la consume por un corto espacio de tiempo.', 
    uses: 1,
    duration: 2, 
    mods: { fue: 1 }},
  { id: '4',
    type: 3,
    name: 'Pase de la puerta del norte',
    descripción: 'Un pase otorgado por el mismisimo Lord Carios para tener libre paso en la puerta norte de la muralla.'}
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

export {
  rolClasses, 
  rolCharStats, 
  rolCharSkillStats, 
  rolItemTypes, 
  commonItems, 
  rolCharBasicStats
};