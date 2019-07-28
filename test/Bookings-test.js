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

  })
  // it('should start with no clues', function() {
  //   expect(round.currentClue).to.equal(null)
  // });

  // it('should be able to begin the turn', function() {
  //   round.beginTurn();
  //   expect(round.turnTracker).to.equal(1);
  // });


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
