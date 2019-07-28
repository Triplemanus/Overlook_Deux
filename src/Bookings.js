class Bookings {
  constructor (bookingData) {
    this.data = bookingData;
    this.customerID = 4;
    // this.userID = userID;
    // this.roomNumber = bookingData.roomNumber;
    // this.date = bookingData.date;
  }

  addRoomBooking() {

  }

  deleteRoomBooking() {

  }

  getTotalBookings(customerID) {
    
    let allBookings = this.data.bookings.filter(booking => {
      if(booking.userID === customerID) return booking;
    });
    console.log('allBookings is', allBookings);
    return allBookings;
  }
  //   let someThing =  totalBookings.map(bookings => {
  //     console.log('bookings userID is: ', bookings.userID);
  //    //  if (bookings.userID === 4) return bookings;
  //  // return totalBookings[0];
  //   });
  //   console.log('something is: ', someThing);
  //   return someThing;
}

export default Bookings;