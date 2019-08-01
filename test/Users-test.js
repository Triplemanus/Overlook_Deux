import chai from 'chai';
const expect = chai.expect;


import Users from '../src/Users';
import spies from 'chai-spies';
import userData from "../data/UsersData";

let user;

  beforeEach(() => {
    user = new Users(userData);

 });

describe('Users', function() {

  it('should return all user info for a given user', function() {
    expect(user.getUserData(2)).to.deep.equal({
      id: 2,
      name: "Chadrick Lowe"
      });
  });

  it('should be able to add a new user, return new user info', function() {
    expect(user.addNewUser("Victor McPherson")).to.deep.equal({
      id: 5,
      name: "Victor McPherson"
      });
  });
});
