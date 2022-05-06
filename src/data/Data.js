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
  'Arma', 'Armadura', 'Accesorio', 'Consumible', 'Misceláneo'
];

const rolWeaponTypes = [
  'Distancia', 'Melé ligera',	'Melé normal', 'Melé pesada', 'Mágica',
];

const rolArmorTypes = [
  'Ligera', 'Normal', 'Pesada'
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
    weapontypes: [0, 1, 4],
    armortypes: [0],
    initialequipment: [
      
    ],
    skills: [
      { name: "a",
        description: "a",
        action: "a",
        type: "a",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "a"] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "a"] },
        ]
      },
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
    weapontypes: [4],
    armortypes: [0],
    skills: [
      { name: "a",
        description: "a",
        action: "a",
        type: "a",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "a"] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "a"] },
        ]
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
    weapontypes: [4],
    armortypes: [0],
    skills: [
      { name: "a",
        description: "a",
        action: "a",
        type: "a",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "a"] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "a"] },
        ]
      },
    ]
  },

  { name: "Sacerdote",
    description: "Profesa su fé, sigue un código de conducta, no se centra en el combate más bien en sanar las heridas de sus compañeros y dar magias de soporte.",
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
    weapontypes: [4],
    armortypes: [1],
    skills: [
      { name: "Bendición",
        description: "El objetivo tiene ventaja en una tirada de elección por una cantidad de turnos.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 3, cast: 0,
            descriptions: [] },
          { level: 2, cost: 2, duration: 4, cast: 0,
            descriptions: [] },
        ]
      },
      { name: "Sanador bendecido",
        description: "Parte de la curación realizada por el sacerdote le afecta a él mismo.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "1/3 de la sanación."] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "1/2 de la sanación."] },
        ]
      },
      { name: "Sanación",
        description: "Cura PV a objetivos.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Cura 6 PV."] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Cura 10 PV."] },
          { level: 3, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Cura 12 PV."] },
        ]
      },
      { name: "Purificación",
        description: "Remueve debuffs o estados mágicos negativos, de un objetivo.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 0,
            descriptions: [] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: [] },
        ]
      },
      { name: "Juicio ineludible",
        description: "El objetivo tira con desventaja en su siguiente salvación.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: -1,
            descriptions: [] },
        ]
      },
      { name: "Escudo divino",
        description: "Casteado sobre un objetivo para protegerlo, el escudo tiene PV por 1/3 de los PV totales de la criatura.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 3, cast: 0,
            descriptions: [] },
          { level: 2, cost: 2, duration: 3, cast: 0,
            descriptions: [] },
        ]
      },
      { name: "Área santa",
        description: "Establece una área de 6 metros de diámetro alrededor del sacerdote que purifica el suelo, anula miasmas o venenos, y da una penalización a las salvaciones de unidades enemigas corruptas, no-muertos o malignos por una cantidad de turnos.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 4, duration: 4, cast: 1,
            descriptions: [
              "-1 a todas las salvaciónes enemigas."] },
          { level: 2, cost: 3, duration: 4, cast: 1,
            descriptions: [
              "-2 a todas las salvaciónes enemigas."] },
        ]
      },
      { name: "Asistencia divina",
        description: "Si un aliado esta inconciente puede reanimarsele con 70% de su vida máxima.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: [] },
        ]
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
    weapontypes: [4],
    armortypes: [0],
    skills: [
      { name: "Meteoro oscuro",
        description: "Ataque mágico de EA.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 4, duration: 0, cast: 1,
            descriptions: [
              "Ataque de 3 metros de diámetro.",
              "6 de daño por unidad dentro del área."] },
          { level: 2, cost: 4, duration: 0, cast: 1,
            descriptions: [
              "Ataque de 3 metros de diámetro.",
              "8 de daño por unidad dentro del área."] },
        ]
      },
      { name: "Caminata oscura",
        description: "Puede avanzar por una cantidad de turnos siendo invulnerable. De la misma forma, no puede ser objetivo de talentos mágicos de aliados.",
        action: "Utilidad",
        type: "Actividad",
        advance: [ 
          { level: 1, cost: 3, duration: 1, cast: 0,
            descriptions: [
              "Puede avanzar 5 metros."] },
          { level: 2, cost: 3, duration: 1, cast: 0,
            descriptions: [
              "Puede avanzar 6 metros",
              ] },
        ]
      },
      { name: "Sed negra",
        description: "Absorbe una cantidad de PV del objetivo.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: -1,
            descriptions: [
              "Absorbe 4 PV."] },
          { level: 2, cost: 2, duration: 0, cast: -1,
            descriptions: [
              "Absorbe 8 PV."] },
          { level: 3, cost: 2, duration: 0, cast: -1,
            descriptions: [
              "Absorbe 1d20."] },
        ]
      },
      { name: "Control tortuoso",
        description: "Inhabilita la acción de un sentido del objetivo por una cantidad de turnos generando dolor. Se puede inhabilitar sentidos (vista, olfato, gusto, oido), o partes del cuerpo (brazos, piernas, etc.).",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 4, duration: 1, cast: 0,
            descriptions: [] },
          { level: 2, cost: 3, duration: 1, cast: 0,
            descriptions: [] },
        ]
      },
      { name: "Maldición",
        description: "Penalización en la siguiente tirada del objetivo.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "-10 de penalización."] },
        ]
      },
      { name: "Corrosión espiritual",
        description: "Penalización en las estadísticas de habilidad.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 2, cast: 0,
            descriptions: [
              "-1 en todas las estadísticas de habilidad."] },
          { level: 2, cost: 2, duration: 3, cast: 0,
            descriptions: [
              "-2 en todas las estadísticas de habilidad."] },
        ]
      },
      { name: "Nigromancia",
        description: "Se invoca un no muerto (clase: arquero, guerrero, mago). El nivel de la habilidad es el nivel de la criatura invocada y el modificador para las estadísticas de habilidad. PV y  por: 1d20 ",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 5, duration: 4, cast: 1,
            descriptions: [
              "Invoca no-muertos de nivel 1."] },
          { level: 2, cost: 5, duration: 4, cast: 1,
            descriptions: [
              "Invoca no-muertos de nivel 2."] },
          { level: 3, cost: 5, duration: 4, cast: 1,
            descriptions: [
              "Invoca no-muertos de nivel 3."] },
        ]
      },
      { name: "Ritual pagano",
        description: "Con un casteo permanete aplica el efecto \"confundido.\", el mago oscuro no puede realizar otra acción mientras este casteando el talento.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 1, duration: 0, cast: 0,
            descriptions: [] },
          { level: 2, cost: 1, duration: 0, cast: 0,
            descriptions: [
              "El talento puede realizarse como EA de 3 metros de diámetro afectando a las unidades dentro de esta."] },
        ]
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
    weapontypes: [3, 4],
    armortypes: [2],
    skills: [
      { name: "Llamar la atención",
        description: "Un talento que obliga a los enemigos que fallen la salvación a atacar al jugador por una cantidad de turnos.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 2, cast: 0,
            descriptions: [
              "Afecta a un enemigo."] },
          { level: 2, cost: 2, duration: 2, cast: 0,
            descriptions: [
              "Puede dirigirse a grupos de enemigos hasta un máximo de 5 objetivos."] },
        ]
      },
      { name: "Barrera santa",
        description: "Un muro de mágico que absorbe los ataques enemigos. PV de la barrera por: 1d20 + INS.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 4, cast: 0,
            descriptions: [
              "Tamaño variable máximo de 3 metros de alto por 2 de ancho."] },
          { level: 2, cost: 3, duration: 4, cast: 0,
            descriptions: [
              "Tamaño variable máximo de 4 metros de alto por 3 de ancho.", 
              "Se puede aplicar también al rededor de un objetivo"] },
        ]
      },
      { name: "Sanación",
        description: "Cura PV a objetivos.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Cura 6 PV"] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Cura 10 PV"] },
          { level: 3, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Cura 12 PV"] },
        ]
      },
      { name: "Lazo santo",
        description: "El daño del objetivo se comparte con el jugador.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 3, cast: 0,
            descriptions: [
              "El jugador absorbe 1/2 del daño."] },
          { level: 2, cost: 2, duration: 3, cast: 0,
            descriptions: [
              "El jugador decide el procentaje de daño a absorber."] },
        ]
      },
      { name: "Penitencia divina",
        description: "Debuff de daño al objetivo.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 1, duration: 2, cast: 0,
            descriptions: [
              "-5 de daño."] },
          { level: 2, cost: 1, duration: 3, cast: 0,
            descriptions: [
              "-6 de daño."] },
        ]
      },
      { name: "Bendecir",
        description: "Ventaja al objetivo en una tirada de elección.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 5, cast: -1,
            descriptions: [
              "Ventaja en una salvada de elección."] },
        ]
      },
      { name: "Martillo bendito",
        description: "Ataque de EA, provoca el estado aturdido más una cantidad de daño.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 1, cast: 0,
            descriptions: [
              "Ataque en forma de cono de 2 metros de ancho y 3 metros de alcance.",
              "Aplica \"aturdido\" por 1 turno."] },
          { level: 2, cost: 2, duration: 2, cast: 0,
            descriptions: [
              "Ataque en forma de cono de 2 metros de ancho y 3 metros de alcance.",
              "Aplica \"aturdido\" por 2 turno."] },
        ]
      },
      { name: "Opresión divina",
        description: "Inhabilita la acción de un sentido del objetivo por una cantidad de turnos. Se puede inhabilitar sentidos (vista, olfato, gusto, oido) o partes del cuerpo (brazos, piernas, etc.).",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 1, cast: 0,
            descriptions: [] },
          { level: 2, cost: 3, duration: 2, cast: 0,
            descriptions: [] },
        ]
      },
      { name: "Protección divina",
        description: "Inmunidad al daño por una cantidad de turnos.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 2, cast: 1,
            descriptions: [
              "Imunidad al daño por 2 turnos.",
              "El casteo puede ser interrumpido por un ataque."] },
          { level: 2, cost: 2, duration: 3, cast: 1,
            descriptions: [
              "Imunidad al daño por 3 turnos.",
              "El casteo puede ser interrumpido por un ataque."] },
        ]
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
    weapontypes: [0, 1, 2, 3],
    armortypes: [1],
    skills: [
      { name: "Adaptable en batalla",
        description: "Puede utilizar cualquier tipo de arma cuerpo a cuerpo para luchar.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: [
              "Uso de armas cuerpo a cuerpo de todo porte sin la penalización de ATQ."] },
        ]
      },
      { name: "Ataques múltiples",
        description: "Múltiples ataques por turno.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 3, cast: -1,
            descriptions: [
              "Puede atacar 2 veces por turno."] },
          { level: 2, cost: 2, duration: 3, cast: -1,
            descriptions: [
              "Puede atacar 2 veces por turno."] },
          { level: 3, cost: 2, duration: 2, cast: -1,
            descriptions: [
              "Puede atacar 3 veces por turno."] },
        ]
      },
      { name: "Golpe certero",
        description: "El siguiente ataque aplica aturdimiento más un bonus de daño.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: -1,
            descriptions: [
              "Inflinge aturdido por 1 turno.",
              "+2 al daño total realizado."] },
          { level: 2, cost: 2, duration: 0, cast: -1,
            descriptions: [
              "Inlflige aturdido por 1 turnos.",
              "+4 al daño total realizado."] },
        ]
      },
      { name: "Marca implacable",
        description: "Cuando se ataca a un objetivo este tiene desventaja en su siguiente ataque.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 1, duration: 0, cast: -1,
            descriptions: [
              "Desventaja en su siguiente ataque."] },
          { level: 2, cost: 1, duration: 0, cast: -1,
            descriptions: [
              "Desventaja en sus siguientes 2 ataques."] },
        ]
      },
      { name: "Paso ligero",
        description: "Aumenta el rango de movimiento.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["2 metros más que el movimiento base."] },
          { level: 2, cost: 0, duration: 0, cast: -1,
            descriptions: ["3 metros más que el movimiento base."] },
        ]
      },
      { name: "Golpe físico",
        description: "Si ataca cuerpo a cuerpo puede añadir un golpe con el puño a su turno.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 1, duration: 0, cast: -1,
            descriptions: [
              "Golpe por ataque."] },
        ]
      },
      { name: "Fortaleza mental",
        description: "Inmunidad a los conjuros.",
        action: "Defensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 2, cast: 0,
            descriptions: [
              "Inmunidad por 2 turnos."] },
          { level: 2, cost: 3, duration: 2, cast: 0,
            descriptions: [
              "Inmunidad por 3 turnos."] },
        ]
      },
      { name: "Grito de batalla",
        description: "Más daño y mas defensa.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 2, cast: -1,
            descriptions: [
              "+4 al daño realizado y +1 DEF"] },
          { level: 2, cost: 2, duration: 2, cast: -1,
            descriptions: [
              "+5 al daño realizado y +1 DEF"] },
        ]
      },
      { name: "Reacción rápida",
        description: "Ventaja en tiradas de iniciativa e inmunidad a emboscadas.",
        action: "Defensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: [
              "+2 en tiradas de inciativa."] },
        ]
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
      { level: 10, mods: {atq: 11, def: 2, ins: 2, pod: 6} },
    ],
    weapontypes: [0, 1, 2],
    armortypes: [0],
    skills: [
      { name: "Ataque veloz",
        description: "Múltiples ataques por turno.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 3, cast: -1,
            descriptions: [
              "Puede atacar 2 veces por turno."] },
          { level: 2, cost: 2, duration: 3, cast: -1,
            descriptions: [
              "Puede atacar 2 veces por turno."] },
          { level: 3, cost: 3, duration: 2, cast: -1,
            descriptions: [
              "Puede atacar 3 veces por turno."] },
        ]
      },
      { name: "Espíritu de lucha",
        description: "Ventaja en ataques mientras se este en combate.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 3, cast: 0,
            descriptions: [
              "Ventaja en ATQ"] },
          { level: 2, cost: 2, duration: 4, cast: 0,
            descriptions: [
              "Ventaja en ATQ"] },
        ]
      },
      { name: "Precisión",
        description: "Bonus en el daño del siguiente ataque.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: -1,
            descriptions: [
              "+4 al daño"] },
          { level: 2, cost: 3, duration: 0,  cast: -1,
            descriptions: [
              "+5 al daño"] },
        ]
      },
      { name: "Concentración",
        description: "Multiplicador de daño al siguiente ataque.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 1,
            descriptions: [
              "Triple daño."] },
        ]
      },
      { name: "Ojo infalible",
        description: "Altamente perceptivo",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: [
              "+2 en tiradas de PER."] },
          { level: 2, cost: 0, duration: 0,  cast: -1,
            descriptions: [
              "+3 en tiradas de PER."] }
        ]
      },
      { name: "Ojo para las debilidades",
        description: "Detecta las debilidades de un enemigo.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0,  cast: 0,
            descriptions: ["Detecta debilidades físicas de un objetivo."] },
          { level: 2, cost: 2, duration: 0,  cast: 0,
            descriptions: [
              "Detecta la debilidad física de un objetivo",
              "Detecta debilidades en estructuras y mecanismos."] },
        ]
      },
      { name: "Duelista maestro",
        description: "Si falla un ataque puede volver a tirar con ventaja.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0,  cast: -1,
            descriptions: [
              "Solo sirve 1 ves por combate."] },
          { level: 2, cost: 0, duration: 0,  cast: -1,
            descriptions: [
              "Sirve 2 veces por combate, 1 vez hasta que se descanse."] },
        ]
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
    weapontypes: [0, 1, 2],
    armortypes: [0],
    skills: [
      { name: "Maestro de la emboscada",
        description: "Ataque por sorpresa para todo el grupo a enemigos que no están en combate.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: ["El primer turno es para el grupo."] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: ["El primer turno del equipo se realiza con ventaja"] },
        ]
      },
      { name: "Vista aguda",
        description: "Bonus en tiradas para percibir enemigos, trampas o emboscadas ocultas",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: ["+1 en PER"] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: ["+2 en PER"] },
          { level: 3, cost: 0, duration: 0, cast: 0,
            descriptions: ["+3 en PER"] },
        ]
      },
      { name: "Puntos débiles",
        description: "Más golpes críticos en tiradas de ataque.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["Críticos con dados 19 y 20."] },
        ]
      },
      { name: "Golpe letal",
        description: "Doble daño en el siguiente ataque si el objetivo no salva una tirada de CON.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: -1,
            descriptions: ["Salvada de 20 de CON."] },
          { level: 2, cost: 3, duration: 0, cast: -1,
            descriptions: ["Salvada de 18 de CON."] },
        ]
      },
      { name: "Sigilo",
        description: "El jugador entra en sigilo en estado oculto si supera una dificultad general de PER del enemigo.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 1, duration: 0, cast: 0,
            descriptions: ["Si el enemigo supera la dificultad de PER el jugador no entra en sigilo."] },
          { level: 2, cost: 1, duration: 0, cast: 0,
            descriptions: ["Si el enemigo supera la dificultad de PER entra en sigilo en modo cubierto."] },
        ]
      },
      { name: "Acechante mortal",
        description: "Multiplicador de daño al atacar el flanco de un enemigo en sigilo.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["Triple daño. El jugador sale de sigilo. (puede usar su acción bonus para volver a entrar en modo cubierto)"] },
          { level: 2, cost: 0, duration: 0, cast: -1,
            descriptions: ["Triple daño. Si el daño es a distancia el jugador pasa a estado cubierto."] },
        ]
      },
      { name: "Caminata asesina",
        description: "Mas capacidad para moverse.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["2 metros más que el movimiento base."] },
          { level: 2, cost: 0, duration: 0, cast: -1,
            descriptions: ["3 metros más que el movimiento base."] },
        ]
      },
      { name: "Embeber arma",
        description: "Utiliza venenos o infusiones para aplicar efectos con sus ataques.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 1, duration: 3, cast: -1,
            descriptions: ["Utiliza venenos en botellas del invetario para imbuir el arma con sus efectos"] },
        ]
      },
      { name: "Sellar objetivo",
        description: "Nose",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 0,
            descriptions: ["a"] },
          { level: 2, cost: 3, duration: 0, cast: 0,
            descriptions: ["a"] },
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
    weapontypes: [0, 1, 2],
    armortypes: [0],
    skills: [
      { name: "Prestidigitación",
        description: "Ventaja al momento de salvar dificultades de habilidades con las manos.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: ["+2 en DES"]},
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: ["+3 en DES"]},
        ]
      },
      { name: "Impostor",
        description: "Imita las características de un individuo, en casi todos los sentidos. Solo figuras humanoides.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 6, duration: 0, cast: 0,
            descriptions: [
              "Es posible imitarlo todo, excepto la voz de una criatura.",
              "Duración máxima de 2 horas."
            ] },
          { level: 2, cost: 6, duration: 0, cast: 0,
            descriptions: [
              "Es posible imitarlo todo incluyendo la voz de una criatura.",
              "Duración máxima de 6 horas."
            ] },
        ]
      },
      { name: "Sigilo",
        description: "El jugador entra en sigilo en estado oculto si supera una dificultad general de PER del enemigo.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: ["Si el enemigo supera la dificultad de PER el jugador no entra en sigilo."] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: ["Si el enemigo supera la dificultad de PER entra en sigilo en modo cubierto."] },
        ]
      },
      { name: "Ilusión",
        description: "Crea ilusiones no físicas.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 1,
            descriptions: [
              "Pueden tener una duración máxima de 1 hora.",
              "Pueden realizar movimientos simples."
            ] 
          },
          { level: 2, cost: 2, duration: 0, cast: 1,
            descriptions: [
              "Tienen una duración máxima de 2 horas.",
              "Pueden realizar movimientos simples."
            ] },
          { level: 3, cost: 2, duration: 0, cast: 1,
            descriptions: [
              "Tienen una duración máxima de 4 horas.",
              "Pueden realizar movimientos complejos.",
              "Pueden emitir sonidos simples."
            ] },
        ]
      },
      { name: "Engaño",
        description: "Bonus en tiradas para determinar si una criatura oculta algo, miente o para descubrir criaturas u objetos escondidos.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: ["+2 en PER"] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: ["+3 en PER"] },
        ]
      },
      { name: "Ojo para las debilidades",
        description: "Detecta las debilidades de un enemigo.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: ["Detecta debilidades físicas de un objetivo."] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Detecta la debilidad física de un objetivo",
              "Detecta debilidades en estructuras y mecanismos."] },
        ]
      },
      { name: "Forzar cerraduras",
        description: "Fuerza una cerradura, se tiene que superar la dificultad de destreza (es necesario tener ganzúas en el inventario).",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["Se puede realizar una tirada para tener 1/3 de oportunidad que la herramienta no se consuma."] },
          { level: 2, cost: 0, duration: 0, cast: -1,
            descriptions: ["Se puede realizar una tirada para tener 1/2 de oportunidad que la herramienta no se consuma."] },
        ]
      },
      { name: "Manipulación",
        description: "Bonus en tiradas de CAR para manipular objetivos.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["+2 de CAR"] },
          { level: 2, cost: 0, duration: 0, cast: -1,
            descriptions: ["+3 de CAR"] },
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
    weapontypes: [0, 1, 2],
    armortypes: [1],
    skills: [
      { name: "Maestro de la emboscada",
        description: "Ataque por sorpresa para todo el grupo a enemigos que no están en combate.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: -1,
            descriptions: ["El primer turno de la pelea es para el grupo."]},
          { level: 2, cost: 0, duration: 0, cast: -1,
            descriptions: ["El primer turno del equipo se realiza con ventaja."] },]
      },
      { name: "Fijar objetivo",
        description: "Marca un objetivo, no se puede cambiar de objetivo a menos que se realice otra acción, el objetivo escape o muera.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: ["+2 en los daños que se le realicen."] },
          { level: 2, cost: 2, duration: 0, cast: 0,
            descriptions: ["+3 en los daños que se le realicen."] },
        ]
      },
      { name: "Disparo certero",
        description: "Disparo que, de acertar, realiza daño extra al objetivo.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: -1,
            descriptions: ["+3 de daño"] },
          { level: 2, cost: 2, duration: 0, cast: -1,
            descriptions: ["+4 de daño"] },
          { level: 3, cost: 1, duration: 0, cast: -1,
            descriptions: ["+5 de daño"] },
        ]
      },
      { name: "Tiro curvo",
        description: "Se dispara un proyectil curvo que evade obstáculos.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: -1,
            descriptions: ["Se puede disparar a enemigos a media cobertura sin desventaja."] },
          { level: 2, cost: 2, duration: 0, cast: -1,
            descriptions: ["Se puede disparar a enemigos a cubierto sin ninguna desventaja."] },
        ]
      },
      { name: "Múltiple disparo",
        description: "Se pueden disparar varios tiros por turno.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: -1,
            descriptions: ["Se puede disparar 2 veces en un turno."] },
          { level: 2, cost: 2, duration: 0, cast: -1,
            descriptions: ["Se puede disparar 3 veces en un turno."] },
        ]
      },
      { name: "Proyectil elemental",
        description: "Uso de un proyectil especial elemental.",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: -1,
            descriptions: ["Proyectiles de fuego (inflinge incendiado I por 3 turnos)."] },
          { level: 2, cost: 3, duration: 0, cast: -1,
            descriptions: [
              "Proyectiles de fuego (inflinge incendiado II por 4 turnos).",
              "Proyectiles de hielo (inflinge congelado I por 3 turnos)."
            ] 
          },
          { level: 3, cost: 3, duration: 0, cast: -1,
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
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: ["Encender fuego, crear antorchas, manipular animales, rastreo básico, crear trampa básica."] },
          { level: 2, cost: 0, duration: 0, cast: 0,
            descriptions: ["Improvisar arma, montar animal, conocimiento geográfico, encontrar alimento, crear trampa avanzada, rastreo avanzado."] },
        ]
      },
      { name: "Movilidad superior",
        description: "Mas capacidad para moverse.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: ["2 metros más que el movimiento base."] },
          { level: 2, cost: 0, duration: 0, cast: 0,
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
    weapontypes: [0, 1, 2],
    armortypes: [1],
    skills: [
      { name: "Cinturón de artificios",
        description: "Habilidad que le permite al artificiero utilizar los ítems de una manera más eficiente para poder utilizarlos en combate.",
        action: "Ofensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "Los artificios mecánicos pueden utilizarse como accion del turno."
            ] },
        ]
      },
      { name: "Crear artificio mecánico",
        description: "Crea un ítem con propiedades personalizadas para utilizar en combate.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 5, duration: 0, cast: 4,
            descriptions: [

            ] },
        ]
      },
      { name: "Crear mejunje químico",
        description: "Crea un mejunje químico, pueden ser dañinos o pueden ser curativos. Se pueden utilizar químicos para elaborar artificios mecánicos.\nLos resultados de este proceso pueden ser:",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 3,
            descriptions: [
              "a"] },
        ]
      },
      { name: "Desarmar ítem mecánico",
        description: "Desarma un ítem mecánico, si se supera una dificultad de DES de 18 se pueden obtener piezas mecánicas.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 2,
            descriptions: [
              "a"] },
        ]
      },
      { name: "Crear arma a distancia",
        description: "Crea armas a distancia",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 10, duration: 0, cast: 4,
            descriptions: [
              "a"] },
        ]
      },
      { name: "Crear trampa mecánica",
        description: "Crea una trampa mecánica.",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 3, duration: 0, cast: 2,
            descriptions: [
              "a"] },
        ]
      },
      { name: "Reparar ítem mecánico",
        description: "Repara ítems mecánicos rotos",
        action: "Utilidad",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 4, duration: 0, cast: 3,
            descriptions: [
              "a"] },
        ]
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
        description: "Resistencia mejorada a venenos.",
        action: "Defensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "+2 en CON en salvadas contra venenos."] },
        ]
      },
      { name: "Habilidad con las herramientas",
        description: "Facilidad para utilizar herramientas.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "+1 en DES en salvadas de agilidad con herramientas."] },
        ]
      },
    ]
  },
  { name: "Elfo",
    description: "",
    mods: { des: 2 },
    skills: [  
      { name: "Visión oscura",
        description: "Puede ver con poca luz.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "Puede ver con un nivel bajo de luz de forma perfecta."] },
        ]
      },
      { name: "Antepasado mágico",
        description: "Estirpe mágica, facilidad para resistir hechizos.",
        action: "Defensiva",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "+1 INS en salvadas contra talentos mágicos."] },
        ]
      },
    ]
  },
  { name: "Elfo oscuro",
    description: "",
    mods: { int: 2 },
    skills: [  
      { name: "Visión nocturna",
        description: "Puede ver sin luz.",
        action: "Utilidad",
        type: "Pasiva",
        advance: [ 
          { level: 1, cost: 0, duration: 0, cast: 0,
            descriptions: [
              "Puede ver en oscuridad completa de forma perfecta."] },
        ]
      },
      { name: "Ancestralidad",
        description: "Ataque elemental mágico en área (el elemento se elíje cuando se selecciona la clase).",
        action: "Ofensiva",
        type: "Activa",
        advance: [ 
          { level: 1, cost: 2, duration: 0, cast: 0,
            descriptions: [
              "Ataque de área, cono frontal de 2 metros de longitud y 1 de ancho."] },
        ]
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

const rolCharHandicaps = [
  'Le aterra un animal común',
  'Roba impulsivamente',
  'Le teme a los infantes',
  'Le aterran las alturas',
  'No puede nadar',
  'Tiene una enfermedad misteriosa',
  'Un fantasma vengativo le persigue',
  'Un enemigo poderoso le persigue',
  'Tiene una maldición',
  'Maldice en voz alta sin pensar',
  'Porta un misterioso objeto mágico el cual todo mundo quiere',
  'Odia el desorden',
  'Odia toda la gente',
  'Odia una especie',
  'Le falta un brazo',
  'La palabra “acuerdo” le provoca risa',
];

export {
  rolClasses, 
  rolCharStats, 
  rolCharSkillStats, 
  rolItemTypes, 
  rolCharBasicStats,
  rolRaces,
  rolWeaponTypes,
  rolArmorTypes,
  rolCharHandicaps
};