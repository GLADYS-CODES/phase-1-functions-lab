 function distanceFromHqInBlocks (pickUp){
     let Hq = 42;
     let distance;
     if(Hq>pickUp){
         distance = Hq - pickUp;
     }else{
         distance = pickUp - Hq;
     }
     return distance;
 }


function distanceFromHqInFeet (pickUp){
    let Hq = 42;
    let distance;
    if(Hq>pickUp){
        distance = Hq-pickUp;
    }else{
        distance = pickUp-Hq;
    }
    return distance *264;
}

function distanceTravelledInFeet (pickUp, destination){
    const location = 264;
    return pickUp > destination ? (pickUp - destination)*location:(destination - pickUp)*location;
}

function calculatesFarePrice(start, destination){
    let charges;
    let distance = distanceTravelledInFeet(start, destination)
    if(distance <=400){
        charges = 0
        return charges
    }else if(distance > 400 && distance <= 2000){
        charges = (distance - 400)*2/100
        return charges
    }else if(distance > 2000 && distance <=2500){
        charges = 25
        return charges
    }else {
        return 'cannot travel that far'
    }
}

    
