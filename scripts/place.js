// setup the constants for page elements
const temp = document.querySelector("#temp");
const cond = document.querySelector("#cond");
const speed = document.querySelector("#wind");
const windchill = document.querySelector("#wind-chill");

let tmp_units = 'F';
let spd_units = 'mph';
let tmp = 30;
let cnd = 'Partly Cloudy';
let spd = 10;
let chill = 'N/A';

if (tmp_units = 'F' && tmp <= 50 && spd > 3) {
    chill = calculateWindChill(tmp_units, tmp, spd);
    tmp_units = '°F';
} else if (tmp_units = 'C' && tmp <= 10 && spd > 4.8) {
    chill = calculateWindChill(tmp_units, tmp, spd);
    tmp_units = '°C';
} else {
    chill = 'N/A';
}

temp.innerHTML = ` <span>${tmp} ${tmp_units}</span>`;
cond.innerHTML = ` <span>${cnd}</span>`;
speed.innerHTML = ` <span>${spd}  ${spd_units} </span>`;
windchill.innerHTML = ` <span>${chill} ${tmp_units}</span>`;

function calculateWindChill(tmp_units, temp, speed) {
    if (tmp_units = 'F') {
        return Math.round(35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16));
    } else if (tmp_units = 'C') {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * (speed ** 0.16) + 0.3965 * temp * (speed ** 0.16));
    } else
        return 'N/A';

}
