const headquarters = 42;
const feet = 264;
function distanceFromHqInBlocks (destination){
    if (destination > 42){
    return destination - headquarters;}
    else if (destination < 42){
    return headquarters - destination;
    }
}
function distanceFromHqInFeet (destination){
    return distanceFromHqInBlocks(destination) * feet;
}
function distanceTravelledInFeet (destination){
    return distanceFromHqInBlocks(destination) ;
}
function distanceTravelledInFeet(headquarters, destination) {
    
    if (destination >= 42){
        return (destination - headquarters) * feet;
    }
    else if (destination < 42){
        return (headquarters - destination) * feet;
        }
  }
  
  function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400) {
      return 0;
    } 
    else if (distanceTravelled >= 401 && distanceTravelled <= 2000) {
      return ((distanceTravelled - 400) * .02);
    }
    else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      return 25;
    }
    else if (distanceTravelled > 2500) {
      return 'cannot travel that far';
    }
  }

