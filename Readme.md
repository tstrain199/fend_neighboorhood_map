<!-- Heading -->
# Front-End Web Developer Nanodegree Neighborhood Map

## About this project
This is a single page application that serves as the capstone project to Udacity's Front-End Web Developer Nanaodegree.

### Techniques Used
* Use of a Javascript framework (Knockout JS)
* Data point via asynchronous third party API calls
* Error handling for asynchronous API calls
* Responsive rendering for multiple devices
* Use of Google Maps API with markers and infowindows

### Features
* Venues that feature Jazz music in the NYC metro map_area
* Selectable source of venues (default or TicketMaster)
* Ability to filter the venue list
* Clickable list and markers display image and phone number of venue

## How To

### Setup
1. Clone this repository
1. Inside the repository directory run npm install
1. Run gulp with no arguments
1. Open dist/index.html in a modern browser

```
git clone https://github.com/tstrain199/fend_neighborhood_map.git
cd fend_neighborhood_map
npm install
gulp
```

### User Controls
__ Select Source __  Choose between the best known venues or venues with events listed on Ticketmaster
__ Filter __ Filter venues based on text text text
__ Show All Clubs __  Removes filter


### Gulp tasks
* clean-js    Removes bundle.js file from dist/js directory
* clean-css   Removes stylesheet.css file from dist/css directory
* pack-js     Minifies all javascript files and concatenates them into a single bundle.js file
* pack-css    Minifies all css files and concatenates them into a single stylesheet.css file
* [default]   Runs clean-js, clean-css, pack-js, and pack-css
