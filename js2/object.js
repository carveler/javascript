let simpleColors = {
  colorA: 'white',
  colorB: 'black',
};
let natureColors = {
  colorC: 'green',
  colorD: 'yellow',
};

//show keys
console.log(Object.keys(simpleColors));
console.log(simpleColors.colorA);
// Object.setPrototypeOf(natureColors, simpleColors);
Object.keys(natureColors); // => ['colorC', 'colorD']

/////natureColors contains the properties inherited from simpleColors prototype object. However Object.keys() function skips them.
natureColors['colorA']; // => 'white'
natureColors['colorB']; // => 'black'

Object.values(natureColors);
// => ['green', 'yellow']
Object.entries(natureColors);
// => [ ['colorC', 'green'], ['colorD', 'yellow'] ]
// ...
let newArr = [];
for (let key in natureColors) {
  newArr.push(key);
}
console.log('newArr', newArr);

console.log(Object.entries(natureColors));
let enumerableKeys = [];
for (let key in natureColors) {
  enumerableKeys.push(key);
}
enumerableKeys; // => ['colorC', 'colorD', 'colorA', 'colorB']

let meals = {
  mealA: 'Breakfast',
  mealB: 'Lunch',
  mealC: 'Dinner',
};

////clone meals

const objToArr = Object.entries(meals);
for (let [key, value] of Object.entries(meals)) {
  console.log('48', key, value);
  console.log(Object.entries(meals));
}
const clone = {};
for (let key in meals) {
  clone[key] = meals[key];
}
console.log('clone', clone);

let newMeals = [];
//value into new variable
for (let key in meals) {
  newMeals.push(meals[key]);
  console.log('newMeals,', newMeals);
}
console.log(newMeals);

for (let key of Object.keys(meals)) {
  console.log('Object.keys(meals)', Object.keys(meals));
  let mealName = meals[key];
  // ... do something with mealName
  console.log(mealName);
}
// 'Breakfast' 'Lunch' 'Dinner'

for (let mealName of Object.values(meals)) {
  console.log(mealName);
}
// 'Breakfast' 'Lunch' 'Dinner'

//////object entries destructure
for (let [key, value] of Object.entries(meals)) {
  console.log(key + ':' + value);
}
// 'mealA:Breakfast' 'mealB:Lunch' 'mealC:Dinner'

let greetings = {
  morning: 'Good morning',
  midday: 'Good day',
  evening: 'Good evening',
};
let greetingsMap = new Map(Object.entries(greetings));
greetingsMap.get('morning'); // => 'Good morning'
greetingsMap.get('midday'); // => 'Good day'
greetingsMap.get('evening'); // => 'Good evening'
// ...
[...greetingsMap.values()];
// => ['Good morning', 'Good day', 'Good evening']
[...greetingsMap.entries()];
// => [ ['morning', 'Good morning'], ['midday', 'Good day'],
//      ['evening', 'Good evening'] ]
