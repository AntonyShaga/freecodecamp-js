/*У грі в гольф кожна лунка має par, що відповідає середній кількості ударів (strokes), які повинен зробити гравець, щоб забити м’яч у лунку та завершити гру. Існують різні псевдоніми залежно від того, де знаходяться ваші удари (strokes) відповідно до par.

Вашій функції буде передано аргументи par та strokes. Поверніть правильний рядок відповідно до цієї таблиці, в якій перелічено удари за пріоритетом зверху (найвищий) донизу (найнижчий):

Удари	Повернений рядок
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par та strokes завжди будуть додатними числами. Ми додали масив усіх імен для вашої зручності.
*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

if(strokes === 1) {
  return names[0]
} else if(strokes <= par - 2) {
  return names[1]
} else if(strokes === par - 1) {
  return names[2]
} else if(strokes === par) {
  return names[3]
} else if(strokes === par + 1) {
  return names[4]
} else if(strokes === par + 2) {
  return names[5]
} else if(strokes >= par + 3) {
  return names[6]
}
  return "Change Me";
}

golfScore(5, 4);

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Налаштування
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Setup
const myArray = [];

// Only change code below this line
  let i = 5;
  while (i >= 0) {
    myArray.push(i)
    i--
  }


  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
  const magic = () => {
    return new Date();
  };