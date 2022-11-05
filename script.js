const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=[APPKEY]";
let divApp = document.querySelector("#app");
let inputElm = document.createElement("input");
let btnElm = document.createElement("button");
inputElm.setAttribute("id", "city");
btnElm.setAttribute("id", "search");
inputElm.setAttribute("placeholder", "City");
btnElm.innerHTML = "Search";

divApp.appendChild(inputElm);
divApp.appendChild(btnElm);

searchCity = () => {
  let inputValue = inputElm.value.toUpperCase();
  if (inputValue) {
    console.log("Girilen Şehir:", inputValue);
    fetchWeather(inputValue);
  } else {
    let paragraf = document.createElement("p");
    paragraf.setAttribute("id", "par");
    divApp.appendChild(paragraf);
    document.querySelector("#par").innerText = "Şehir girmelisiniz!";
  }
};

btnElm.addEventListener("click", searchCity);

const fetchWeather = async (city) => {
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=380b35b99ba5b501a454f512c292ce11"
  );
  let res = await response.json();
  showWeahter(res);
};

const showWeahter = (res) => {
  let iconurl =
    "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
  console.log("test", res);
  divApp.innerHTML = "";
  divApp.innerHTML +=
    "<p class='ptag'>" +
    res.name.toUpperCase() +
    "</p>" +
    "<p class='ptag'>" +
    res.main.temp.toFixed(0) +
    "</p>" +
    "<img id='image' src='" +
    iconurl +
    "'>" +
    "<button id='reload'> Try </button>";

  document.querySelector("#reload").onclick = () => {
    location.reload();
  };
};
