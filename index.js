function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42; 
    return Math.abs(pickupLocation - headquarters); 
}
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}
function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
  }
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    const feetTravelled = blocksTravelled * 264;
    return feetTravelled;
  }
  function calculatesFarePrice(startBlock, destinationBlock) {
    const feetTravelled = Math.abs(destinationBlock - startBlock) * 264;
    if (feetTravelled > 2500) {
        return "not allowed";
      }
      if (feetTravelled <= 400) {
        return 0;
      }
      else if (feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
      }
      {
        return 25;
      }
    }