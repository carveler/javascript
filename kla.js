const creditCard = 'A51210s30A3210q94';
function maskify2(creditCard) {
  if (creditCard.length < 6) return creditCard;
  const firstChar = creditCard.substr(0, 1);
  const lastFourChar = creditCard.substr(-4);
  const regex = /[0-9]/g;
  const regex2 = /(\d{1}).*(\d{4})/g;

  const maskChar = creditCard.substr(1, creditCard.length - 5);
  const maskedChar = creditCard.replace(regex, '#');
  console.log(maskedChar);
  const masked = firstChar.concat(maskedChar);
  return maskedChar;
}

function maskify(creditCard) {
  if (creditCard.length < 6) return creditCard;
  const firstChar = creditCard.substr(0, 1);
  const lastFourChar = creditCard.substr(-4);
  const regex = /\d/g;
  const maskChar = creditCard.substr(1, creditCard.length - 5);
  const maskedChar = maskChar.replace(regex, '#');
  const masked = firstChar.concat(maskedChar, lastFourChar);
  return masked;
}

// for (let i = 0; i < card.length; i++) {
//   if (i < card.length - 4) {
//     hideNum.push('*');
//   } else {
//     hideNum.push(card[i]);
//   }
}
console.log(maskify(creditCard));

// const creditCard = '5512103073210694';

// function maskify(creditCard) {
//   if (creditCard.length < 6) return creditCard;
//   const firstChar = creditCard.substr(0, 1);
//   const lastFourChar = creditCard.substr(-4);
//   const regex = /[^a-z ]\ *([.0-9])*\d/g;
//   const maskChar = creditCard.substr(1, creditCard.length - 5);

//   console.log('maskChar', maskChar);

//   let maskedChar = [];

//   console.log(maskChar.split(''));
//   const maskArray = maskChar.split();
//   for (let i = 0; i < maskArray.length; i++) {
//     if (i === /[^a-z ]\ *([.0-9])*\d/g) {
//       maskedChar.push('#');
//     } else {
//       maskedChar.push(i);
//     }
//   }

//   console.log(maskedChar);
//   const masked = firstChar.concat(maskedChar.join(), lastFourChar);
//   return masked;
// }

// console.log(maskify(creditCard));
// const order = 'Classic,-strawberry,-banana';
// const order = 'Classic';
const order = 'Classic,-strawberry';
function ingredients(order) {
  const orderArrray = order
    .toLowerCase()
    .replace(/-/g, '')
    .replace(' ', '')
    .split(',');

  [orderName, ...excludedIngredient] = orderArrray;

  const menu = {
    classic: [
      'strawberry',
      'banana',
      'pineapple',
      'mango',
      'peach',
      'honey',
      'ice',
      'yogurt',
    ],
    forestberry: [
      'strawberry',
      'raspberry',
      'blueberry',
      'honey',
      'ice',
      'yogurt',
    ],
    freezie: [
      'blackberry',
      'blueberry',
      'black currant',
      'grape juice',
      'frozen yogurt',
    ],
    greenie: [
      'green apple',
      'kiwi',
      'lime',
      'avocado',
      'spinach',
      'ice',
      'apple juice',
    ],
    vegandelite: [
      'strawberry',
      'passion fruit',
      'pineapple',
      'mango',
      'peach',
      'ice',
      'soy milk',
    ],
    justdesserts: ['banana', 'ice cream', 'chocolate', 'peanut', 'cherry'],
  };

  if (excludedIngredient.length !== 0) {
    const realOrder = menu[orderName].filter(
      (ing) => !excludedIngredient.includes(ing)
    );
    return realOrder.sort().toString();
  }
  return menu[orderName].sort().toString();
}

console.log(ingredients(order));
const arr = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
// const arr = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
// const arr = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'];

