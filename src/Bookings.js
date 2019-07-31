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
    const mpbKeys = Object.keys(mostPopularBooking);
   // console.log('mpbKeys is ', mpbKeys);

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
    const mostPopularBookingDate = Object.keys(mostPopularBooking).reduce((popDate, booking) => {
      console.log('booking[date], popDate is ', mostPopularBooking[booking], popDate.date);
      if(mostPopularBooking[booking] > popDate.date) {
        console.log('Its greater than!');
        popDate = booking, mostPopularBooking[booking];
      }
      return popDate;
    }, {date: 0})
    return mostPopularBookingDate;
  }
  
}

export default Bookings;