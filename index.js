function distanceFromHqInBlocks(block) {
  if(block >= 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

// 264

function distanceFromHqInFeet(block) {
    distanceFromHqInBlocks(block);
    return distanceFromHqInBlocks(block) * 264
}


function distanceTravelledInFeet(start, destination) {
    return (destination >= start ? destination - start : start - destination) * 264
}


function calculatesFarePrice(start, destination) {
    if( distanceTravelledInFeet(start, destination) <= 400) {
       return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
       return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
       return 25
    } else {
       return 'cannot travel that far'
    }
}

calculatesFarePrice(34, 24);