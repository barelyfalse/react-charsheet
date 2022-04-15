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
      { name: "Maestro de la emboscada",
        description: "Ataque por sorpresa para todo el grupo a enemigos que no están en combate.",
        type: "Ofensiva",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "El primer turno es para el grupo." },
          { level: 2, cost: -1, duration: -1,
            description: "El primer turno del equipo se realiza con ventaja" },
        ]
      },
      { name: "Vista aguda",
        description: "Valor extra en tiradas para percibir enemigos, trampas o emboscadas ocultas",
        type: "Utilidad",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "+1 en PER" },
          { level: 2, cost: -1, duration: -1,
            description: "+2 en PER" },
          { level: 3, cost: -1, duration: -1,
            description: "+3 en PER" },
        ]
      },
      { name: "Puntos débiles",
        description: "Más golpes críticos.",
        type: "Ofensiva",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "Críticos con dados 19 y 20." },
        ]
      },
      { name: "Golpe letal",
        description: "Crítico en el siguiente ataque si el objetivo no salva una tirada de CON.",
        type: "Ofensiva",
        advance: [ 
          { level: 1, cost: 3, duration: 0,
            description: "Salvada de 20 de CON." },
          { level: 2, cost: 3, duration: 0,
            description: "Salvada de 18 de CON." },
        ]
      },
      { name: "Sigilo",
        description: "El jugador entra en sigilo en estado oculto si supera una dificultad general de PER del enemigo.",
        type: "Utilidad",
        advance: [ 
          { level: 1, cost: 1, duration: 0,
            description: "Si el enemigo supera la dificultad de PER el jugador no entra en sigilo." },
          { level: 2, cost: 1, duration: 0,
            description: "Si el enemigo supera la dificultad de PER entra en sigilo en modo cubierto." },
        ]
      },
      { name: "Acechante mortal",
        description: "Multiplicador de daño al atacar el flanco de un enemigo en sigilo.",
        type: "",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "Triple daño. El jugador sale de sigilo. (puede usar su acción bonus para volver a entrar en modo cubierto)" },
          { level: 2, cost: -1, duration: -1,
            description: "Triple daño. Si el daño es a distancia el jugador pasa a estado cubierto." },
        ]
      },
      { name: "Caminata asesina",
        description: "Mas capacidad para moverse.",
        type: "Utilidad",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "2 metros más que el movimiento base." },
          { level: 2, cost: -1, duration: -1,
            description: "3 metros más que el movimiento base." },
        ]
      },
      { name: "",
        description: "",
        type: "",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "" },
          { level: 2, cost: -1, duration: -1,
            description: "" },
        ]
      },
      { name: "",
        description: "",
        type: "",
        advance: [ 
          { level: 1, cost: -1, duration: -1,
            description: "" },
          { level: 2, cost: -1, duration: -1,
            description: "" },
        ]
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
      { name: "Prestidigitación",
        description: "Ventaja al momento de realizar salvar dificultades de habilidad con las manos.",
        advance: [ 
          { level: 1, cost: 0, duration: 0,
            description: "+1 DES" },
        ]
      },
      { name: "Impostor",
        description: "Imita las características de un individuo, en casi todos los sentidos.",
        advance: [ 
          { level: 1, cost: 4, duration: 0,
            description: "Es posible imitarlo todo excepto la voz de una criatura." },
        ]
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
      { name: "Maestro de la emboscada",
        description: "Ataque por sorpresa para todo el grupo a enemigos que no están en combate.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0,
            descriptions: ["El primer turno de la pelea es para el grupo."]},
          { level: 2, cost: 0, duration: 0,
            descriptions: ["El primer turno del equipo se realiza con ventaja."] },]
      },
      { name: "Fijar objetivo",
        description: "Marca un objetivo, no se puede cambiar de objetivo a menos que se realice otra acción.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0,
            descriptions: ["Hasta que escape o muera recibirá un +2 en los daños que se le realicen."] },
          { level: 2, cost: 2, duration: 0,
            descriptions: ["Hasta que escape o muera recibirá un +3 en los daños que se le realicen."] },
        ]
      },
      { name: "Disparo certero",
        description: "Disparo que, de acertar, realiza daño extra al objetivo.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0,
            descriptions: ["+3 de daño"] },
          { level: 2, cost: 2, duration: 0,
            descriptions: ["+4 de daño"] },
          { level: 3, cost: 1, duration: 0,
            descriptions: ["+5 de daño"] },
        ]
      },
      { name: "Tiro curvo",
        description: "Se dispara un proyectil curvo que evade obstáculos.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0,
            descriptions: ["Se puede disparar a enemigos a media cobertura sin desventaja."] },
          { level: 2, cost: 2, duration: 0,
            descriptions: ["Se puede disparar a enemigos a cubierto sin ninguna desventaja."] },
        ]
      },
      { name: "Múltiple disparo",
        description: "Se pueden disparar varios tiros por turno.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0,
            descriptions: ["Se puede disparar 2 veces en un turno."] },
          { level: 2, cost: 2, duration: 0,
            descriptions: ["Se puede disparar 3 veces en un turno."] },
        ]
      },
      { name: "Proyectil elemental",
        description: "Uso de un proyectil especial elemental.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0,
            descriptions: ["Proyectiles de fuego (inflinge incendiado I por 3 turnos)."] },
          { level: 2, cost: 3, duration: 0,
            descriptions: [
              "Proyectiles de fuego (inflinge incendiado II por 4 turnos).",
              "Proyectiles de hielo (inflinge congelado I por 3 turnos)."
            ] 
          },
          { level: 3, cost: 3, duration: 0,
            descriptions: [
              "Proyectiles de fuego (inflinge incendiado III por 4 turnos).",
              "Proyectiles de hielo (inflinge congelado II por 4 turnos).",
              "Proyectiles de electricidad (inflinge electrocutado I por 3 turnos)."
            ] 
          },
        ]
      },
      { name: "Superviviente",
        description: "Habilidades de naturaleza y supervivencia.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0,
            descriptions: ["Encender fuego, crear antorchas, manipular animales, rastreo básico, crear trampa básica."] },
          { level: 2, cost: 0, duration: 0,
            descriptions: ["Improvisar arma, montar animal, conocimiento geográfico, encontrar alimento, crear trampa avanzada, rastreo avanzado."] },
        ]
      },
      { name: "Movilidad superior",
        description: "Mas capacidad para moverse.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0,
            descriptions: ["2 metros más que el movimiento base."] },
          { level: 2, cost: 0, duration: 0,
            descriptions: ["3 metros más que el movimiento base."] },
        ]
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