function getPair(arr) {
  const pairStrings = arr.filter((element) => element.length % 2 === 0);
  pairStrings.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
  // щоб додати інші мови, треба передати параметер в localeCompare
  // .localeCompare(b, 'uk', { sensitivity: 'base' } дозволить додати українську мову
  // і так далі

  return pairStrings;
}

const strings = ["Apple", "Banana", "Cherry", "Orange"];
const result = getPair(strings);
console.log(result);
