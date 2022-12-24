var getStAdress = () => {
    nameF = document.querySelector("#fName").value;
    nameS = document.querySelector("#sName").value;
    mobileNo = document.querySelector("#stMob").value;
    emailId = document.querySelector("#stEmail").value;
    flatNo = document.querySelector("#stFlatNo").value;
    cityName = document.querySelector("#stCity").value;
    cityPin = document.querySelector("#pinCode").value;
    stateName = document.querySelector("#state").value;
    countryName = document.querySelector("#country").value;

    displayTheValue();
};

var displayTheValue = () => {
    document.querySelector(".displayValueOfStudent").style.display = "block";
    document.querySelector(".displayName").innerText = nameF + " " + nameS;
    document.querySelector(".displayMobile").innerText = mobileNo;
    document.querySelector(".displayEmail").innerText = emailId;
    document.querySelector(".displayFlat").innerText = flatNo;
    document.querySelector(".displayCity").innerText = cityName;
    document.querySelector(".displayPin").innerText = cityPin;
    document.querySelector(".displayState").innerText = stateName;
    document.querySelector(".displayCountry").innerText = countryName;
    
}