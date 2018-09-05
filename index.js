function produceDrivingRange(blockRange){
	return (a, b)=>{
		let dis = parseInt(b) - parseInt(a)
		let diff = dis - blockRange
            if(diff > 0 ){
                return `${diff} blocks out of range`
            }else{
            	let diff = blockRange - dis
            	return `within range by ${diff}`
            }
	}
}
function produceTipCalculator(percentage){
	return (fare)=>{
       return fare * percentage
	}
}

function createDriver(){
	let driverId = 0
	return class Driver{
		constructor(name){
           this.name = name;
           this.id = ++driverId
		}
	}
}