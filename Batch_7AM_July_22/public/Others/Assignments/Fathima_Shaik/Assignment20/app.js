var pdetailsList = [
    {
        name:'Laptop',
        price:45000,
        discountPercent: 10,
        manufacturer: 'Sony',
        rating: '5/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/laptop.jpg"
    },
    {
        name:'Pendrive',
        price: 2000,
        discountPercent: 10,
        manufacturer: 'hp',
        rating: '4.7/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/pendrive.jpg"
    },
    {
        name:'Mouse',
        price:620,
        discountPercent: 10,
        manufacturer: 'Dell',
        rating: '4.9/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/mouse.jpg"    
    },
    {
        name:'Inverter',
        price:50000,
        discountPercent: 10,
        manufacturer: 'Luminous',
        rating: '5/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/inverter.webp"    
    },
    {
        name:'Ceiling Fan',
        price:6000,
        discountPercent: 10,
        manufacturer: 'Orino',
        rating: '4.5/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/fan.jpg"    
    },
    {
        name:'Scientific Calc',
        price:650,
        discountPercent: 10,
        manufacturer: 'Casio',
        rating: '5/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/calculator.webp"
    },
    {
        name:'Book',
        price:200,
        discountPercent: 10,
        manufacturer: 'Samjo',
        rating: '4.7/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/book.png"    
    },
    {
        name:'Wheel Bag',
        price:3000,
        discountPercent: 10,
        manufacturer: 'Ursuit',
        rating: '4.5/5',
        image:"file:///C:/Fathima/FULLSTACKUI/My_Practical_Programs/MY%20ASSIGNMENTS/Assignment20/Images/wheelbag.png"    
    },
];

var loadProductData = (pdetails) => {
var ulTag = document.createElement("ul");
ulTag.setAttribute("class", 'pdetails');

var li1 = document.createElement("li");
li1.innerHTML = "Product Name: " ;
var span1 = document.createElement("span");
span1.setAttribute("class",'valueStyles');
span1.innerText = pdetails.name;
li1.append(span1);
ulTag.append(li1);

var li2 = document.createElement("li");
li2.innerHTML = "Product Price: " ;
var span2 = document.createElement("span");
span2.setAttribute("class",'actualPrice');
span2.innerText = pdetails.price;
li2.append(span2);
var span3 = document.createElement("span");
span3.setAttribute("class",'discountedPrice');
span3.innerText = pdetails.price - (pdetails.price * 10) / 100 ;
li2.append(span3);
ulTag.append(li2);

var li3 = document.createElement("li");
li3.innerHTML = "Manufacturer: " ;
var span4 = document.createElement("span");
span4.setAttribute("class",'valueStyles');
span4.innerText = pdetails.manufacturer;
li3.append(span4);
ulTag.append(li3);

var li4 = document.createElement("li");
li4.innerText = "Rating: " ;
var span5 = document.createElement("span");
span5.setAttribute("class",'valueStyles');
span5.innerText = pdetails.rating;
li4.append(span5);
ulTag.append(li4);

var li5 = document.createElement("li");
var image = document.createElement("img");
image.setAttribute("src", pdetails.image);
li5.append(image);
ulTag.append(li5);

document.querySelector(".pContainer").append(ulTag);
console.log(ulTag);
}

for(var i=0; i<pdetailsList.length; i++){
    loadProductData(pdetailsList[i]);
}