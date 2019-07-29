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
   
    console.log(users);
  };

  function getBookingsData(bookingData) {
    let bookings = new Bookings(bookingData);
   
    console.log(bookings.getTotalBookingsCustomer(34));
    console.log(bookings.getTotalBookingsDate("2019/07/25"));

   // return bookings;
  };

  function getRoomsData(rooms) {
 
    console.log(rooms);
  };

  function getRoomServicesData(roomServices) {
 
    console.log(roomServices);
    return roomServices;
  };

  // thing1 = fetch('');
  // thing1 = fetch('');
  // thing1 = fetch('');
  // thing1 = fetch('');

  // let myHotel;

  // Promise.all[things 1-4];
  // .then( myHotel = new Hotel(promise))
  // .then (myHotel.open())
  // 
  // open(){ 
  // this.customers = users.forEach {
  //   this.customers.push( new Customer(id, name, bookings, rmService)
  // }
  // 
  // hotel.currentCustomer

  // let bookings = getBookingsData(); 
  // console.log(Object.values(bookings.bookings));

