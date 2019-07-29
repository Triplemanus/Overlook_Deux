import chai from 'chai';
const expect = chai.expect;


import RoomRepo from '../src/RoomRepo';
import spies from 'chai-spies';
import roomsData from "../data/RoomsData";

let roomRepo;

// chai.use(spies);

// chai.spy.on(domUpdates, ['updateQuestionDisplay'], () => {});


  beforeEach(() => {
    roomRepo = new RoomRepo(roomsData);

 });

describe('RoomRepo', function() {

  it('should return all rooms in hotel', function() {
    expect(roomRepo.totalRoomsAvailable()).to.equal(15);
  })
  it('should return all available rooms for a given date', function () {
    expect(roomRepo.totalRoomsAvailableDate("2019/10/19")).to.equal(14);
  });

  it('should return all revenue for a given date', function() {
    expect(roomRepo.getAllRevenueDate()).to.equal(350.34);
  });

  it('should return percentage of rooms occupied for a given date', function() {
    expect(roomRepo.getPercentRoomsOccupied('2019/10/19')).to.equal(.07);
  });

 

});
