const change = (arr, indexA, indexB) => {
  const temp = arr[indexA]
  arr[indexA] = arr[indexB]
  arr[indexB] = temp
}

const RandomizedSet = function() {
  this.map = {}
  this.arr = []
}

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  const index = this.map[val]
  if(index !== undefined) {
      return false
  }
  this.arr.push(val)
  this.map[val] = this.arr.length - 1
  return true    
}

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  const index = this.map[val]
  if(index !== undefined) {
      if(index !== (this.arr.length -1)) {
          this.map[this.arr[this.arr.length -1]] = index
          change(this.arr, index, this.arr.length -1)
      }
      delete this.map[val]
      this.arr.pop()
      return true
  }
  return false
}

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.arr.length)
  return this.arr[randomIndex]
}

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/