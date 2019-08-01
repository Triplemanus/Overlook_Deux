// import domUpdates from './domUpdates.js';
import Bookings from '../src/Bookings';
//import bookingsData from '../data/BookingsData';

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

  totalRoomsAvailableDate(date, bookingsData) {
    let bookings = new Bookings(bookingsData);
    let totalBookings = bookings.getTotalBookingsDate(date);
    //console.log('roomRepo is ', this.data);
    let roomsAvailable = this.data.rooms.reduce((roomsAvail, room) => {
      roomsAvail ++;
      return roomsAvail;
    }, 0)
    return roomsAvailable - totalBookings.length;
  }

  allRoomsAvailableDate(date, totalBookingsDate) {    
    let roomsAvailable = this.data.rooms.reduce((roomsAvail, room) => {
      if(!totalBookingsDate.find(bookedRoom => bookedRoom.roomNumber === room.number)) roomsAvail.push(`Room: ${room.number} : ${room.roomType} : ${room.numBeds} : ${room.bedSize} : ${room.bidet}\n`); 

      return roomsAvail;
    }, []);
    console.log('roomsAvailableDate is', roomsAvailable);
    return roomsAvailable;
  }

  totalRoomsAvailable() {
    const roomsAvailable = this.data.rooms.reduce((roomsAvail, room) => {
      roomsAvail ++;
      return roomsAvail;
    }, 0)
    return roomsAvailable;
  }

  getPercentRoomsOccupied(date, bookingData) {
    return Number.parseFloat((1 - this.totalRoomsAvailableDate(date, bookingData) / this.totalRoomsAvailable()).toFixed(2));
  }

  getDateMostRoomsAvailable(bookingsData) {
    const mostRoomsAvailable = bookingsData.reduce((mostDate, date) => {
      
      return mostDate;
    },);
    return mostRoomsAvailable;
  }

  getRoomRevenueDate(date, bookingsData) {
    let bookings = new Bookings(bookingsData);
    let totalBookings = bookings.getTotalBookingsDate(date);
   // console.log('totlaBookins by date ', totalBookings);
    const roomsRevenue = this.data.rooms.reduce((roomsRev, room) => {
      totalBookings.forEach(element => {
        if(element.roomNumber === room.number) {
          roomsRev += room.costPerNight;
        }
      })
      return roomsRev;
    }, 0)
    return Number.parseFloat((roomsRevenue).toFixed(2));
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