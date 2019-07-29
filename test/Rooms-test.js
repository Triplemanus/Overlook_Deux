import chai from 'chai';
const expect = chai.expect;


import Room from '../src/Room';
import spies from 'chai-spies';
import roomsData from "../data/RoomsData";

let room;

// chai.use(spies);

// chai.spy.on(domUpdates, ['updateQuestionDisplay'], () => {});


  beforeEach(() => {
    room = new Room(roomsData);

 });

describe('Room', function() {

  it('should be a function', function() {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', function() {
    expect(room).to.be.an.instanceof(Room);
  });

  it('should return all room info for a given room', function () {
    
    expect(room.getRoomInfo(4)).to.deep.equal({number: 4, roomType: "junior suite", bidet: false, bedSize: "full", numBeds: 1, costPerNight: 177.03});
  });

  it('should return booked status for a room', function() {
    expect(room.getBookedStatus(34)).to.equal(false);
    expect(room.setRoomStatus(34)).to.equal(true);
    expect(room.getBookedStatus(34)).to.equal(true);
  });

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
