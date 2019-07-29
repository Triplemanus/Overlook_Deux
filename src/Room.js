// import domUpdates from './domUpdates.js';
// import RoomsData from './data/RoomsData.js';

class Room {
  constructor (roomData) {
       this.data = roomData,
       this.isBooked = false
    // this.number = number;
    // this.roomType = roomType
    // this.hasBidet = bidet || false;
    // this.bedSize = bedSize || 'Queen';
    // this.numBeds = numBeds || 1;
    // this.costPerNight = costPerNight;
  }

  getRoomInfo(roomNumber) {
    return this.data.rooms.find(rooms => rooms.number === roomNumber);
  }
  bookRoom(userID) {

  };

  upgradeRoom() {

  }

  totalRoomsAvailable() {

  }

  totalRoomsOccupied() {

  }

  getBookedStatus(roomNum) {
    return this.isBooked;
  }

  setRoomStatus(roomNum) {
    return this.isBooked = true;
  }
  fetchRoomData() {
    let roomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
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