function getDays(year,month){
  month--;
  if (month==0){
    month=12
    year--;
  }
  return 32 - new Date(year, month, 32).getDate();
}

console.log(getDays(2020,1))
console.log(getDays(2020,2))
console.log(getDays(2020,12))
