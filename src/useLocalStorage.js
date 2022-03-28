import { useState, useEffect } from "react";

function getStoredCharData(key, defaultValue) {
  // getting stored value
  var saved = localStorage.getItem('charData');
  if(saved === null) {
    var charData = {
      charId: 123,
      name: "",
      rolClass: 0,
      lvl: 1,
      xp: 0,
      actualPv: 0,
      totalPv: 0,
      stats: [ ],
      skills: [ ],
      actualPod: 0,
    };
    saved = JSON.stringify(charData)
  }
  const initial = JSON.parse(saved)[key];
  return initial || defaultValue;
}

function getStoredCharDataFull() {
  // getting stored value
  var saved = localStorage.getItem('charData');
  if(saved === null) {
    var charData = {
      charId: 123,
      name: "",
      rolClass: null,
      lvl: 1,
      xp: 0,
      actualPv: 0,
      totalPv: 0,
      stats: [ 0, 0, 0, 0, 0, 0 ],
      skills: [ ],
      actualPod: 0,
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