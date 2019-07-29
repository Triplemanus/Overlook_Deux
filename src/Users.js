class User {
  constructor (usersData ) {
    this.data = usersData.users
  }

  addNewUser(userName) {
    let userIDs = this.data.map(users => users.id);
    return {id : (Number.parseInt(userIDs.pop())) + 1, name: userName}
  }

  getUserData(userID) {
    return this.data.find(user => user.id === userID);
  }
}

export default User;