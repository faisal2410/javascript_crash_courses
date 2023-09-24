// Write Javascript code!
const output = document.getElementById('output');

function incrArr(arr, n) {
  let result = [];

  for (const elem of arr) {
    result.push(elem + n);
  }

  return result;
}
const nums=[1,2,3];
const testResult=incrArr(nums,3)
console.log(testResult);
function decrArr(arr, n) {
  let result = [];

  for (const elem of arr) {
    result.push(elem - n);
  }

  return result;
}

const data = [12, 3, 50];

function incr(num, pad) {
  return num + pad;
}

function decr(num, pad) {
  return num - pad;
}

function mul(num, pad) {
  return num * pad;
}

// HOF
function smartOperation(data, op, pad) {
  pad = isNaN(pad) ? 0 : pad;
  let result = [];
  for (const elem of data) {
    result.push(op(elem, pad));
  }
  return result;
}

const result = smartOperation(data, mul, 3);
output.innerHTML = result;


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const mapped = data.map(function (elem, index) {
  return elem + 1;
});

output.innerHTML = mapped;




Array.prototype.faisalMap = function (callback) {
  let result = [];
  for (let count = 0; count < this.length; count++) {
    result.push(callback(this[count], count, this));
  }
  return result;
};

const faisalMapped = data.faisalMap(function (elem, index) {
  return elem + 5;
});

output.innerHTML = faisalMapped;
