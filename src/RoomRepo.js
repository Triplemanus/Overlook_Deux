// import domUpdates from './domUpdates.js';
import Bookings from '../src/Bookings';
import bookingsData from '../data/BookingsData';

class RoomRepo {
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

  upgradeRoom() {

  }

  totalRoomsAvailableDate(date) {
    let bookings = new Bookings(bookingsData);
    let totalBookings = bookings.getTotalBookingsDate(date);
    let roomsAvailable = this.data.rooms.reduce((roomsAvail, room) => {
      roomsAvail ++;
      return roomsAvail;
    }, 0)
    return roomsAvailable - totalBookings.length;
  }

  totalRoomsAvailable() {
    const roomsAvailable = this.data.rooms.reduce((roomsAvail, room) => {
      roomsAvail ++;
      return roomsAvail;
    }, 0)
    return roomsAvailable;
  }

  getPercentRoomsOccupied(date) {
    return Number.parseFloat((1 - this.totalRoomsAvailableDate(date) / this.totalRoomsAvailable()).toFixed(2));
  }

  getRoomRevenueDate(date) {
    const roomsRevenue = this.data.rooms.reduce((roomsRev, room) => {
      roomsRev ++;
      return roomsRev;
    }, 0)
    return roomsRevenue;
  }
  getAllRevenueDate(){

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
  
  })
  .catch(err => console.error(err));
  
  return roomData.rooms;
  }
}

export default RoomRepo;