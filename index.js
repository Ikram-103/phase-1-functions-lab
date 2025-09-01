// Returns distance from headquarters (42nd Street) in blocks
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(someValue - hq);
}

// Returns distance in feet (1 block = 264 feet)
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Returns distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Calculates fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // free for first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // flat fare
  } else {
    return 'cannot travel that far'; // over 2500 feet
  }
}

// Export functions so tests can find them
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

