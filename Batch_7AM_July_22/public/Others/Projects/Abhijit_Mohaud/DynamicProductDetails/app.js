
var pdetails = [{
    name:'Mobile',
    price: '25000',
    discountPercent: 15,
    manufacturer:"Samsung",
    rating:"4.3/5",
    Image: 'https://www.chooseyourmobile.com/wp-content/uploads/2020/11/LG-K92-5G-Black-Color-1280x853.jpg'
},
{
    name:'EarPhone',
    price: '2100',
    discountPercent: 10,
    manufacturer:"Sony",
    rating:"4.5/5",
    Image: 'https://n1.sdlcdn.com/imgs/j/b/5/RPM-Euro-Games-Gaming-Earphone-SDL207268455-1-d365a.jpeg'
},
{
    name:'EarBud',
    price: '12000',
    discountPercent: 15,
    manufacturer:"Samsung",
    rating:"4.1/5",
    Image: 'https://www.energysistem.com/cdnassets/products/44976/principal_2000.jpg'
},
{
    name:'Bluetooth Speaker',
    price: '5000',
    discountPercent: 10,
    manufacturer:"Boat",
    rating:"4.6/5",
    Image: 'https://rukminim1.flixcart.com/image/416/416/jyxaw7k0/speaker/mobile-tablet-speaker/x/m/q/buy-surety-best-quality-bluetooth-speaker-original-imafgc6duzyf9w97.jpeg?q=70'
}
];
var loadproductData = (pdetails)=> {


    var ulTag = document.createElement('ul');
    ulTag.setAttribute('class','pdetails');

    
    var li5 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute('src',pdetails.Image);
    li5.append(imgTag);
    ulTag.append(li5);

    var li1 = document.createElement("li");
    li1.innerText = "Product Name: " + pdetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = "Product Price: ";
    ulTag.append(li2);

    var span1 = document.createElement("span");
    span1.setAttribute("class","actualPrice");
    span1.innerText = pdetails.price;
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class","discountPrice");
    span2.innerText = pdetails.price - (pdetails.price * pdetails.discountPercent) / 100;
    li2.append(span2);

    var li3 = document.createElement("li");
    li3.innerText ="Manufacturer: " + pdetails.manufacturer;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText ="Raing: " + pdetails.rating;
    ulTag.append(li4);



    document.querySelector('.mainContainer').append(ulTag);
    console.log(ulTag)
}
for (var i = 0; i < pdetails.length; i++){
    loadproductData(pdetails[i]);
}
