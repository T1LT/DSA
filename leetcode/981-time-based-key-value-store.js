var TimeMap = function() {
  this.map = {};
};

/** 
  * @param {string} key 
  * @param {string} value 
  * @param {number} timestamp
  * @return {void}
  */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map[key]) this.map[key] = [];
  this.map[key].push([value, timestamp]);
  return null;
};

/** 
  * @param {string} key 
  * @param {number} timestamp
  * @return {string}
  */
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.map[key]) return "";

  const values = this.map[key];
  let low = 0;
  let high = values.length - 1;
  let res = "";

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (values[mid][1] <= timestamp) {
      res = values[mid][0];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return res;
};

/** 
  * Your TimeMap object will be instantiated and called as such:
  * var obj = new TimeMap()
  * obj.set(key,value,timestamp)
  * var param_2 = obj.get(key,timestamp)
  */
