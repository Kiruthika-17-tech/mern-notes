var p=6000
var t
var d
if(p<5000){
    t=p
}
else if(p>=5000 && p<10000){
  d=10%p
  t=p-d
}
else if(p>=10000 && p<25000){
    d=p%15
    t=p-d
}
else if(p>=25000 && p<50000){
    d=p%20
    t=p-d
}
else{
    d=p%30
    t=p-d
}
console.log(t)