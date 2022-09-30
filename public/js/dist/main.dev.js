"use strict";

var cityName = document.getElementById('cityName');
var submitBtn = document.getElementById('submitBtn');
var city_name = document.getElementById('city_name');
var temp_real_val = document.getElementById('temp_real_val');
var temp_status = document.getElementById('temp_status');
var datahide = document.querySelector('.middle_layer');

var getInfo = function getInfo(event) {
  var cityVal, url, response, data, arrData;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          cityVal = cityName.value;

          if (!(cityVal === "")) {
            _context.next = 7;
            break;
          }

          city_name.innertext = "Please write the name before search";
          datahide.classList.add('data_hide');
          _context.next = 26;
          break;

        case 7:
          _context.prev = 7;
          url = "https://api.openweathermap.org/data/2.5/weather?q=".concat(cityVal, "&appid=b411d3e15e8b45c997a5a39dbc5172d4&units=metric");
          _context.next = 11;
          return regeneratorRuntime.awrap(fetch(url));

        case 11:
          response = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          data = _context.sent;
          arrData = [data];
          city_name.innerText = "".concat(arrData[0].name, ", ").concat(arrData[0].sys.country);
          temp.innerText = arrData[0].main.temp; //condition to check sunny or cloudy

          if (tempMood = "Clear") {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
          } else if (tempMood = "Clouds") {
            temp_status.innerHTML = "<i class='fa fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempMood = "Rain") {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;></i>";
          } else {
            temp_status.innerHTML = "<i class ='fas fa-sun' style='color: #eccc68;'></i>";
          }

          datahide.classList.remove('data_hide');
          _context.next = 26;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](7);
          city_name.innertext = "Please write the city name properly";
          datahide.classList.add('data_hide');

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 22]]);
};

submitBtn.addEventListener('click', getInfo);
//# sourceMappingURL=main.dev.js.map
