class UsersRepo {
  constructor (usersData ) {
    this.data = usersData.users
  }

  searchUsersRealtime(subUserString){
    let users = this.getAllUserData(); 
    let selectedUsers = users.filter(user => user.name.toLowerCase().includes(subUserString.toLowerCase()));
    console.log('selectedUser is', selectedUsers);
   return selectedUsers;
  }

  getAllUserData() {
    console.log('usersData is ', this.data);
    return this.data.filter(user => user);
  }
}

export default UsersRepo;