var productdetails = [
    {
    name: 'Laptop',
    price: 45000,
    discountpersentage: 10,
    manufacturer: 'Sony',
    rating: 4.5,
    image: './photos/2593044.jpg',
},
{
    name: 'Laptop',
    price: 3000,
    discountpersentage: 10,
    manufacturer: 'Sony',
    rating: 4,
    image: './photos/2593044.jpg',

},
{   
    name: 'Laptop',
    price: 1200,
    discountpersentage: 5,
    manufacturer: 'Sony',
    rating: 5,
    image: './photos/2593044.jpg',
}
]
var pdetails = (productdetails) => {
var ul1 = document.createElement("ul");
ul1.setAttribute("class",'ul');


var li1 = document.createElement("li");
li1.innerText = 'Product name:'+ productdetails.name;
ul1.append(li1);

 var li2 = document.createElement("li");
li2.innerText = "Product Price : " ;
ul1.append(li2);

var span1 = document.createElement("span");
span1.setAttribute("class",'actualprice');
span1.innerText = productdetails.price + " ";
li2.append(span1);

var span2 = document.createElement("span");
span2.setAttribute("class",'discount');
span2.innerText = productdetails.price - (productdetails.price * productdetails.discountpersentage)/100;
li2.append(span2);

var li3 = document.createElement("li");
li3.innerText = 'Manufacturer:' + productdetails.manufacturer;
ul1.append(li3);

var li4 = document.createElement("li");
li4.innerText = 'Rating' + productdetails.rating;
ul1.append(li4);

var li5 = document.createElement("li");
ul1.append(li5);
var image = document.createElement("img");
image.setAttribute("src",productdetails.image);
li5.append(image);
document.querySelector(".pdetailscontainer").append(ul1);
console.log(ul1);
}
for(i = 0; i < productdetails.length; i++){
     pdetails(productdetails[i])
}
var ratingStar = () =>{
    
}