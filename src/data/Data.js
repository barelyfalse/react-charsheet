const rolCharStats = [
  {name: 'Fuerza', short: 'FUE'},
  {name: 'Destreza', short: 'DES'},
  {name: 'Constitución', short: 'CON'},
  {name: 'Carisma', short: 'CAR'},
  {name: 'Inteligencia', short: 'INT'},
  {name: 'Percepción', short: 'PER'},
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
      { level: 1, mods: { atq: 1, def: 0, ins: 0, pod: 2} },
      { level: 2, mods: { atq: 2, def: 0, ins: 0, pod: 3} },
      { level: 3, mods: { atq: 2, def: 0, ins: 1, pod: 4} },
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
      { level: 1, mods: { atq: 0, def: 0, ins: 0, pod: 0} },
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

const rolRaces = [
  { name: "Humano",
    description: "",
    mods: { mis: 3 },
    skills: []
  },
  { name: "Enano",
    description: "",
    mods: { con: 2 },
    skills: [      
      { name: "Resilencia enana",
        description: "Resistencia a venenos.",
        cost: 0, 
        duration: 0
      },
      { name: "Habilidad con las herramientas",
        description: "Facilidad para utilizar herramientas",
        cost: 0, 
        duration: 0
      },
    ]
  },
  { name: "Elfo",
    description: "",
    mods: { des: 2 },
    skills: [      
      { name: "Visión oscura",
        description: "Puede ver con poca luz.",
        cost: 0, 
        duration: 0
      },
      { name: "Antepasado mágico",
        description: "Estirpe mágica, resiste hechizos, +1 INS en salvadas contra talentos mágicos.",
        cost: 0, 
        duration: 0
      },
    ]
  },
  { name: "Elfo oscuro",
    description: "",
    mods: { int: 2 },
    skills: [      
      { name: "Visión nocturna",
        description: "Puede ver sin luz.",
        cost: 0, 
        duration: 0
      },
      { name: "Ancestralidad",
        description: "Ataque elemental mágico en area",
        cost: 2, 
        duration: 0
      },
    ]
  },
  { name: "Medio",
    description: "",
    mods: { des: 2, car: 1 },
    skills: [ ]
  },
  { name: "Draconito",
    description: "Desendiente de dragones.",
    mods: { fue: 2, car: 1 },
    skills: [ ]
  },
  { name: "Medio orco",
    description: "Mitad orco, mitad humano",
    mods: { con: 2, fue: 1 },
    skills: [ ]
  },
  { name: "Medio elfo",
    description: "Mitad elfo, mitad humano",
    mods: { car: 2, mis: 1 },
    skills: [ ]
  },
]

export {
  rolClasses, 
  rolCharStats, 
  rolCharSkillStats, 
  rolItemTypes, 
  commonItems, 
  rolCharBasicStats,
  rolRaces
};