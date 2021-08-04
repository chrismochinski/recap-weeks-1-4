const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats (){
  console.log ( 'in enoughSeats' );
  // check if seatsInCar >= number of passengers
  if(seatsInCar >= passengers.length){
    return true;
  } // end enoughSeats
  else{
    return false;
  } // end not enough seats
} // end enoughSeats

function getInCar( nameOfPassenger ){
  console.log( 'in getInCar', nameOfPassenger );
  // push this new passenger into our passengers array
  passengers.push( nameOfPassenger );
  return passengers;
} //end getInCar

function readyForRoadTrip(){
  console.log( 'in readyForRoadTrip' );
  if (enoughSeats() && tankFull ){
    return true;
  } //end GOOD TO GO - got space and gas!
  else{
    return false;
  } //end NOT GOOD TO GO - not enough space or no gas!
} //END funcition readyForRoadTrip

getInCar( 'you' );
getInCar( 'dEv' );
getInCar( 'Commander Wisdom' );
getInCar( 'Anjie' );

console.log( 'enough seats?', enoughSeats() );

console.log( 'are we ready for the trip?', readyForRoadTrip() );
