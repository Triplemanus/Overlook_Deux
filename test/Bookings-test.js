import chai from 'chai';
const expect = chai.expect;


import Bookings from '../src/Bookings';
import spies from 'chai-spies';
import bookingsData from "../data/BookingsData";

let booking;

// chai.use(spies);

// chai.spy.on(domUpdates, ['updateQuestionDisplay'], () => {});


  beforeEach(() => {
    booking = new Bookings(bookingsData);

 });

describe('Booking', function() {

  it('should be a function', function() {
    expect(Bookings).to.be.a('function');
  });

  it('should be an instance of Bookings', function() {
    expect(booking).to.be.an.instanceof(Bookings);
  });

  it('should return all bookings for a given customer', function () {
    
    expect(booking.getTotalBookingsCustomer(34)).to.deep.equal([{userID: 34, date: "2019/09/05", roomNumber: 26}]);
  })
  it('should return all bookings for a given day', function() {
    expect(booking.getTotalBookingsDate("2019/09/01")).to.deep.equal([{userID: 9, date: "2019/09/01", roomNumber: 41}, {userID: 25, date: "2019/09/01", roomNumber: 44}, {
      userID: 97,
      date: "2019/09/01",
      roomNumber: 14
      }]);
  });
  it.skip('should return all bookings for a given day', function() {
    expect(booking.getTotalBookingsDate("2019/09/01")).to.deep.equal([{userID: 9, date: "2019/09/01", roomNumber: 41}, {userID: 25, date: "2019/09/01", roomNumber: 44}]);
  });

  it('Should return date with most bookings', function () {
    expect(booking.getMostPopularBookingDate()).to.deep.equal("2019/07/25")
  });

  it('Should be able to book a room', function () {
    expect(booking.addRoomBooking(22, "2019/07/25", 14)).to.deep.equal([{userID: 22, date: "2019/07/25", roomNumber: 14}]);
  });

});
