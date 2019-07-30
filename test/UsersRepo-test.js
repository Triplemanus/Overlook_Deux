import chai from 'chai';
const expect = chai.expect;


import UsersRepo from '../src/UsersRepo';
import spies from 'chai-spies';
import userData from "../data/UsersData";

let user;

  beforeEach(() => {
    user = new UsersRepo(userData);

 });

describe('UsersRepo', function() {

  it('should return all user info for appliocation', function() {
    expect(user.getAllUserData(8)).to.deep.equal([{
      id: 8,
      name: "Zachery Abbott"
      }]);
  });

  it.skip('should be able to add a new user, return new user info', function() {
    expect(user.addNewUser("Victor McPherson")).to.deep.equal({
      id: 31,
      name: "Victor McPherson"
      });
  });
});
