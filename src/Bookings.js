class Bookings {
  constructor (bookingData) {
    this.data = bookingData.bookings;
    //this.customerID = 34;
    // this.userID = userID;
    // this.roomNumber = bookingData.roomNumber;
    // this.date = bookingData.date;
  }

  addRoomBooking(userID, date, roomNumber) {
    let newBooking = [{userID, date, roomNumber}];
    //let newBooking = [{userID: userID, date: date, roomNumber: roomNumber}];  
    this.data.push(newBooking);
    console.log('newBooking', newBooking);
    console.log('bookingData is', this.data[this.data.length - 1]);
      return newBooking
  }

  deleteRoomBooking() {

  }

  getTotalBookingsCustomer(customerID) {
//    console.log('this.data is ', this.data);
    let allCustomerBookings = this.data.filter(booking => {
//      console.log('customerID is', customerID, booking.userID);
      if(booking.userID === customerID) return booking;
    });
    return allCustomerBookings;
  }

  getTotalBookingsDate(date) {
    let allDateBookings = this.data.filter(booking => {
    //  console.log('date is ', date);
    //  console.log('booking.date', booking.date);
      if(booking.date === date) return booking;
    });
   // console.log('allDateBookings', allDateBookings  );
    return allDateBookings;
  }

  getMostPopularBookingDate() {
    const mostPopularBooking = this.data.reduce((mostBookings, booking) => {
      if(!mostBookings[booking.date]) {
        mostBookings[booking.date] = 1;
      } else {
        mostBookings[booking.date]++
      }
      //console.log('mostBookings is ', mostBookings);
      return mostBookings;
    }, {});
  
    const mostPopularBookingDate = Object.keys(mostPopularBooking).reduce((popularDate, booking) => {
    //  console.log('booking[date], popularDate is ', mostPopularBooking[booking], popularDate);
      if(mostPopularBooking[booking] > popularDate.count) {
   //     console.log('Its greater than!');
        popularDate.date = booking;
        popularDate.count = mostPopularBooking[booking];
      }
      return popularDate;
    }, {date: '2019/01/01', count: 0})
    return mostPopularBookingDate.date;
  }
  
  getDateMostRoomsAvailable(bookingData) {
    const mostRoomsAvailable = bookingData.bookings.reduce((mostDate, date) => {
      const bookingDate = this.getTotalBookingsDate(date.date);
        if(bookingDate.length < mostDate.count) {
          mostDate.date = date.date;
          mostDate.count = bookingDate.length;
        }
      return mostDate;
    }, {date: '2019/01/01', count: 1000});
    return mostRoomsAvailable.date;
  }
}

export default Bookings;