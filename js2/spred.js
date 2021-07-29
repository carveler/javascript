const obj1 = {
  name: 'fred',
  age: 39,
};

const obj2 = obj1;

obj2.age = 55;

console.log(obj1, obj2);

const obj3 = { ...obj1, email: 'degrg@gmail.com' };
obj3.age = 44;

console.log(obj1, obj3);

const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];

console.log(arr2);

let lists = [
  { key1: 'value1', key2: 'value2' },
  { key1: 'value3', key2: undefined },
];

let copyLists = [...lists];

console.log('lists', lists, 'copyLists', copyLists);

// lists [
//   { key1: 'hoge', key2: 'value2' },
//   { key1: 'value3', key2: undefined }
// ]
// copyLists [
//   { key1: 'hoge', key2: 'value2' },
//   { key1: 'value3', key2: undefined }
// ]

const ori_arr = ['aaa', 'bbb'];
const new_arr = [...ori_arr];
ori_arr[1] = 'ccc'; //元の配列の値を変えても...

// 新しく作成した配列には反映されない！
console.log(ori_arr, new_arr); //["aaa","ccc"] ["aaa","bbb"]

const randomNumber = (min, max) => {
  Math.floor(Math.random() * (max - min + 1) + min);
};
///Math.random =   ０以上１未満

let strArr = ['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'];

function FindIntersection(strArr) {
  let a = strArr[0];
  let b = strArr[1];
  console.log(a, b);
  // code goes here
  let dub = [];
  for (let num of a) {
    for (let num2 of b)
      if (num === num2) {
        return dub.push(num);
      }
  }
  return dub;
}

console.log(FindIntersection(strArr));
