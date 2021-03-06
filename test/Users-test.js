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
    expect(user.getUserData(8)).to.deep.equal({
      id: 8,
      name: "Zachery Abbott"
      });
  });

  it('should be able to add a new user, return new user info', function() {
    expect(user.addNewUser("Victor McPherson")).to.deep.equal({
      id: 31,
      name: "Victor McPherson"
      });
  });
});
