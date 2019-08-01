import chai from 'chai';
const expect = chai.expect;


import RoomRepo from '../src/RoomRepo';
import spies from 'chai-spies';
import roomsData from "../data/RoomsData";
import domUpdates from '../src/domUpdates';
import Bookings from '../src/Bookings';
import bookingsData from '../data/BookingsData';

let roomRepo;
let bookings;

 //chai.use(spies);

 //chai.spy.on(domUpdates, ['updateUserData'], () => {});


  beforeEach(() => {
    roomRepo = new RoomRepo(roomsData);
    bookings = new Bookings(bookingsData);


 });

describe('RoomRepo', function() {

  it('should return all rooms in hotel', function() {
    expect(roomRepo.totalRoomsAvailable()).to.equal(15);
  })
  it('should return all available rooms for a given date', function () {
    expect(roomRepo.totalRoomsAvailableDate("2019/10/19", bookings)).to.equal(14);
  });

  it.skip('should return all revenue for a given date', function() {
    expect(roomRepo.getAllRevenueDate()).to.equal(350.34);
  });

  it('should return percentage of rooms occupied for a given date', function() {
    expect(roomRepo.getPercentRoomsOccupied('2019/10/19', bookings)).to.equal(.07);
  });

  it('should return all rooms available for  given date', function() {
    const booking = bookings.getTotalBookingsDate('2019/08/01 ');
    expect(roomRepo.allRoomsAvailableDate('2019/08/01', booking)).to.deep.equal([ 'Room: 1 : residential suite : 1 : twin : false\n',
    'Room: 2 : single room : 1 : full : true\n',
    'Room: 3 : suite : 1 : twin : false\n',
    'Room: 4 : junior suite : 1 : full : false\n',
    'Room: 5 : junior suite : 2 : king : false\n',
    'Room: 6 : suite : 1 : king : false\n',
    'Room: 7 : residential suite : 2 : full : false\n',
    'Room: 8 : suite : 1 : full : false\n',
    'Room: 9 : residential suite : 1 : twin : true\n',
    'Room: 10 : single room : 2 : queen : false\n',
    'Room: 11 : single room : 1 : queen : true\n',
    'Room: 12 : single room : 1 : queen : false\n',
    'Room: 13 : residential suite : 1 : full : false\n',
    'Room: 14 : junior suite : 2 : twin : false\n',
    'Room: 15 : suite : 1 : king : false\n' ]);
  });

});
