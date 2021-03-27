function Random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(arr){
  for (let i = 0; i < 2*arr.length; i++) {
    let a=Random(0,arr.length);
    let b=Random(0,arr.length);
    let tmp=arr[a];
    arr[a]=arr[b];
    arr[b]=tmp;
  }
  return arr;
}

console.log(shuffle(['a','b','c','d','e']))
