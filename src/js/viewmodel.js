function ViewModel() {
  var self = this;

  self.clubs = model.usualClubs; //Set the active list to 5 required locations

  self.clubList = ko.observableArray([]); // Holds the displayed list

  self.tmpList = []; // temp list for filter function

  self.source = ko.observable("default"); // data source for active list

  self.filterString = ko.observable(""); // search string for filter function

  self.btn1_on = ko.observable(true); // enable source button
  self.btn2_on = ko.observable(true); // enable filter button

  // load the active list into the display list
  self.showClubs = function() {
    self.clubList(self.clubs);
  };

  self.showClubs();

  // create temp list of clubs that match filter regexj
  self.filterClub = function(club, index) {
    var patt = new RegExp(self.filterString());
    if (patt.test(club.name)) {
      self.tmpList.push(club);
    }
  };

  // get and display filtered list
  self.filterList = function() {
    self.clubList().forEach(self.filterClub);
    self.clubList(self.tmpList);
    self.btn1_on(false);
    self.tmpList = [];
    resetMarkers();
  };

  // show complete active list
  self.resetAll = function() {
    self.showClubs(self.clubs);
    self.tmpList = [];
    self.btn1_on(true);
    resetMarkers();
  };

  // set hte active list based on radio buttons
  self.changeSource = function() {
    self.resetAll();
    if (self.source() == "tm") {
      self.clubs = model.tmClubs;
      self.showClubs();
      resetMarkers();
    } else {
      self.clubs = model.usualClubs;
      self.showClubs();
      resetMarkers();
    }
  };

  // builds infowindow on menu click
  self.buildInfoWindow = function(data) {
    listInfoWindow(data);
  };
}

var mapError = function() {
  alert("Oh No! Faied to get data from Google Maps");
};
