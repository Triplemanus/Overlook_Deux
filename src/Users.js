class User {
  constructor (usersData ) {
    this.data = usersData.users
  }

  addNewUser(userName) {
    let userIDs = this.data.map(users => users.id);
    this.data.push({id : (Number.parseInt(userIDs.pop())) + 1, name: userName});
    return this.data[this.data.length - 1];
  }

  getUserData(userID) {
    return this.data.find(user => user.id === userID);
  }
}

export default User;