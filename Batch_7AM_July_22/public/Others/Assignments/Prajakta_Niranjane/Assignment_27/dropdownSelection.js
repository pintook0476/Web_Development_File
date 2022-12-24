var countryData = ["India","USA","Japan"];

var stateData = {
     India : ["Maharastra", "Telangana","Bihar"],
     USA : ["California", "Washington","NewYork"],
     Japan : ["Ishikawa", "Akita","Oita"]
};
var districtData={
    Maharastra: ["Nagpur","Mumbai","Chandrapur"],
    Telangana:["Adilabad","Suryapet", "Jagtial"],
    Bihar: ["Patna","Kaimur", "Nawada"],
    California: ["Ceritos","Walnut", "Highland"],
    Washington: ["Adna","Almira", "Benge"],
    NewYork: ["Erik","Amenia", "Afton"],
    Ishikawa: ['Mirpur','Bagh','Haveli'],
    Akita: ['Richmond','Brent','Hackney'],
    Oita: ['Kannur','Kasaragod','Kollam'],
}

var fillCountryOptions=() =>{
    //creating first option of each
   var countryOptionTag = document.createElement("option");
   countryOptionTag.innerHTML="Select Country";
   document.querySelector("#country").append(countryOptionTag);
   var stateOptionTag =document.createElement("option");
   stateOptionTag.innerHTML="Select State";
   document.querySelector("#state").append(stateOptionTag);
   var districtOptionTag =document.createElement("option");
   districtOptionTag.innerHTML="Select District";
   document.querySelector("#district").append(districtOptionTag);
  //filling country options
    for(var i=0; i<countryData.length; i++){
        var optionTagOfCountry = document.createElement("option");
        optionTagOfCountry.innerHTML = countryData[i];
        document.querySelector("#country").append(optionTagOfCountry);
    }
}

//after selection of country happened, remove disabled of state field
var setCountry = ()=>{
    var selectedCountry = document.querySelector("#country").value;
    console.log(selectedCountry);
    for(var i=0; i<countryData.length; i++){
    if(countryData[i]==selectedCountry){
        document.querySelector("#state").removeAttribute("disabled");
    }
}
fillStateOptions(selectedCountry);
}

var fillStateOptions=(selectedCountry)=>{
    var stateList=[];
    console.log(selectedCountry);
    stateList = stateData[selectedCountry];
    console.log(stateList);
    //for filling state options
    for(var i = 0; i < stateList.length; i++){
        var optionTagOfState = document.createElement("option");
        optionTagOfState.innerHTML = stateList[i];
        document.querySelector("#state").append(optionTagOfState);
}
};

var setState=()=>{
    var selectedState = document.querySelector("#state").value;
    console.log(selectedState);
    if(selectedState==selectedState)
    {
        document.querySelector("#district").removeAttribute("disabled");
    }
    fillDistrictData(selectedState);
}
var fillDistrictData=(selectedState)=>{
    var districtList=[];
    console.log(selectedState);
    districtList = districtData[selectedState];
    console.log(districtList);
    //for filling state options
    for(var i = 0; i < districtList.length; i++){
        var optionTagOfDistrict = document.createElement("option");
        optionTagOfDistrict.innerHTML = districtList[i];
        document.querySelector("#district").append(optionTagOfDistrict);
}
}
fillCountryOptions();