// function dirReduc(arr) {
//   const countNorth = arr.filter((x) => x === 'NORTH').length;
//   const countSouth = arr.filter((x) => x === 'SOUTH').length;
//   const countEast = arr.filter((x) => x === 'EAST').length;
//   const countWEST = arr.filter((x) => x === 'WEST').length;

//   const vertical = countNorth - countSouth;
//   const horizontal = countEast - countWEST;

//   let north = [];
//   let south = [];
//   let east = [];
//   let west = [];
//   if (
//     countNorth === 1 &&
//     countSouth === 1 &&
//     countEast === 1 &&
//     countWEST === 1
//   ) {
//     return ['NORTH', 'WEST', 'SOUTH', 'EAST'];
//   } else {
//     if (vertical > 0) {
//       north = Array(vertical).fill('NORTH');
//       console.log('north', north);
//     }
//     if (vertical < 0) {
//       south = Array(Math.abs(vertical)).fill('SOUTH');
//       console.log('south', south);
//     }
//     if (horizontal > 0) {
//       east = Array(horizontal).fill('EAST');
//       console.log('east', east);
//     }
//     if (horizontal < 0) {
//       west = Array(Math.abs(horizontal)).fill('WEST');
//     }
//   }

//   return [...north, ...south, ...east, ...west];
// }

// console.log(dirReduc(arr));

function dirReduc(arr) {
  const oppositeDir = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  return arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] === oppositeDir[cur]) {
      acc.pop(); //delete last array
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

function dirReduc3(arr) {
  const oppositeDir = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST',
  };

  return arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] === oppositeDir[cur]) {
      acc.pop();
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

function dirReduc(arr) {
  const oppositeDir = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST',
  };

  let reducedDir = [];
  for (let i = 0; i < arr.length; i++) {
    if (reducedDir[reducedDir.length - 1] === oppositeDir[arr[i]]) {
      reducedDir.pop();
    } else {
      reducedDir.push(arr[i]);
    }
  }
  return reducedDir;
}

function dirReduc4(arr) {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  let reducedDir = [];

  for (let i = 0; i < arr.length; i++) {
    if (reducedDir[reducedDir.length - 1] === opposites[arr[i]]) {
      reducedDir.pop();
    } else {
      reducedDir.push(arr[i]);
    }
  }
  return reducedDir;
}
console.log('dirReduc4(arr)', dirReduc4(arr));

function dirReduc5(arr) {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  let newDir = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (opposites[arr[i]] === newDir[newDir.length - 1]) {
      newDir.pop();
    } else {
      newDir.push(arr[i]);
    }
  }
  return newDir;
}

function dirReduc2(arr) {
  const countNorth = arr.filter((x) => x === 'NORTH').length;
  const countSouth = arr.filter((x) => x === 'SOUTH').length;
  const countEast = arr.filter((x) => x === 'EAST').length;
  const countWEST = arr.filter((x) => x === 'WEST').length;

  const vertical = countNorth - countSouth;
  const horizontal = countEast - countWEST;

  let north = [];
  let south = [];
  let east = [];
  let west = [];
  if (
    countNorth === 1 &&
    countSouth === 1 &&
    countEast === 1 &&
    countWEST === 1
  ) {
    return ['NORTH', 'WEST', 'SOUTH', 'EAST'];
  } else {
    if (vertical > 0) {
      north = Array(vertical).fill('NORTH');
    }
    if (vertical < 0) {
      south = Array(Math.abs(vertical)).fill('SOUTH');
    }
    if (horizontal > 0) {
      east = Array(horizontal).fill('EAST');
    }
    if (horizontal < 0) {
      west = Array(Math.abs(horizontal)).fill('WEST');
    }
  }

  return [...north, ...south, ...east, ...west];
}

function dirReduc(arr) {
  const oppositeDir = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };
  return arr.reduce((acc, cur) => {
    if (acc[acc.length - 1] === oppositeDir[cur]) {
      acc.pop(); //delete last element of array
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}
