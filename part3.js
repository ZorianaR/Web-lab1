function gdc(a,b){
  return(b==0? a:gdc(b,a%b))
}


console.log(gdc(15,10))
console.log(gdc(111,555))
