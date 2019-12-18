let options = {
  name: "test",
  width: 1024,
  height: 1024
}

options.bool = false;
options.colors = {
  border: "black",
  background: "red"
}

delete options.bool

for (let key in options) {
  console.log('Свойство ' + key + " имеет значение " + options[key])
}

console.log(Object.keys(options).length);




let arr = [1,2,3,4,5]

arr.pop();

arr.push(6);

arr.shift();

arr.unshift(0);

for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

arr.forEach(function(item, i, arr) {
  console.log(i+ ": " + item + "(массив: " + arr + ")");
})

console.log(arr)