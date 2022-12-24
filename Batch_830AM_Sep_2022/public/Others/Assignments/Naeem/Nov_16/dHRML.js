let details = [{
    name: "Naeem",
    age: 90,
    gender: "Male",
    basicSal: 90900,
    totalSal: 2700000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqokIuLDZaMPTSjOF1C69jFO93betgx1HysHtxi1Sjg&s"
},
{
    name: "Muzammil",
    age: 45,
    gender: "Male",
    basicSal: 600000,
    totalSal: 140000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0hxx2Xcmy6IAxx7iAJUAoa_dl_9buqui58llwvJYo6Pa9eiw8Pkdc0KzE4Bl1FDD4mM&usqp=CAU"
},
{
    name: "Raju",
    age: 34,
    gender: "Male",
    basicSal: 85000,
    totalSal: 270000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x8VhL0TcoYTk-1I02RK-KGoy_TLX1pmt-70ml0I12_9o3TCru1mmYBH-Qk16wB7r2gc&usqp=CAU"
},
{
    name: "Naeem",
    age: 90,
    gender: "Male",
    basicSal: 90900,
    totalSal: 2700000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqokIuLDZaMPTSjOF1C69jFO93betgx1HysHtxi1Sjg&s"
},
{
    name: "Muzammil",
    age: 45,
    gender: "Male",
    basicSal: 600000,
    totalSal: 140000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0hxx2Xcmy6IAxx7iAJUAoa_dl_9buqui58llwvJYo6Pa9eiw8Pkdc0KzE4Bl1FDD4mM&usqp=CAU"
},
{
    name: "Raju",
    age: 34,
    gender: "Male",
    basicSal: 85000,
    totalSal: 270000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x8VhL0TcoYTk-1I02RK-KGoy_TLX1pmt-70ml0I12_9o3TCru1mmYBH-Qk16wB7r2gc&usqp=CAU"
},
{
    name: "Naeem",
    age: 90,
    gender: "Male",
    basicSal: 90900,
    totalSal: 2700000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqokIuLDZaMPTSjOF1C69jFO93betgx1HysHtxi1Sjg&s"
},
{
    name: "Muzammil",
    age: 45,
    gender: "Male",
    basicSal: 600000,
    totalSal: 140000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0hxx2Xcmy6IAxx7iAJUAoa_dl_9buqui58llwvJYo6Pa9eiw8Pkdc0KzE4Bl1FDD4mM&usqp=CAU"
},
{
    name: "Raju",
    age: 34,
    gender: "Male",
    basicSal: 85000,
    totalSal: 270000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x8VhL0TcoYTk-1I02RK-KGoy_TLX1pmt-70ml0I12_9o3TCru1mmYBH-Qk16wB7r2gc&usqp=CAU"
},
{
    name: "Naeem",
    age: 90,
    gender: "Male",
    basicSal: 90900,
    totalSal: 2700000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqokIuLDZaMPTSjOF1C69jFO93betgx1HysHtxi1Sjg&s"
},
{
    name: "Muzammil",
    age: 45,
    gender: "Male",
    basicSal: 600000,
    totalSal: 140000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0hxx2Xcmy6IAxx7iAJUAoa_dl_9buqui58llwvJYo6Pa9eiw8Pkdc0KzE4Bl1FDD4mM&usqp=CAU"
},
{
    name: "Raju",
    age: 34,
    gender: "Male",
    basicSal: 85000,
    totalSal: 270000,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x8VhL0TcoYTk-1I02RK-KGoy_TLX1pmt-70ml0I12_9o3TCru1mmYBH-Qk16wB7r2gc&usqp=CAU"
}
];


const createDetails = (details) => {
    let htTag = document.querySelector(".details")
    let container = document.createElement("div"); 
    container.setAttribute("class","container");
    htTag.append(container);
    let left = document.createElement("div");
    left.setAttribute("class", "left");
    container.append(left);

    let right = document.createElement("div");
    right.setAttribute("class", "right");
    container.append(right);

    let ul = document.createElement("ul");
    right.append(ul);

    let li1 = document.createElement("li");
    li1.innerHTML = `Name : ${details.name}`;
    ul.append(li1);


    let li2 = document.createElement("li");
    li2.innerHTML = `Age : ${details.age}`
    ul.append(li2);


    let li3 = document.createElement("li");
    li3.innerHTML = `Gender : ${details.gender}`;
    ul.append(li3);


    let li4 = document.createElement("li");
    li4.innerHTML = `Basic Salary : ${details.basicSal}`;
    ul.append(li4);


    let li5 = document.createElement("li");
    li5.innerHTML = `Total Salary : ${details.totalSal}`;
    ul.append(li5);

    let profileImage = document.createElement("img");
    profileImage.setAttribute("src", details.url);
    left.append(profileImage);
}

for (let i = 0; i < details.length; i++) {

    createDetails(details[i]);

}
