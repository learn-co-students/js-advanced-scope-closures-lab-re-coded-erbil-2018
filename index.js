function produceDrivingRange(blocks){
  function z(a,b){
    let c = parseInt(a.replace("th", "")) - parseInt(b.replace("th", ""));
     c = Math.abs(c)
     let t = Math.abs(c-blocks)
      if (c>blocks){
        return `${t} blocks out of range`
      }
      else {return `within range by ${t}`}
      }
  return z
}


function produceTipCalculator(x){
  function y(a){
    return a*x
  }
  return y
}
