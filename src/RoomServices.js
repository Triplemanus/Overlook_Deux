class RoomServices {
  constructor (roomServicesData) {
    this.data = roomServicesData.roomServices
    // this.userID = userID;
    // this.food = foodOrder;
    // this.totalCost = totalCost;
  }

  getUserRoomServiceChargesDate(userId, date) {
    const userRSCharges = this.data.reduce((allCharges, services) => {
      if(services.date === date && services.userID === userId) allCharges += services.totalCost;
      return allCharges;
    },0);
    return Number.parseFloat((userRSCharges).toFixed(2));
  }

  getUserRoomServiceChargesAllTime(userId) {
    const userRSCharges = this.data.reduce((allCharges, services) => {
      if(services.userID === userId) allCharges += services.totalCost;
      return allCharges;
    },0);
    return Number.parseFloat((userRSCharges).toFixed(2));
  }

  getUserRoomServiceDataAllTime(userId) {
    const userRSDatesCharges = this.data.reduce((allDatesCharges, services) => {
      if(services.userID === userId) {
        allDatesCharges.push([services.date, services.totalCost])
      } 
      return allDatesCharges;
    },[]);
    return userRSDatesCharges;
  }

  orderRoomServices() {

  }
  
  getTotalRoomServiceRevenueDate(date) {
    const totalRSRevenue = this.data.reduce((rsRevenue, service) => {
      if (service.date === date ) rsRevenue += service.totalCost;
      return rsRevenue;
    }, 0);
    return Number.parseFloat((totalRSRevenue).toFixed(2));
  }

  getTotalRoomServicesDate(date) {
    const totalRoomServices = this.data.reduce((roomServices, service) => {
      if (service.date === date ) roomServices.push(service);
      return roomServices;
    }, []);
    return totalRoomServices;
  }
}

export default RoomServices;