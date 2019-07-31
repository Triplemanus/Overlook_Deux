import $ from 'jquery';
//import Game from '../src/Game';

let domUpdates = {
  updateUserData(user, userID) {
    if(!userID) userID = 1;
    $('#tab-user-info').text(user.getUserData(userID).name);
    $('.aside__fullname').text(user.getUserData(userID).name);
    //$('.aside__welcome-name').text(user.getUserData(user).name.split(' ')[0] );
  },

  createNewUser(user, userName) {
    let newUser = user.addNewUser(userName);
    console.log('newUser is ', newUser.name, newUser.id);
    return newUser;
  }
}

export default domUpdates;

