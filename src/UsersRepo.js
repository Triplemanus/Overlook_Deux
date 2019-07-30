class UserRepo {
  constructor (usersData ) {
    this.data = usersData.users
  }

 

  getAllUserData() {
    return this.data.find(user => user);
  }
}

export default UserRepo;