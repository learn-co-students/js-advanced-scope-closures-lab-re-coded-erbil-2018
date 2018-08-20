function produceDrivingRange(blockRange){
  return function(trip,two){
    let me = parseInt(trip) + parseInt(blockRange);
    let u = parseInt(two);
    let us = me -u;
    
     if(me > u){
       return `within range by ${me-u}`;
     }else{
       return `${u-me} blocks out of range`;
     }
  }
}

function produceTipCalculator(percent){
  return function(tip){
    return percent * tip;
  }
}