var count = 0;
var statecount = 0;
var countryselect = () => {

    var country = document.querySelector("#country").value;
    var optElement = document.querySelector(".optdata");
    switch (country) {
        case "India":
            var count1 = count;
            for (var j = 0; j < count1; j++) {
                if (optElement != "undefined" && optElement != null) {
                    document.querySelector(".optdata").remove();
                    count = count - 1;
                }
            }
            var state = [null];
            state = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and kashmir", "Ladakh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];

            for (var i = 0; i < state.length; i++) {

                count = count + 1;
                var opti = document.createElement('option');
                var data = state[i].substr(0, 3);
                opti.setAttribute('value', data);
                opti.setAttribute('class', 'optdata');
                opti.textContent = state[i];
                document.querySelector("#State").append(opti);

            }
            break;

        case "USA":
            var count1 = count;
            for (var k = 0; k < count1; k++) {
                if (optElement != "undefined" && optElement != null) {
                    document.querySelector(".optdata").remove();
                    count = count - 1;
                }
            }

            var state = [null];
            state = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii",
                "Idaho", "Illinois", "Indiana", "Lowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
            ];
            for (var l = 0; l < state.length; l++) {

                count = count + 1;
                var opti = document.createElement('option');
                var data = state[l].substr(0, 3);
                opti.setAttribute('value', data);
                opti.setAttribute('class', 'optdata');
                opti.textContent = state[l];
                document.querySelector("#State").append(opti);

            }
            break;

        case "China":
            var count1 = count;
            for (var k = 0; k < count1; k++) {
                if (optElement != "undefined" && optElement != null) {
                    document.querySelector(".optdata").remove();
                    count = count - 1;
                }
            }

            var state = [null];
            state = ["Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Nei Mongol", "Ningxia Hui", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan", "Tianjin", "Xinjiang ", "Uygur", "Xizang ", "Yunnan", "Zhejiang"];
            for (var l = 0; l < state.length; l++) {

                count = count + 1;
                var opti = document.createElement('option');
                var data = state[l].substr(0, 3);
                opti.setAttribute('value', data);
                opti.setAttribute('class', 'optdata');
                opti.textContent = state[l];
                document.querySelector("#State").append(opti);

            }
            break;
    }
}

var statemessage = () => {
    if (document.querySelector("#State").value == "") {
        alert("Please Select Country First");
    }
}

var districtmessage = () => {
    if (document.querySelector("#city").value == "") {
        alert("Please Select State First");
    }
}

var stateselect = () => {

    var state = document.querySelector("#State").value;
    var optstateElement = document.querySelector(".optstatedata");

    switch (state) {
        case "And":
            var count2 = statecount;
            for (var k = 0; k < count2; k++) {
                if (optstateElement != "undefined" && optstateElement != null) {
                    document.querySelector(".optstatedata").remove();
                    statecount = statecount - 1;
                }
            }
            var city = [null];
            city = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Sri Potti Sri Ramulu Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"];
            for (var l = 0; l < city.length; l++) {

                statecount = statecount + 1;
                var opti = document.createElement('option');
                opti.setAttribute('value', city[l]);
                opti.setAttribute('class', 'optstatedata');
                opti.textContent = city[l];
                document.querySelector("#city").append(opti);

            }
            break;
        case "Aru":
            var count2 = statecount;
            for (var k = 0; k < count2; k++) {
                if (optstateElement != "undefined" && optstateElement != null) {
                    document.querySelector(".optstatedata").remove();
                    statecount = statecount - 1;
                }
            }
            var city = [null];
            city = ["Anjaw", "Changlang", "East Kameng", "Pasighat", "Lohit", "Lower", "Papum Pare", "Tawang Town", "Tirap", "Lower Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Upper Dibang Valley", "Kurung Kumey"];
            for (var l = 0; l < city.length; l++) {

                statecount = statecount + 1;
                var opti = document.createElement('option');
                opti.setAttribute('value', city[l]);
                opti.setAttribute('class', 'optstatedata');
                opti.textContent = city[l];
                document.querySelector("#city").append(opti);

            }
            break;
    }
}