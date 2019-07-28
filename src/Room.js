import domUpdates from './domUpdates.js';
import rooms from './data/testData.js';

class Room {
  constructor (number, roomType, bidet, bedSize, numBeds, costPerNight) {
    this.number = number;
    this.roomType = roomType
    this.hasBidet = bidet || false;
    this.bedSize = bedSize || 'Queen';
    this.numBeds = numBeds || 1;
    this.costPerNight = costPerNight;
  }

  getRoomInfo(roomNumber) {
    return this;
  }
  bookRoom(userID) {

  };

  upgradeRoom() {

  }

  totalRoomsAvailable() {

  }

  totalRoomsOccupied() {

  }

  fetchRoomData() {
    let roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    roomData = parsedData.data
    console.log('fetchRoomData');
      // console.log(roomData.rooms)
  })
  .catch(err => console.error(err));
  
  return roomData.rooms;
  }
}

export default Room;