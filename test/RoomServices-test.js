import chai from 'chai';
const expect = chai.expect;

import RoomServices from '../src/RoomServices';
import spies from 'chai-spies';
import roomServicesData from "../data/RoomServicesData";

let roomServices;

  beforeEach(() => {
    roomServices = new RoomServices(roomServicesData);
 });

describe('RoomServices', function() {
  it('should return all room service revenue for a given date', function() {
    expect(Number.parseFloat(roomServices.getTotalRoomServiceRevenueDate("2019/10/19"))).to.equal(37.64);
  })
  it('should return all room services for a given date', function () {
    expect(roomServices.getTotalRoomServicesDate("2019/10/19")).to.deep.equal([{
      userID: 100,
      date: "2019/10/19",
      food: "Rustic Cotton Sandwich",
      totalCost: 17.33
      }, {
      userID: 55,
      date: "2019/10/19",
      food: "Unbranded Wooden Sandwich",
      totalCost: 7.95
      },
      {userID: 13,
      date: "2019/10/19",
      food: "Handcrafted Metal Sandwich",
      totalCost: 12.36
      }]);
  });

  it('should return all revenue for a given user, date', function() {
    expect(roomServices.getUserRoomServiceChargesDate(55, '2019/10/17')).to.equal(22.95);
  });

  it('should return all revenue for a given user', function() {
    expect(roomServices.getUserRoomServiceChargesAllTime(55)).to.equal(30.90);
  });

  it('should return roomservice charges for all time, by date for a given user', function() {
    expect(roomServices.getUserRoomServiceDataAllTime(100)).to.deep.equal([["2019/10/19", 17.33]]);
  });

});
