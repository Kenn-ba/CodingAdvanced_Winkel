import './style.css'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { MAPBOX_ACCESS_TOKEN } from './secretMapbox.json';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

})


async function reverseGeocodeAsync(lon,lat){
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/812%20Broadway%2C%20New%20York%2C%20NY%2010003%2C%20United%20States.json?proximity=-73.990593%2C40.740121&access_token=' + MAPBOX_ACCESS_TOKEN; 
  const response = await fetch(url);
  const data = await response.json();
  const address = data.features[0].place_name;
  console.log(address);
  return address
}

async function main(){
  const lon = -73.990593;
  const lat = 40.740121;
  const address = await reverseGeocodeAsync(lon,lat);

  let place = document.getElementById("place");
  document.getElementById("loader").style.display = "none";
  place.textContent = ": "+address;
  document.getElementById("place").style.display = "inline"
}
main();


var wrapperMenu = document.querySelector('.wrapper');
wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
  document.querySelector('.menu').classList.toggle('show');
})
;
