class Bookings {
  constructor (bookingData) {
    this.data = bookingData.bookings;
    this.customerID = 34;
    // this.userID = userID;
    // this.roomNumber = bookingData.roomNumber;
    // this.date = bookingData.date;
  }

  addRoomBooking(bookingInfo) {
    

  }

  deleteRoomBooking() {

  }

  getTotalBookingsCustomer(customerID) {
    let allCustomerBookings = this.data.filter(booking => {
      if(booking.userID === customerID) return booking;
    });
    return allCustomerBookings;
  }

  getTotalBookingsDate(date) {
    let allDateBookings = this.data.filter(booking => {
      if(booking.date === date) return booking;
    });
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
   // const mpbKeys = Object.keys(mostPopularBooking);
   // console.log('mpbKeys is ', mpbKeys, mostPopularBooking);

    // let mostPopularBookingDate = {}
    // for (let [key, value] of Object.entries(mostPopularBooking)) {
    //   console.log(`${key}: ${value}`);
    //   console.log('key, value is', key, value)
    //   console.log(Object.values(mostPopularBookingDate))
    //   if(value > Object.values(mostPopularBookingDate)) {
    //     mostPopularBookingDate = mostPopularBooking;
    //     console.log('mostPopularBookingDate is ', mostPopularBookingDate);
    //   }

    // }
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