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
//     {name: "Jon", score: 100}, 
//     {name: "Chris", score: 100}, 
//     {name: "Alyssa", score: 150}
//   ], [] )
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
    expect(booking.getTotalBookingsDate("2019/09/01")).to.deep.equal([{userID: 9, date: "2019/09/01", roomNumber: 41}, {userID: 25, date: "2019/09/01", roomNumber: 44}]);
  });

  it('Should return date with most bookings', function () {
    expect(booking.getMostPopularBookingDate()).to.deep.equal("2019/09/01")
  })


//   it('should return a string with any punctuation removed', function() {
//     expect(round.evaluateTestGuess('St. Paul', 'St. Paul')).to.equal(true);
//     expect(round.evaluateTestGuess('St Paul', 'St. Paul')).to.equal(true);
//     expect(round.evaluateTestGuess('St Paul!', 'St. Paul')).to.equal(true);
//     expect(round.evaluateTestGuess('st paul', 'St. Paul')).to.equal(true);
//     expect(round.evaluateTestGuess('Saint Paul', 'St. Paul')).to.equal(false);
//   });

//   it('should update scores', function() {
//     round.updateScores(100);
//     expect(domUpdates.populatePlayerDashboard).to.have.been.called(4);
//   });


});
