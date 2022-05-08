import { useState, useEffect } from "react";

function getStoredCharData(key, defaultValue) {
  // getting stored value
  var saved = localStorage.getItem('charData');
  if(saved === null) {
    var charData = {
      charId: 123,
      name: '',
      rolClass: '',
      rolRace: '',
      lvl: 1,
      xp: 0,
      actualPv: 0,
      totalPv: 0,
      stats: [ 0, 0, 0, 0, 0, 0 ],
      skills: [ ],
      currentPod: 0,
      maxPod: 0,
      inventory: [],
      equipment: [],
      handicap: '',
    };
    saved = JSON.stringify(charData)
  }
  var initial = JSON.parse(saved)[key];
  return initial || defaultValue;
}

function getStoredCharDataFull() {
  // getting stored value
  var saved = localStorage.getItem('charData');
  if(saved === null) {
    var charData = {
      charId: 123,
      name: '',
      rolClass: '',
      rolRace: '',
      lvl: 1,
      xp: 0,
      currentPv: 0,
      maxPv: 0,
      stats: [ 0, 0, 0, 0, 0, 0 ],
      skills: [ ],
      currentPod: 0,
      maxPod: 0,
      inventory: [],
      equipment: [],
      handicap: '',
    };
    return charData;
  }
  const initial = JSON.parse(saved);
  return initial;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStoredCharData(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    var stored = getStoredCharDataFull();
    stored[key] = value;
    localStorage.setItem('charData', JSON.stringify(stored));
  }, [key, value]);

  return [value, setValue];
};

export const isCreated = () => {
  if(localStorage.getItem('charData').name !== null) {
    const initial = JSON.parse(localStorage.getItem('charData'));
    return initial.name;
  } else {
    return false;
  }
}

export const createNewCharacter = (rolRace, rolClass, name, handicap, stats, pv) => {
  localStorage.removeItem("charData");
  var charData = {
    charId: 123,
    name: name,
    rolClass: rolClass,
    rolRace: rolRace,
    lvl: 1,
    xp: 0,
    currentPv: pv,
    maxPv: pv,
    stats: stats,
    skills: [ ],
    currentPod: 0,
    maxPod: 0,
    inventory: [],
    equipment: [],
    handicap: handicap,
  };
  localStorage.setItem('charData', JSON.stringify(charData));
}