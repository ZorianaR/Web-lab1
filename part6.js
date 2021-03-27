function userSort(arr){
  for (let i = 0; i < arr.length; i++) {
    let k=i;
    while(k>0 && arr[k-1].name>arr[k].name){
      let tmp=arr[k];
      arr[k]=arr[k-1];
      arr[k-1]=tmp;
      k--;
    }
  }
  return arr;
}

obj1={
  name: 'Kate',
  surname: 'Middelton'
}
obj2={
  name: 'William',
  surname: 'Windsor',
  age: 33
}
obj3={
  name: 'Meghan',
  surname: 'Markle',
}
console.log(userSort([obj1 ,obj2, obj3]));
