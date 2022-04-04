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
    description: "Amos de la naturaleza. Combate o conjuros tanto de ataque como apoyo. Invocación de seres del bosque.",
    advance: [
      { level: 1, mods: { atq: 1, def: 0, ins: 1, pod: 3} },
      { level: 2, mods: { atq: 2, def: 0, ins: 1, pod: 3} },
      { level: 3, mods: { atq: 2, def: 0, ins: 2, pod: 4} },
      { level: 4, mods: { atq: 2, def: 0, ins: 3, pod: 4} },
      { level: 5, mods: { atq: 2, def: 1, ins: 3, pod: 4} },
      { level: 6, mods: { atq: 2, def: 1, ins: 4, pod: 5} },
      { level: 7, mods: { atq: 3, def: 2, ins: 4, pod: 5} },
      { level: 8, mods: { atq: 4, def: 2, ins: 5, pod: 6} },
      { level: 9, mods: { atq: 5, def: 2, ins: 5, pod: 6} },
      { level: 10, mods: { atq: 5, def: 2, ins: 6, pod: 7} },
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
    description: "Conjuros, manipulación e ilusiones, conjuros de control y daños no elementales.",
    advance: [
      { level: 1,	mods: { atq:0, def: 0, ins: 2, pod: 2} },
      { level: 2,	mods: { atq:0, def: 0, ins: 2, pod: 2} },
      { level: 3,	mods: { atq:0, def: 0, ins: 3, pod: 3} },
      { level: 4,	mods: { atq:0, def: 0, ins: 4, pod: 4} },
      { level: 5,	mods: { atq:0, def: 0, ins: 4, pod: 5} },
      { level: 6,	mods: { atq:0, def: 0, ins: 5, pod: 6} },
      { level: 7,	mods: { atq:0, def: 0, ins: 6, pod: 7} },
      { level: 8,	mods: { atq:0, def: 0, ins: 7, pod: 8} },
      { level: 9,	mods: { atq:0, def: 0, ins: 8, pod: 9} },
      { level: 10, mods: { atq:0, def: 0, ins: 9, pod: 11} },

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
    description: "Curiosos y ansiosos por conocimiento. Conjuros elementales centrados en daño, conjuros específicos y prácticos.",
    advance: [
      { level: 1,	mods: { atq: 0,	def: 0, ins: 2,	pod: 2} },
      { level: 2,	mods: { atq: 0,	def: 0, ins: 4,	pod: 2} },
      { level: 3,	mods: { atq: 0,	def: 0, ins: 5,	pod: 3} },
      { level: 4,	mods: { atq: 0,	def: 0, ins: 6,	pod: 3} },
      { level: 5,	mods: { atq: 0,	def: 0, ins: 7,	pod: 4} },
      { level: 6,	mods: { atq: 0,	def: 0, ins: 8,	pod: 5} },
      { level: 7,	mods: { atq: 0,	def: 0, ins: 9, pod: 6} },
      { level: 8,	mods: { atq: 0,	def: 0, ins: 10, pod: 7} },
      { level: 9,	mods: { atq: 0,	def: 0, ins: 10, pod: 8} },
      { level: 10, mods: { atq: 0,	def: 0, ins: 11, pod: 10} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },
  { name: "Sacerdote",
    description: "Profesa su fe, sigue un código de conducta, no se centra en el combate más bien en sanar las heridas de sus compañeros y dar magias de soporte.",
    advance: [
      { level: 1, mods: { atq: -2, def: 0, ins:	4, pod: 3} },
      { level: 2, mods: { atq: -1, def: 0, ins:	4, pod: 3} },
      { level: 3, mods: { atq: -1, def: 0, ins:	5, pod: 4} },
      { level: 4, mods: { atq: -1, def: 0, ins:	5, pod: 5} },
      { level: 5,	mods: { atq: 0, def: 0, ins: 6,	pod: 5} },
      { level: 6,	mods: { atq: 0, def: 0, ins: 6, pod: 6} },
      { level: 7, mods: { atq: 0, def: 0, ins: 7,	pod: 6} },
      { level: 8, mods: { atq: 0, def: 0, ins: 8,	pod: 7} },
      { level: 9, mods: { atq: 1, def: 0, ins: 9, pod: 8} },
      { level: 10, mods: { atq: 1, def: 0, ins:	10,	pod: 9} },

    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Mago oscuro",
    description: "Magia negra, maleficios, posesiones, nigromancia y uso de magia prohibida.",
    advance: [
      { level: 1, mods: { atq: -2, def: -1, ins: 3, pod: 5} },
      { level: 2, mods: {	atq: -1, def:	-1, ins: 3, pod: 5} },
      { level: 3, mods: {	atq: -1, def:	-1, ins: 3, pod: 6} },
      { level: 4, mods: {	atq: -1, def:	0, ins: 4, pod: 7} },
      { level: 5, mods: {	atq: -1, def:	0, ins: 5, pod: 7} },
      { level: 6, mods: { atq: 0,	def: 0, ins: 6, pod: 8} },
      { level: 7, mods: { atq: 0,	def: 0, ins: 6, pod: 8} },
      { level: 8, mods: { atq: 0,	def: 0, ins: 6, pod: 9} },
      { level: 9, mods: { atq: 0,	def: 1, ins: 7, pod: 10} },
      { level: 10, mods: { atq: 1, def: 1, ins: 7, pod: 11} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Paladín",
    description: "Bendecido, campeón. Lucha contra el mal y por la justicia. Apoyo y defensa. Gran calidad de valores morales.",
    advance: [
      { level: 1, mods: { atq: 0, def: 2, ins: 0, pod: 2} },
      { level: 2, mods: { atq: 0, def: 3, ins: 0, pod: 2} },
      { level: 3, mods: { atq: 0, def: 4, ins: 1, pod: 2} },
      { level: 4, mods: { atq: 1, def: 4, ins: 2, pod: 2} },
      { level: 5, mods: { atq: 1, def: 4, ins: 3, pod: 2} },
      { level: 6, mods: { atq: 1, def: 5, ins: 4, pod: 3} },
      { level: 7, mods: { atq: 1, def: 5, ins: 5, pod: 3} },
      { level: 8, mods: { atq: 2, def: 5, ins: 5, pod: 4} },
      { level: 9, mods: { atq: 2, def: 5, ins: 6, pod: 5} },
      { level: 10, mods: { atq: 2, def: 6, ins: 6, pod: 6} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Guerrero",
    description: "Combatiente. Adaptabilidad en combate cuerpo a cuerpo. Uso de armadura y gran variedad de armas de todo porte.",
    advance: [
      { level: 1, mods: { atq: 4, def: 2, ins: -2, pod: 1} },
      { level: 2, mods: { atq: 4, def: 2, ins: -2, pod: 2} },
      { level: 3, mods: { atq: 4, def: 2, ins: -1, pod: 2} },
      { level: 4, mods: { atq: 4, def: 3, ins: -1, pod: 2} },
      { level: 5, mods: { atq: 5, def: 4, ins: -1, pod: 2} },
      { level: 6, mods: { atq: 5, def: 5, ins: 0, pod: 2} },
      { level: 7, mods: { atq: 5, def: 6, ins: 0, pod: 3} },
      { level: 8, mods: { atq: 6, def: 7, ins: 0, pod: 3} },
      { level: 9, mods: { atq: 7, def: 8, ins: 0, pod: 4} },
      { leve: 10, mods: { atq: 8, def: 9, ins: 0, pod: 4} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Samurái",
    description: "Guerrero, honor y virtud, centrado en la precisión, habilidad más que fuerza.",
    advance: [
      { level: 1, mods: { atq: 4, def: -2, ins: 0, pod: 3} },
      { level: 2, mods: { atq: 5, def: -2, ins: 0, pod: 3} },
      { level: 3, mods: { atq: 5, def: -1, ins: 0, pod: 3} },
      { level: 4, mods: { atq: 6, def: -1, ins: 0, pod: 4} },
      { level: 5, mods: { atq: 6, def: -1, ins: 0, pod: 5} },
      { level: 6, mods: { atq: 7, def: 0, ins: 0, pod: 5} },
      { level: 7, mods: { atq: 8, def: 1, ins: 0, pod: 6} },
      { level: 8, mods: { atq: 9, def: 1, ins: 0, pod: 6} },
      { level: 9, mods: { atq: 10, def: 2, ins: 1, pod: 6} },
      { level: 10, mods: {aqt: 11, def: 2, ins: 2, pod: 6} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Asesino",
    description: "Sigilo y oportunismo, infiltración, rápido y gran daño.",
    advance: [
      { level: 1, mods: { atq: 4, def: 0, ins: 0, pod: 1} },
      { level: 2, mods: { atq: 4, def: 0, ins: 0, pod: 2} },
      { level: 3, mods: { atq: 4, def: 0, ins: 1, pod: 2} },
      { level: 4, mods: { atq: 4, def: 0, ins: 1, pod: 3} },
      { level: 5, mods: { atq: 6, def: 0, ins: 2, pod: 3} },
      { level: 6, mods: { atq: 6, def: 1, ins: 2, pod: 4} },
      { level: 7, mods: { atq: 7, def: 1, ins: 2, pod: 4} },
      { level: 8, mods: { atq: 7, def: 2, ins: 2, pod: 4} },
      { level: 9, mods: { atq: 8, def: 2, ins: 3, pod: 5} },
      { level: 10, mods: { atq: 9, def: 3, ins: 3, pod: 5} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Pícaro",
    description: "Oportunismo, manipulación con grandes habilidades de carisma, engaño e ilusión.",
    advance: [
      { level: 1, mods: { atq: 2, def: -1, ins: 0, pod: 1} },
      { level: 2, mods: { atq: 3, def: -1, ins: 0, pod: 2} },
      { level: 3, mods: { atq: 3, def: -1, ins: 1, pod: 3} },
      { level: 4, mods: { atq: 4, def: 0, ins: 1, pod: 3} },
      { level: 5, mods: { atq: 4, def: 0, ins: 2, pod: 4} },
      { level: 6, mods: { atq: 5, def: 1, ins: 2, pod: 4} },
      { level: 7, mods: { atq: 5, def: 1, ins: 2, pod: 4} },
      { level: 8, mods: { atq: 6, def: 2, ins: 2, pod: 5} },
      { level: 9, mods: { atq: 6, def: 2, ins: 3, pod: 5} },
      { level: 10, mods: { atq: 7, def: 3, ins: 4, pod: 6} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Explorador",
    description: "Cazador por excelencia, ataque a distancia, gran agilidad y movilidad.",
    advance: [
      { level: 1, mods: { atq: 4, def: -2, ins: 0, pod: 3} },
      { level: 2, mods: { atq: 4, def: -2, ins: 0, pod: 3} },
      { level: 3, mods: { atq: 5, def: -1, ins: 0, pod: 3} },
      { level: 4, mods: { atq: 5, def: -1, ins: 0, pod: 4} },
      { level: 5, mods: { atq: 6, def: -1, ins: 0, pod: 4} },
      { level: 6, mods: { atq: 6, def: 0, ins: 1, pod: 4} },
      { level: 7, mods: { atq: 7, def: 0, ins: 1, pod: 5} },
      { level: 8, mods: { atq: 8, def: 1, ins: 2, pod: 5} },
      { level: 9, mods: { atq: 9, def: 1, ins: 2, pod: 6} },
      { level: 10, mods: { atq: 9, def: 2, ins: 3, pod: 6} },
    ],
    skills: [
      { name: "",
        description: "",
        cost: 0, 
        duration: 0
      },
    ]
  },

  { name: "Artificiero",
    description: "Pensador, crea artefactos que le ayudan a combatir, armas, accesorios, trampas.",
    advance: [
      { level: 1, mods: { atq: 4, def: 2, ins: -1, pod: 0} },
      { level: 2, mods: { atq: 4, def: 2, ins: -1, pod: 1} },
      { level: 3, mods: { atq: 4, def: 2, ins: -1, pod: 2} },
      { level: 4, mods: { atq: 4, def: 3, ins: 0, pod: 3} },
      { level: 5, mods: { atq: 4, def: 3, ins: 0, pod: 4} },
      { level: 6, mods: { atq: 5, def: 3, ins: 0, pod: 5} },
      { level: 7, mods: { atq: 5, def: 3, ins: 0, pod: 6} },
      { level: 8, mods: { atq: 5, def: 4, ins: 0, pod: 7} },
      { level: 9, mods: { atq: 5, def: 4, ins: 0, pod: 8} },
      { level: 10, mods: { atq: 5, def: 4, ins: 0, pod: 9} },
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