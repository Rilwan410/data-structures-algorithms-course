class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /* Set Pseudocode 
  - Accepts a key and a value
  - Hashes the key
  - Stores the key-value pair in the hash table array via separate chaining
*/
  // My solution // passed //
  set(key, value) {
    let hashedKey = this._hash(key);
    if (this.keyMap[hashedKey] === undefined) {
      this.keyMap[hashedKey] = [];
      this.keyMap[hashedKey].push([key, value]);
    } else {
      this.keyMap[hashedKey].push([key, value]);
    }
  }

  /* Get Pseudocode 
- Accepts a key and a value
- Hashes the key
- Retrieves the value
- If key isn't found, returns undefined
*/
  // My solution // passed //
  get(key) {
    let hashedKey = this._hash(key);
    if (this.keyMap[hashedKey]?.length) {
      return this.keyMap[hashedKey].find((bin) => bin[0] === key)[1];
    }
    return undefined;
  }

  // Loops through the hash table array and returns an array of the keys in the table
  // My solution - passed //
  keys() {
    let keys = [];
    this.keyMap.forEach((val, index) => {
      val.forEach((key) => {
        keys.push(key[0]);
      });
    });
    return keys;
  }

  // Loops through the hash table array and returns an array of the values in the table
  // My solution - passed //
  values() {
      let values = [];
      this.keyMap.forEach((val, index) => {
          val.forEach((key) => {
              if (!values.includes(key[1])) values.push(key[1]);
            });
        });
    return values;
  }
}

let hTable = new HashTable();
hTable.set("orange", "#f2039f");
hTable.set("hello world", "goodbye");
hTable.set("asfa", "fdasf");
hTable.set("adsfasfr", "rhjwer");
hTable.set("peepee", "caca");
hTable.set("dodo", "caca");
hTable.set("rilean", "asdf");
hTable.set("toothpaste", "clorox");
hTable.set("printer paper", "catscratch");
console.log(hTable.values());
