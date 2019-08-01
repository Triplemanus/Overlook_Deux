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
  },

  updateDailyRoomServices(date, data, roomServices) {
    const dailyRoomService = roomServices.getTotalRoomServicesDate(date, data);
    dailyRoomService.forEach(element => {
      const rsDate = element.date;
      const rsFood = element.food;
      const rsTotalCoat = (parseFloat(element.totalCost)).toFixed(2) + ' \n';
      $('#room-service-orders').append(`Food:  ${rsFood}    Cost: ${rsTotalCoat.replace("\n", "<br>")}`);
    });  
  },

  getUserRoomServiceDataDate(userId, date, roomServices, userName)  {
    $('#room-service-orders-user').html(' ');
    $('.room-service-orders-initial').hide();
    $('#rs-order-date').html(userName);
    const dailyRoomServiceUser = roomServices.getUserRoomServiceDataDate(userId, date);
    console.log('dailyRoomServicesUser are', dailyRoomServiceUser);
    dailyRoomServiceUser.forEach(element => {
      const rsDate = element[0];
      const rsFood = element[1];
      const rsTotalCoat = (parseFloat(element[2])).toFixed(2) + ' \n';
      $('#room-service-orders-user').append(`Food:  ${rsFood}    Cost: ${rsTotalCoat.replace("\n", "<br>")}`);
      console.log('roomservicefood', rsFood);
    });
  },

  updateRoomsAvailableDate(roomsAvailable) {
   
    roomsAvailable.forEach(room => {
      const raNumber = room.number;
      const raRoomType = room.roomType;
      const raRoomBeds = room.numBeds;
      const raRoomBedSize = room.bedSize;
      const raRoomDisplay = '';
      $('#available-rooms-date').append(room.replace("\n", "<br>"));
     // $('#available-rooms-date').append(`Room:  ${raNumber}    Type: ${raRoomType}`);/*.replace("\n", "<br>");*/
    })
   
    //   const rsTotalCoat = (parseFloat(element.totalCost)).toFixed(2) + ' \n';
    //   $('#room-service-orders').append(`Food:  ${rsFood}    Cost: ${rsTotalCoat.replace("\n", "<br>")}`);
    
  },


  
}

export default domUpdates;

