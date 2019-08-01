import chai from 'chai';
const expect = chai.expect;


import UsersRepo from '../src/UsersRepo';
import spies from 'chai-spies';
import usersData from "../data/UsersData";
import domUpdates from '../src/domUpdates';

let user;

chai.use(spies);

chai.spy.on(domUpdates, ['updateUserData'], () => {});

  beforeEach(() => {
    user = new UsersRepo(usersData);

 });

describe('UsersRepo', function() {

  it('should return all user info for application', function() {
    expect(user.getAllUserData(8)).to.deep.equal([
      {
      id: 1,
      name: "Matilde Larson"
      },
      {
      id: 2,
      name: "Chadrick Lowe"
      },
      {
      id: 3,
      name: "Christian Sporer"
      },
      {
      id: 4,
      name: "Brook Christiansen"
      },
      {
        id: 5,
        name: "Noemy Little"
      },
      {
        id: 5,
        name: "Victor McPherson"
      }
      ]);
  });

  it.skip('should be able to add a new user, return new user info', function() {
    expect(user.addNewUser("Victor McPherson")).to.deep.equal({
      id: 5,
      name: "Victor McPherson"
      });
      expect(domUpdates.updateUserData).to.have.been.called(1);
  });
});
