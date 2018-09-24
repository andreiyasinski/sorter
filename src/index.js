class Sorter {
  constructor() {
    this.arr = [];
    this.defaultComp = (a,b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {

    var tempArray = [];

    indices.sort();

    for( let i = 0; i < indices.length; i++ ) {
      tempArray.push(this.arr[indices[i]]);
    }

    tempArray.sort(this.defaultComp);

    for ( let i = 0; i < indices.length; i++ ){
      this.arr[indices[i]] = tempArray[i];
    }

  }

  setComparator(compareFunction) {

    this.defaultComp = compareFunction;
    //this.arr.sort(this.defaultComp);
  }
}

module.exports = Sorter;
