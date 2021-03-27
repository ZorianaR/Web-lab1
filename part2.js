function stringSort(str){
  let N=str.length;
  let array=str.split('');
  for(let top=1; top<N;top++){
    let k=top;
    while(k>0 && array[k-1]>array[k]){
      let tmp=array[k];
      array[k]=array[k-1];
      array[k-1]=tmp;
      k--;
    }
  }
  return array.join('');
}

console.log(stringSort('gbeafdc'));
