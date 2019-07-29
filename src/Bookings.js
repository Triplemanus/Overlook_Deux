class Bookings {
  constructor (bookingData) {
    this.data = bookingData;
    this.customerID = 34;
    // this.userID = userID;
    // this.roomNumber = bookingData.roomNumber;
    // this.date = bookingData.date;
  }

  addRoomBooking() {

  }

  deleteRoomBooking() {

  }

  getTotalBookingsCustomer(customerID) {
    let allCustomerBookings = this.data.bookings.filter(booking => {
      if(booking.userID === customerID) return booking;
    });
    return allCustomerBookings;
  }

  getTotalBookingsDate(date) {
    let allDateBookings = this.data.bookings.filter(booking => {
      if(booking.date === date) return booking;
    });
    return allDateBookings;
  }

  getMostPopularBookingDate() {
    const mostPopularBooking = bookings.reduce((mostBookings, booking) => {
      if(!booking.date) {
        mostBookings.date = 1;
      } else {
        mostBookings.date ++
      }
      return mostBookings;
    }, {});
    return mostPopularBooking;
  }
  
}

export default Bookings;