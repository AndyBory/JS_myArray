/*

Добавить к имеющимуся классу MyArray следующие методы, имитирующие поведения реальных методов массива:
unshift
shift
Bonus task:
Добавить один из следующих методов:
forEach
map
filter
reverse

*/

class MyArray {
  constructor() {
    this.length = 0;
  }

  push(...elems) {
    // добавить элементы в конец массива
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    //  возвращает новую длину массива
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const deletedValue = this[this.length - 1];
    delete this[--this.length];
    return deletedValue;
  }

  unshift(...items) {
    for (let i = this.length + items.length - 1; i > 0; i--) {
      this[i] = this[i - items.length];
    }
    for (let i = 0; i < items.length; i++) {
      this[i] = items[i];
      this.length ++;
    }
    return this.length;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const deletedValue = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i-1] = this[i];
    }
    delete this[--this.length-1];
    return deletedValue;
  }

  foreach(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('foreach("must be a function")');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  
  map(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('map("must be a function")');
    }
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const elem = callback(this[i], i, this);
      newArray.push(elem);
    }
    return newArray;
  }

  filter(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('filter("must be a function")');
    }
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }

  reverse() {
    for (let i = 0; i < this.length / 2; i++) {
      const arrTemp = this[i];
      this[i] = this[this.length - i - 1];
      this[this.length - i - 1] = arrTemp;
    }
  }
}
const arr = new MyArray();
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
console.log(roots);

arr.push(1, 2, 5, 7, 9, 12, 15, 19, 20, 22, 25);
arr.unshift(35, 36, 37);

console.log(arr);

