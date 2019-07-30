import $ from 'jquery';
//import Game from '../src/Game';

let domUpdates = {

  updateUserData(user, userID) {
    if(!userID) userID = 1;
    $('#tab-user-info').text(user.getUserData(userID).name);
    $('.aside__fullname').text(user.getUserData(userID).name);
    //$('.aside__welcome-name').text(user.getUserData(user).name.split(' ')[0] );
  },

 
}

export default domUpdates;

