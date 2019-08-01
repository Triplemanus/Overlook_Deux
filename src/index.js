// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


import './css/base.scss';
import Bookings from './Bookings';
import Room from './Room';
import RoomRepo from './RoomRepo'
import domUpdates from './domUpdates.js';
import RoomServices from './RoomServices';
import User from './Users';
import UsersRepo from './UsersRepo';

var roomData;
var bookingData;
var roomServiceData;
var userData;
var dateToday = "2019/08/01"; //For testing only

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(response => response.json())
  .then(parsedData => getBookingsData(parsedData))
  .catch(err => console.error(err));

  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json())
  .then(parsedData => getUsersData(parsedData))
  .catch(err => console.error(err));

  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(response => response.json())
  .then(parsedData => getRoomsData(parsedData))
  .catch(err => console.error(err));

  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
  .then(response => response.json())
  .then(parsedData => getRoomServicesData(parsedData))
  .catch(err => console.error(err));

  function getUsersData(users) {
   userData = users;
    console.log(users);
  };

  function getBookingsData(bData) {
    bookingData = bData;
  };

  function getRoomsData(rooms) {
    console.log(rooms);
    roomData = rooms;
  };

  function getRoomServicesData(rsData) {
    roomServiceData = rsData;
  };
 

  $(document).ready(function() {

    $('.tabs .tab-links a').on('click', function(e) {
      var currentAttrValue = $(this).attr('href');
     
      // Show/Hide Tabs
      $('.tabs ' + currentAttrValue).show().siblings().hide();
  
      // Change/remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');
      const roomRepo = new RoomRepo(roomData);
      const roomServices = new RoomServices(roomServiceData);
      const user = new User(userData);
      const userRepo = new UsersRepo(userData);
      const bookings = new Bookings(bookingData)
    
      $('.steps-container').delay(1000).show();

      /*----Home----*/
      $('#rooms-available').text(roomRepo.totalRoomsAvailableDate(dateToday, bookingData));
      $('#total-revenue').text(Number.parseFloat(roomRepo.getRoomRevenueDate(dateToday, bookingData) + roomServices.getTotalRoomServiceRevenueDate(dateToday)).toFixed(2));
      $('#percent-occupied').text((roomRepo.getPercentRoomsOccupied(dateToday, bookingData)) * 100);
      e.preventDefault();
      //domUpdates.updateUserData(user);

      /*-----Rooms------*/
      if(currentAttrValue === '#tab2'){
       // console.log('tab2 Active!', $('#tab2'));
        $('#most-popular-date').text(bookings.getMostPopularBookingDate());
        $('#most-rooms-available').text(bookings.getDateMostRoomsAvailable(bookingData));
      } else {
      $('#most-popular-date').html(' ');
      };

      $('#search-rooms-date').keyup((e) => {
        if(e.keyCode == 13)
          {
            let totalBookingsDate = bookings.getTotalBookingsDate(dateToday);
            let roomSearchDate =  roomRepo.allRoomsAvailableDate($('#search-rooms-date').val(), totalBookingsDate);
            $('#search-rooms-date').text  (' ');
            domUpdates.updateRoomsAvailableDate(roomSearchDate);
            
           // $('#available-rooms-date').text(roomSearchDate);
          }
      });

      let activeUser;
        /*----Orders----*/
      if(currentAttrValue === '#tab3' && !activeUser){
        console.log('activeUser', activeUser);
        $('#room-service-orders').html(' ');
        domUpdates.updateDailyRoomServices(dateToday, roomServiceData, roomServices);
      } else {
        if(activeUser) {

        }
        $('#room-service-orders').html(' ');
      }
      console.log($('.tabs ' + currentAttrValue).hasClass('active'));
      console.log('currentAttrValue', currentAttrValue);

      $('#search-room-service-date').click(() => {
        $('#room-service-orders').html(' ');
        let roomServiceDate =  $('#search-rsdate').val();
        domUpdates.updateDailyRoomServices($('#search-rsdate').val(), roomServiceData, roomServices);
        $('#rs-order-date').text($('#search-rsdate').val());
      });
      

      /*-----Users----*/
      $('#search-input').keyup((e) => {
        if(!$('#search-input').val()){
          $('#tab-select-user').text('None selected');
        } else {
          let userSearch = userRepo.searchUsersRealtime($('#search-input').val());
          if(userSearch.length) {
            $('#tab-select-user').text(userSearch[0].name);
            if(e.keyCode == 13)
              { 
                console.log('userID is ', userRepo.searchUsersRealtime($('#search-input').val())[0].id);
                let usersId = userRepo.searchUsersRealtime($('#search-input').val())[0].id;
                console.log('activeUser before', activeUser);
                activeUser = userRepo.searchUsersRealtime($('#search-input').val())[0].name;
                console.log('activeUser userId', activeUser);
                domUpdates.updateUserData(user, usersId);
                console.log('usersId is', usersId);
                //updateOrdersUser(userRepo.searchUsersRealtime(($('#search-input').val())[0].id, dateToday));
                domUpdates.getUserRoomServiceDataDate(usersId, dateToday, roomServices, activeUser);
                $('#rs-order-date').text($('#search-rsdate').val());
              }
          } else {
            $('#tab-select-user').text('No user exists with that name');
          }
        }
      });
      $('#new-user-input').keyup((e) => {
        if(e.keyCode == 13)
          {
            console.log('new user is ', $('#new-user-input').val());
            let userID = domUpdates.createNewUser(user, $('#new-user-input').val());
            domUpdates.updateUserData(user, userID.id)
          }
      });
      
    });
   
  //  $('#steps-container__main').hide();
  //  $('#tab1').hide();
    
  });

  function updateOrdersUser(userID, date) {
    console.log('updateOrdersUser ', userID, date);
    

  };
 
